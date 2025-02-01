import React from 'react';
import { Heading } from '@/components/ui/heading'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { team } from '@/data/team'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team - Compute the Future",
  description: "Meet the passionate team behind Compute the Future, dedicated to bridging the gap between technology and education.",
};

interface Member {
    name: string;
    about: string;
    role: string;
    tags: string;
    img: string;
}

function TeamMember({member}:{member:Member}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='cursor-pointer flex flex-row gap-5 items-center justify-center py-4 h-fit border border-gray-200 rounded-2xl'>
                    <div className='flex flex-col items-center justify-center'>
                        <Avatar className='w-20 h-20' >
                            <AvatarImage src={member.img} alt={`@${member.name}`} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-xl font-extrabold'>{member.name}</span>
                        <span className='text-sm font-bold text-teal-400'>{member.role}</span>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-fit">
                <div className='flex flex-row gap-5 items-center justify-center p-4 h-full border border-gray-200 rounded-2xl'>
                    <div className='flex flex-col items-center justify-center'>
                        <Avatar className='w-20 h-20' >
                            <AvatarImage src={member.img} alt={`@${member.name}`} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-xl font-extrabold'>{member.name}</span>
                        <span className='text-sm font-bold text-teal-400'>{member.role}</span>
                        <span>{member.about}</span>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
)
}

export default function Team() {

    return (
        <section className="flex flex-col gap-10">
            <header className='h-full w-full flex flex-col gap-5 justify-between items-center'>
                <Heading as='h1'>Our Team</Heading>
                <p className='lg:text-center md:text-xl'>
                    By the students, for the students. We believe in a world where every young person is empowered to be the change they want to see around them. At Hack Club, we’re working hard to make it reality.
                </p>
            </header>
            <section className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {team.map((item,index)=>(
                    <TeamMember key={index} member={item}/>
                ))}
            </section>
        </section>
    )
}