import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

const phoneNumber = '+1 (844) 237-2290'
const phoneNumberUri = '+1-844-237-2290'
const email = 'contact@computefutures.com'

export function ContactBanner({ className = '' }) {
  return (
    <div 
      className={`
        flex items-center 
        bg-gray-100/75 
        text-gray-700 
        p-2 
        gap-1
        justify-center
        text-sm
        ${className}
      `}
    >
      <MessageCircle 
        className="text-inherit flex-shrink-0 -my-1 w-4 h-4" 
        aria-hidden 
      />
      <p className="text-wrap">
        Questions? Email{' '}
        <Link 
          href={`mailto:${email}`} 
          className="text-inherit mx-0.5 whitespace-nowrap  font-semibold"
        >
          {email}
        </Link>{' '}
      </p>
    </div>
  )
}