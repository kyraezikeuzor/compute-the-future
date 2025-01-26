import React from 'react';
import { Heading } from '@/components/ui/heading';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founding - Compute the Future",
  description: "Discover the origin story of Compute the Future and how it was founded with a mission to inspire youth through tech and education.",
};

const FoundingStory = () => {
  return (
    <section className="flex flex-col gap-10 md:py-20 md:px-20 lg:px-40">
      <header className="h-full w-full flex flex-col gap-5 justify-between items-center">
        <Heading as="h1">Our Founding</Heading>
        <p className="lg:text-center md:text-xl">
          We started with one simple idea: inspire kids to get excited about code.
        </p>
      </header>

      <div className="flex flex-col gap-6">
        <section>
          <Heading as="h3">How It Started</Heading>
          <p className="md:text-lg">
            In March 2022, two high school freshmen, Kyra Ezikeuzor and Blair Middleton, came up with an idea to bring computer science to kids in Houston. We wanted to show that learning to code can be fun, creative, and open to everyone.
          </p>
        </section>

        <section>
          <Heading as="h3">What We Do</Heading>
          <p className="md:text-lg">
            Since we started, we&apos;ve run cohorts that have taught dozens of students how to code and build projects. Our programs are hands-on and focus on learning by doing—no boring lectures, just creating cool stuff.
          </p>
        </section>

        <section>
          <Heading as="h3">Making an Impact</Heading>
          <p className="md:text-lg">
            With help from our community and supporters, we&apos;ve raised thousands of dollars to grow our programs. Every dollar goes toward reaching more kids and giving them the tools to succeed.
          </p>
        </section>

        <section>
          <Heading as="h3">What&apos;s Next</Heading>
          <p className="md:text-lg">
            We&apos;re just getting started. Our goal is to keep expanding, teaching more students, and showing them how tech can open doors. If you believe in what we&apos;re doing, we&apos;d love for you to get involved!
          </p>
        </section>
      </div>
    </section>
  );
};

export default FoundingStory;
