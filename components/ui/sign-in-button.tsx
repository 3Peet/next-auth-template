import { signIn } from "@/auth";
import { Button } from "./button";

export default function SignInButton() {
  return (
    <form action={async () => {
      "use server"
      await signIn("google", { redirectTo: "/dashboard" })
    }}>
      <Button type="submit">Sign In with Google</Button>
    </form>
  )
}