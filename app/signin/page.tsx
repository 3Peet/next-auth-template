import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import SignInButton from "@/components/ui/sign-in-button";

export default function SignInPage(props: { searchParams: { callbackUrl: string | undefined } }) {
  return (
    <div className="flex w-full items-center min-h-[350px] p-10 justify-center">
      <Card className="max-w-[300px]">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>

        <CardContent>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </CardContent>


        <CardFooter>
          <SignInButton></SignInButton>
        </CardFooter>
      </Card>
    </div>
  )
}