import Link from 'next/link'

export  function Logo() {
    return (
        <Link href='/' className='flex flex-row items-center gap-2'>
            <img className='w-8 h-8 origin-center' src='/logos/logo-round.png'/>
            <span className='font-semibold text-xl tracking-tight'>Compute the Future</span>
        </Link>
    )
}