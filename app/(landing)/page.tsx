import { Button } from "@/components/ui/button"
import Link from "next/link"

const LandingPage = () => {
  return (
    <div className="w-full h-full flex  flex-col items-center justify-center gap-5">
      <div>LandingPage (unprotected)</div>
      <div className="flex items-center space-x-4">
        <Link href='/sign-in'>
          <Button>Log in</Button>
        </Link>
        <Link href='sign-up'>
          <Button variant='outline'>Register</Button>
        </Link>
      </div>
    </div>
  )
}
export default LandingPage