// src/app/sign-up/[[...sign-up]]/page.tsx
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center py-12">
       <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
}