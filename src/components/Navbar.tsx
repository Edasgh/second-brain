"use client";
import Link from "next/link";
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { BrainCircuitIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        suppressHydrationWarning
        className="cursor-pointer"
        asChild
      >
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 left-0 right-0 md:px-0 px-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Left */}
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-4">
              <BrainCircuitIcon className="w-6 h-6 text-purple-400" />
              <h1 className="text-xl font-semibold bg-gradient-to-r from-purple-600 dark:from-purple-400 to-purple-400 dark:to-purple-100 bg-clip-text text-transparent">
                OmniBrain
              </h1>
            </Link>
          </div>
          {/* Right */}
          <div className="flex items-center gap-4">
            {/* Dark Mode toggle button */}
            <ModeToggle />
            <SignedIn>
              <Button
                variant="outline"
                className="mr-4 dark:border-[0.2px] dark:border-gray-500 bg-gradient-to-r  from-blue-600 dark:from-blue-400 to-blue-400 dark:to-blue-100 text-transparent bg-clip-text"
              >
                <Link href="/manage_plan">Manage Plan</Link>
              </Button>

              <div className="p-2 w-10 h-10 flex items-center justify-center rounded-full border bg-blue-100 dark:bg-gray-700 border-blue-200 dark:border-blue-950 ">
                <UserButton />
              </div>
            </SignedIn>

            <SignedOut>
              <SignInButton
                mode="modal"
                fallbackRedirectUrl={"/"}
                forceRedirectUrl={"/"}
              >
                <Button
                  variant={"ghost"}
                  className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text cursor-pointer"
                >
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
}
