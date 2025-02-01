import React from 'react';
import { Heading } from '@/components/ui/heading';
import { ContactForm } from '@/components/ui/contact-form'

const Contact = () => {
  return (
    <section className="flex flex-col gap-10 lg:px-32">
      <header className="h-full w-full flex flex-col gap-5 justify-between items-center">
        <Heading as="h1">Contact Us</Heading>
        <p className="lg:text-center md:text-xl">
          Contact us for all inquiries relating to our programs, volunteering, guides, sponsorships, donations, and more.
        </p>
      </header>

      <div className="flex flex-col gap-6">
        <ContactForm/>
      </div>
    </section>
  );
};

export default Contact;
