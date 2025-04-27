"use client";

import Link from "next/link";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="p-4" style={{ backgroundColor: "#4169E1" }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">Mugen</Link>
        </div>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>

          {/* If Signed Out, show Sign In / Sign Up */}
          <SignedOut>
            <li>
              <SignInButton mode="modal">
                <button className="bg-white text-yellow-500 font-semibold px-4 py-2 rounded hover:bg-yellow-400 hover:text-white transition">
                  Sign In
                </button>
              </SignInButton>
            </li>
            <li>
              <SignUpButton mode="modal">
                <button className="bg-yellow-400 text-white font-semibold px-4 py-2 rounded hover:bg-white hover:text-yellow-500 transition">
                  Sign Up
                </button>
              </SignUpButton>
            </li>
          </SignedOut>

          {/* If Signed In, show User Button */}
          <SignedIn>
            <li>
              <UserButton afterSignOutUrl="/" />
            </li>
          </SignedIn>
        </ul>
          <ul>
            {/* Register Button */}
            <Link href="/register">
              <button className="bg-white text-yellow-500 font-semibold px-4 py-2 rounded hover:bg-yellow-400 hover:text-white transition">
                Register
              </button>
            </Link> 
          </ul>
      </div>
    </nav>
   
  );
}

