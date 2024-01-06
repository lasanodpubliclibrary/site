import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

import SignInForm from "@/components/auth/signin-form";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to Laascaanood Public Library",
};

export default async function SignIn() {
  return (
    <div className="p-5 h-fit my-auto shadow-lg rounded-lg border">
      <div className="flex items-center gap-5 mb-9 justify-between">
        <Link href="/">
          <div className="relative  w-16 h-16 rounded-full">
            <Image
              src="/logo.svg"
              alt="logo"
              fill
              sizes="100vw"
              className="rounded-full"
            />
          </div>
        </Link>

        <div className="flex items-baseline gap-2">
          <p className="text-sm tracking-tight font-light">
            New to the Library?
          </p>
          <Link
            href="/sign-up"
            className="text-[13px] font-normal flex items-center gap-1 hover:underline hover:underline-2 hover:leading-7"
          >
            Sign up &nbsp; &rarr;
          </Link>
        </div>
      </div>

      <section className="mb-9">
        <h1 className=" mb-1 text-2xl font-semibold">Sign in</h1>
        <p className="text-muted-foreground font-light">
          to continue to&nbsp;
          <strong className="font-[500]">{siteConfig.name}.</strong>
        </p>
      </section>

      <SignInForm />
    </div>
  );
}
