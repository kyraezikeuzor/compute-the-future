'use client'
import React from 'react';
import Link from 'next/link';

import { EmailForm } from './email-form'
import { Heading } from './heading'
import { Logo } from './logo'

import { footer } from '@/data/sitemap';
import { socials } from '@/data/socials'

export function Footer() {
  
  return (
    <footer className="px-4 py-[6vh] md:px-[10vw] md:py-[8vh] flex flex-col items-center gap-8 md:gap-20 text-black border-t-2">
      
      <section className='flex flex-col lg:grid grid-cols-[1fr_.5fr_1.5fr] gap-20  2xl:max-w-[1400px]'>
        <div className='flex flex-row gap-16 items-start justify-between'>
          {footer.map((item,index) => (
            <div key={index} className='flex flex-col gap-5'>
              <Heading as='h6'>{item.name}</Heading>
              <ul className='flex flex-col gap-3'>
                {item.pages.map((page,index)=> (
                  <li key={index} className='hover:opacity-75 font-medium  text-[15px]'> 
                    <Link href={page.path}>{page.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-5 justify-self-start'>
          <Heading as='h6'>Socials</Heading>
          <div className='flex flex-row flex-wrap lg:grid grid-cols-4 gap-4'>
            {socials.map((item,index)=>(
              <Link 
                key={index}
                target="_blank"
                href={item.link !== "" ? item.link : "/"} 
                className='hover:opacity-75 text-black'
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <EmailForm/>
          <span className='text-sm text-black/60 text-right'>
              © 2024 Compute the Future Foundation, Inc.
          </span>
        </div>
      </section>
    </footer>
  );
};