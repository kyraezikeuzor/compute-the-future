import { stats } from '@/data/stats'
import { reviews } from '@/data/reviews'
import Link from 'next/link'
import {  
  BotMessageSquare,
  Info,
} from 'lucide-react'
import {
  Bookmark,
  BookmarkDescription,
  BookmarkTitle
} from '@/components/ui/bookmark'
import {
  Button
} from '@/components/ui/button'
import {
  Heading
} from '@/components/ui/heading'
import {
  Card,
  CardDescription,
  CardHeader,
} from '@/components/ui/card'
import {
  ReviewScroll
} from '@/components/ui/review-scroll'
import { FAQ } from '@/components/ui/faq'

export default async function Home() {
  
  const reviewsData = reviews.map((item,index) => ({
    id: index.toString(),
    reviewer: item.reviewer,
    occupation: item.occupation,
    review: item.review,
    date: item.date,
    location: item.location
  }));
  
  return (
    <section className="flex flex-col min-h-screen gap-32">
        
      <header className="relative h-full w-full flex flex-col gap-32">
        <section className="w-full flex flex-col lg:flex-row gap-12 justify-between items-center text-[--clr-base-text]">   
          <div className='w-full lg:w-1/2 flex flex-col gap-5'>
            <Heading as='h6'>
              We Are Compute the Future
            </Heading>
            <Heading as='h1'>
              We are kids <br className='hidden lg:block'/> teaching other <br className='hidden lg:block'/> kids <span className='text-[--clr-green-base]'>code</span>
            </Heading>
            <p className='md:text-xl '>
              We are inspiring young minds with the computer science and tech skills to expand their dreams.
            </p>
            <div className='flex flex-row gap-2'>
              <Button>
                <Link href="https://www.instagram.com/computefutures/">
                  <span className='flex flex-row items-center gap-2'>Join Our Community <BotMessageSquare className='w-10 h-10'/></span>
                </Link>
              </Button>
              <Button variant='outline'>
                <Link href="/virtual-cohorts">
                  <span className='flex flex-row items-center gap-2'>Live Classes <BotMessageSquare className='w-10 h-10'/></span>
                </Link>
              </Button>
            </div>
          </div>
          <div className='relative w-full lg:w-1/2 rounded-lg flex flex-col bg-red-300'>
            <div className='z-30 w-full rounded-lg '>
              <img className='rounded-xl' src='/images/blair-helping.png'/>
            </div>
            <Bookmark icon={<BotMessageSquare className='text-blue-400'/>} className='w-full -top-4 xl:right-72 xl:-top-8'>
              <BookmarkTitle>Join Our Community</BookmarkTitle>
              <BookmarkDescription>
                Connect, learn, and grow with a passionate group of young innovators.
              </BookmarkDescription>
            </Bookmark>
            <Bookmark icon={<BotMessageSquare className='text-yellow-400'/>} className='w-full -bottom-20 lg:-bottom-24 xl:left-60 xl:-bottom-10'>
              <BookmarkTitle>Explore Our Programs</BookmarkTitle>
              <BookmarkDescription>
                Kids learn coding at their own pace with beginner-friendly resources.
              </BookmarkDescription>
            </Bookmark>
          </div>
        </section>
        <section className='flex flex-col md:flex-row justify-start gap-20'>
          {stats.map((item,index)=>(
            <div key={index} className='flex flex-col gap-1'>
              <Heading as='h6'>{item.category}</Heading>
              <span className='text-6xl font-spaceGrotesk font-bold text-[--clr-brown-base] tracking-tight'>{item.value}</span>
            </div>
          ))}
        </section>
      </header>

      <section className='relative flex flex-col gap-10'>
        <div className='flex flex-col gap-5 text-center'>
          <Heading as='h2'>
              Learn from a community <br className='hidden md:block'/> of students like you.
          </Heading>
          <p >
            Every day, Compute the Future connects students online to learn, collaborate, and grow in their coding journey. With a focus on accessibility and innovation, the organization ensures young learners are equipped to excel in the world of technology.
          </p>
        </div>
        <section className='relative flex flex-col gap-20 justify-between'>
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-5 items-center'>
              <div className='relative w-full lg:w-1/2 flex flex-col items-center'>
                <div className="rounded-lg w-fit lg:w-[440px] aspect-[18/18] overflow-hidden">
                  <img className="rounded-lg object-cover w-full h-full" src='/images/gabbi-teaching.png'/>
                </div>
                <Bookmark icon={<BotMessageSquare className='text-yellow-400'/>} className='w-fit -left-6 -bottom-4 lg:bottom-10 xl:-bottom-2'>
                  <BookmarkTitle>Inspiring Young Minds In Tech</BookmarkTitle>
                  <BookmarkDescription>
                    We inspire young minds in tech through our shared love of code.
                  </BookmarkDescription>
                </Bookmark>
              </div>
              <div className='w-full lg:w-1/2 h-full flex flex-col items-center justify-center gap-8'>
                <div className='flex flex-row gap-3'>
                  <Info className='w-20 h-20 font-bold text-red-400'/>
                  <div className='flex flex-col gap-1'>
                    <Heading as='h3'>Dive Into Code</Heading>
                    <p>
                    Students explore coding fundamentals through engaging lessons and hands-on projects, 
                    learning to turn ideas into functional creations while building essential technical skills.
                    </p>
                  </div>
                </div>
                <div className='flex flex-row gap-3'>
                  <Info className='w-20 h-20 font-bold text-orange-400'/>
                  <div className='flex flex-col gap-1'>
                    <Heading as='h3'>Build Together</Heading>
                    <p>
                    Collaborative projects empower students to work as a team, solve problems creatively, and learn from 
                    each other while developing a sense of community and shared purpose.
                    </p>
                  </div>
                </div>
                <div className='flex flex-row gap-3'>
                  <Info className='w-20 h-20 font-bold text-yellow-400'/>
                  <div className='flex flex-col gap-1'>
                    <Heading as='h3'>Pay It Forward</Heading>
                    <p>
                    Students share their coding journeys, inspire peers, and mentor others, 
                    creating a supportive network that fosters growth and encourages exploration in technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <Button><Link href='/philosophy'>Learn More</Link></Button>
            </div>
        </section>
      </section>

      <section className='flex flex-col gap-2'>
        <div>
          <Heading as='h6'>What we teach</Heading>
        </div>
        <div className='flex flex-col lg:grid grid-cols-[1fr_1fr_1fr] items-center gap-5 lg:gap-10'>
          <Card>
            <CardHeader>
              <Heading as='h3'>Web Development</Heading>
              <CardDescription>
                Students design and build their own websites, learning HTML, CSS, and JavaScript.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Heading as='h3'>Engineering Discoveries</Heading>
              <CardDescription>
                Students build and program robots, learning the fundamentals of engineering and automation.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Heading as='h3'>Game Makers</Heading>
              <CardDescription>
                Students design and develop interactive games, combining storytelling with coding skills to bring their ideas to life.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className='relative flex flex-col gap-20'>
        <div className='flex flex-col gap-5 text-center'>
          <Heading as="h2">We&apos;re computing a new <span className='text-blue-400'>future of code</span></Heading>
          <p>
            Compute the Future empowers students to explore technology through creativity and collaboration. <br className='hidden lg:block'/> By learning, building, and sharing, they become innovators shaping the digital world.
          </p>
        </div>
        <div className='relative flex flex-col'>
          <div className="rounded-xl w-full h-1/3 aspect-[18/7] overflow-hidden">
            <img className='rounded-xl  object-cover w-full h-full' src='/images/classwide.png'/>
          </div>
          <Bookmark icon={<BotMessageSquare className='text-blue-400'/>} className='-left-5 -top-16 lg:top-5 xl:top-0'>
            <BookmarkTitle>Web Development</BookmarkTitle>
            <BookmarkDescription>
              Students learn to create websites and apps while exploring their creativity and building practical coding skills.
            </BookmarkDescription>
          </Bookmark>
          <Bookmark icon={<BotMessageSquare className='text-green-400'/>} className='-right-5 -bottom-16 lg:bottom-10 xl:-bottom-5'>
            <BookmarkTitle>Engineering Discoveries</BookmarkTitle>
            <BookmarkDescription>
              Students dive into hands-on projects, uncovering engineering concepts and developing problem-solving abilities.
            </BookmarkDescription>
          </Bookmark>
        </div>
        <div className='flex flex-col items-center'>
          <Button><Link href='/code-gallery'>Learn More</Link></Button>
        </div>
      </section>

      <section className='flex flex-col gap-10'>
        <div className='flex flex-col gap-5 text-center'>
          <Heading as="h2">What our learners are saying</Heading>
            <p>
              See what our learners have to say about their experiences with us. <br className='hidden lg:block'/>
              Learn how our programs are making a difference.
            </p>
        </div>
        <div>
            <ReviewScroll reviewsList={reviewsData}/>
        </div>
      </section>

      <FAQ/>

    </section>
  );
}
