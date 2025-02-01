import React from 'react';
import { Heading } from '@/components/ui/heading';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Philosophy - Compute the Future",
  description: "Learn about the core values and principles that guide Compute the Future in empowering the next generation of tech leaders.",
};

const Philosophy = () => {
  return (
    <section className="flex flex-col gap-10 lg:px-32">
      <header className="h-full w-full flex flex-col gap-5 justify-between items-center">
        <Heading as="h1">Our Philosophy</Heading>
        <p className="lg:text-center md:text-xl">
          At Compute the Future Foundation, we believe in empowering the next generation through technology, creativity, and community. Here’s what we stand for.
        </p>
      </header>

      <div className="flex flex-col gap-6">
        <section>
          <Heading as="h3">Coding is a Superpower</Heading>
          <p className="md:text-lg">
            Learning to code is like gaining a superpower: it transforms you from a consumer into a creator. Suddenly, computers become tools for innovation, expression, and solving real-world problems.
          </p>
        </section>

        <section>
          <Heading as="h3">Create from Anywhere</Heading>
          <p className="md:text-lg">
            Today, anyone with a laptop and internet connection can make their ideas a reality. The world of technology has never been so globally accessible—building things has become a truly democratized experience.
          </p>
        </section>

        <section>
          <Heading as="h3">Empowering Hackers</Heading>
          <p className="md:text-lg">
            At Compute the Future Foundation, our goal is to cultivate a community of hackers—students who aren’t just learning concepts but are actively building, breaking, and innovating. We envision spaces where creativity thrives and coding becomes second nature.
          </p>
        </section>

        <section>
          <Heading as="h3">Learn by Building</Heading>
          <p className="md:text-lg">
            Traditional programming classes often focus on theory rather than application. We flip the script by teaching through hands-on building. Start with no experience, and by the end of each session, ship something you’ve made. It’s about creating, not just learning.
          </p>
        </section>

        <section>
          <Heading as="h3">Grow Along the Way</Heading>
          <p className="md:text-lg">
            The best programmers didn’t master their craft in a classroom—they learned by doing. With our workshops, you’ll build projects step by step. You may not understand everything at first, but through experimentation and support, you’ll grow into a confident coder.
          </p>
        </section>

        <section>
          <Heading as="h3">A Community of Makers</Heading>
          <p className="md:text-lg">
            Compute the Future Foundation connects you with a global network of creators. We are artists, writers, engineers, tinkerers, and dreamers who support and inspire each other. Together, we build, learn, and have fun.
          </p>
        </section>

        <section>
          <Heading as="h3">Our FUN Philosophy</Heading>
          <p className="md:text-lg">
            Our educational approach is guided by the acronym <strong>FIT: Fun, Inspire, Teach</strong>. These core values create a positive, engaging, and empowering environment for students to thrive.
          </p>
          <ul className="list-disc pl-5 md:text-lg">
            <li>
              <strong>Fun:</strong> We believe learning should be enjoyable. Every student’s journey is enriched with excitement and joy.
            </li>
            <li>
              <strong>Inspire:</strong> Our mission is to ignite curiosity and passion for computer science in the next generation.
            </li>
            <li>
              <strong>Teach:</strong> We are dedicated to educating the next wave of coders and creators, equipping them with the skills to shape the future.
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Philosophy;
