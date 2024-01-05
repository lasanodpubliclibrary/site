import Image from "next/image";
import Link from "next/link";

import SignUpForm from "@/components/auth/signup-form";

import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Join to Laascaanood Public Library",
};

export default async function Signup() {
  return (
    <div className="p-5 h-fit w-fit my-auto shadow-lg rounded-lg border">
      <div className="flex items-center gap-5 mb-9 justify-between">
        <Link href="/">
          <div className="relative  w-16 h-16 rounded-full">
            <Image src="/logo.svg" alt="logo" fill className="rounded-full" />
          </div>
        </Link>

        <div className="flex items-baseline gap-2">
          <p className="text-sm tracking-tight text-neutral-900 font-light">
            Already have an account?
          </p>
          <Link
            href="/sign-in"
            className="text-[13px] font-normal flex items-center gap-1"
          >
            Sign in &nbsp;&rarr;
          </Link>
        </div>
      </div>

      <section className="mb-7">
        <h1 className=" mb-1 text-2xl font-semibold">Create Your Account</h1>
        <p className="text-muted-foreground font-light">
          to continue to{" "}
          <strong className="font-[500]">{siteConfig.name}.</strong>
        </p>
      </section>

      <SignUpForm />
    </div>
  );
}
