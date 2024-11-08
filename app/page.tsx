import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignIn,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Link from "next/link";
import React from "react";

const Main = () => {
  return (
    <div className="flex h-screen">
      <div
        className="relative p-10 w-1/2 bg-indigo-600 text-white hidden lg:flex lg:flex-col lg:items-center lg:justify-between"
        style={{
          clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)",
        }}
      >
        <p className="text-5xl">⚙️</p>
        <p className="font-bold text-5xl">BASE</p>
        <div className="flex">
          <div className="text-2xl px-3">🖇️</div>
          <div className="text-2xl px-3">💻</div>
          <div className="text-2xl px-3">🔗</div>
          <div className="text-2xl px-3">🗨️</div>
        </div>
      </div>

      {/* Right side div showing the sign-in or user profile */}
      <div className="xs:w-full w-full lg:w-1/2 flex items-center justify-center lg:flex lg:items-center lg:justify-evenly">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <div className="flex flex-col items-center justify-center">
            <SignedOut>
              <SignIn routing="hash" />
            </SignedOut>
            <SignedIn>
              <UserButton />
              <div className="px-10 border">
                <Link href="/marketing">Enter</Link>
              </div>
            </SignedIn>
          </div>
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default Main;
