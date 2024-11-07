import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";
import React from "react";

const Main = () => {
  return (
    <div className="flex h-screen">
      {/* Left side div taking half of the screen */}
      <div className="p-10 w-1/2 bg-indigo-600 text-white flex flex-col items-center justify-between">
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
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <SignedOut>
          <SignIn routing="hash" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Main;
