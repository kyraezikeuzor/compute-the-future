import { getProjects } from '@/lib/airtable';
import Project from '@/components/ui/project';
import { Heading } from '@/components/ui/heading';

import type { Metadata } from "next"; 
export const metadata: Metadata = { 
    title: "Code Gallery - Compute the Future", 
    description: "Welcome to our Code Gallery. View past projects from students throughout our coding cohorts.", 
};

export default async function CodeGallery() {
  const projects = await getProjects();

  return (
    <section className="flex flex-col gap-10 ">
      <header className="h-full w-full flex flex-col gap-5 justify-between items-center">
        <Heading as="h1">Gallery of Code</Heading>
        <p className="lg:text-center md:text-xl">
          Welcome to our Code Gallery. View past projects from students throughout our coding cohorts.
        </p>
      </header>
      
      <section className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 items-center'>
        {projects.map((project, index) => (
          <Project
            key={project.projectLink || index}
            {...project}
          />
        ))}
      </section>
    </section>
  );
}