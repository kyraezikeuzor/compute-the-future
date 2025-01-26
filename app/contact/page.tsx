import React from 'react';
import { Heading } from '@/components/ui/heading';
import { ContactForm } from '@/components/ui/contact-form'

const Contact = () => {
  return (
    <section className="flex flex-col gap-10 md:py-20 md:px-20 lg:px-40">
      <header className="h-full w-full flex flex-col gap-5 justify-between items-center">
        <Heading as="h1">Contact Us</Heading>
        <p className="lg:text-center md:text-xl">
          Welcome to our Code of Conduct. Our community is built on respect, kindness, and inclusivity. Please take a
          moment to review the guidelines below.
        </p>
      </header>

      <div className="flex flex-col gap-6">
        <ContactForm/>
      </div>
    </section>
  );
};

export default Contact;
