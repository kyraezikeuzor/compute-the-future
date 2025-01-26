import React from 'react';
import { Heading } from '@/components/ui/heading';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code of Conduct - Compute the Future",
  description: "Review the Code of Conduct for events and activities organized by Compute the Future, ensuring a safe and inclusive environment for all participants.",
};

const CodeOfConduct = () => {
  return (
    <section className="flex flex-col gap-10 md:py-20 md:px-20 lg:px-40">
      <header className="h-full w-full flex flex-col gap-5 justify-between items-center">
        <Heading as="h1">Code of Conduct</Heading>
        <p className="lg:text-center md:text-xl">
          Welcome to our Code of Conduct. Our community is built on respect, kindness, and inclusivity. Please take a
          moment to review the guidelines below.
        </p>
      </header>

      <div className="flex flex-col gap-6">
        <section>
          <Heading as="h3">TL;DR</Heading>
          <ul className="list-disc pl-5 md:text-lg">
            <li>Treat everyone with respect and kindness.</li>
            <li>Be thoughtful in how you communicate.</li>
            <li>Don't be destructive or inflammatory.</li>
            <li>If you encounter an issue, please email us at <a href="mailto:conduct@computefutures.org" className="text-blue-400 underline">conduct@computefutures.org</a>.</li>
          </ul>
        </section>

        <section>
          <Heading as="h3">Why Have a Code of Conduct?</Heading>
          <p className="md:text-lg">
            Our community includes people from diverse backgrounds. This Code ensures everyone feels safe, welcomed, and respected.
          </p>
        </section>

        <section>
          <Heading as="h3">Where Does It Apply?</Heading>
          <p className="md:text-lg">
            The Code applies to all official Compute the Future spaces, including online groups, events, and GitHub
            projects. Everyone is encouraged to follow these guidelines.
          </p>
        </section>

        <section>
          <Heading as="h3">Community Values</Heading>
          <ul className="list-disc pl-5 md:text-lg">
            <li>Be friendly and welcoming.</li>
            <li>Be patient and considerate of communication styles.</li>
            <li>Respect differences and avoid destructive behavior.</li>
          </ul>
        </section>

        <section>
          <Heading as="h3">Unwelcome Behavior</Heading>
          <p className="md:text-lg">
            Harassment, discrimination, and other harmful behaviors are not tolerated. Violators may be warned, banned, or otherwise removed.
          </p>
        </section>

        <section>
          <Heading as="h3">Reporting Issues</Heading>
          <p className="md:text-lg">
            If you experience or witness misconduct, please report it to <a href="mailto:conduct@computefutures.org" className="text-blue-400 underline">conduct@computefutures.org</a>. Reports are handled confidentially.
          </p>
        </section>
      </div>
    </section>
  );
};

export default CodeOfConduct;
