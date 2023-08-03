'use client';
import { Heading } from '@/components/Heading';
import { MdContentCopy, MdCopyAll, MdOutlineCode } from 'react-icons/md';

import ReactMarkdown from 'react-markdown';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { ChatCompletionRequestMessage } from 'openai';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { formSchema } from './constants';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/EmptyState';
import { Loader } from '@/components/Loader';
import { cn } from '@/lib/utils';
import { UserAvatar } from '@/components/UserAvatar';
import { BotAvatar } from '@/components/BotAvatar';

const CodeGenerationPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content: values.prompt,
      };
      const newMessage = [...messages, userMessage];

      const response = await axios.post('/api/code', {
        messages: newMessage,
      });

      setMessages((current) => [...current, userMessage, response.data]);
      form.reset();
    } catch (error: any) {
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title='Code generation'
        description='Need some help with your code?'
        icon={MdOutlineCode}
        iconColor='text-orange-500'
        bgColor='bg-orange-500/10'
      />
      <div className='px-4 lg:px-8'>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-lg grid grid-cols-12 gap-2'
            >
              <FormField
                name='prompt'
                render={({ field }) => (
                  <FormItem className='col-span-12 lg:col-span-10'>
                    <FormControl className='p-2 m-0'>
                      <Input
                        className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent'
                        disabled={isLoading}
                        placeholder='Simple toggle button using React'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                type='submit'
                className='col-span-12 lg:col-span-2 w-full'
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className='space-y-4 mt-4'>
          {isLoading && (
            <div className='p-8 rounded-lg w-full flex items-center justify-center'>
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <EmptyState label='Start writing a question' />
          )}
          <div className='flex flex-col-reverse gap-y-4'>
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  'p-8 w-full flex items-center gap-x-8 rounded-lg',
                  message.role === 'user' ? ` border border-black/10` : ``,
                )}
              >
                {message.role === 'user' ? <UserAvatar /> : <BotAvatar />}
                <ReactMarkdown
                  className='text-sm overflow-hidden leading-7'
                  components={{
                    pre: ({ node, ...props }) => (
                      <div className='relative overflow-auto w-full my-2 bg-[#121212] text-neutral-200 p-2 rounded-lg'>
                        <pre {...props} />
                      </div>
                    ),
                    code: ({ node, ...props }) => (
                      <code
                        className='bg-[#121212]/10 rounded-lg p-1 text-sm font-semibold'
                        {...props}
                      />
                    ),
                  }}
                >
                  {message.content || ''}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeGenerationPage;
