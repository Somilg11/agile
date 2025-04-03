import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import UserMenu from "./user-menu";
import { GithubIcon, PenBox } from "lucide-react";
import { checkUser } from "@/lib/checkUser";
import UserLoading from "./user-loading";
import Logo from "./logo";

async function Header() {
  await checkUser();

  return (
    <header className="container mx-auto">
      <nav className="py-6 px-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl">
            <span className="flex items-center gap-1">
            <Logo/>
            </span>
          </h1>
        </Link>
        <div className="flex items-center gap-4">

          <a href="https://github.com/Somilg11/agile" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="flex items-center gap-2">
              <GithubIcon size={18} />
              <span className="hidden md:inline">GitHub</span>
            </Button>
          </a>

          <Link href="/project/create">
            <Button variant="destructive" className="flex items-center gap-2">
              <PenBox size={18} />
              <span className="hidden md:inline">Create Project</span>
            </Button>
          </Link>

          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserMenu />
          </SignedIn>

        </div>
      </nav>

      <UserLoading />
    </header>
  );
}

export default Header;