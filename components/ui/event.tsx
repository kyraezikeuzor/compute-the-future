import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface EventProps {
  slug: string;
  id: string;
  title: string;
  desc?: string;
  leader: string;
  avatar: string;
  start: string | Date;
  end: string | Date;
  cal?: string;
}

const formatDate = (date: Date | string): string => {
  const dateObj = new Date(date);
  const options: Intl.DateTimeFormatOptions = { 
    month: 'short', 
    day: 'numeric' 
  };
  return dateObj.toLocaleDateString('en-US', options);
};

const formatTime = (date: Date | string): string => {
  const dateObj = new Date(date);
  return dateObj.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};

const isPast = (dt: Date | string): boolean => 
  new Date(dt) < new Date();

const isNow = (start: Date | string, end: Date | string): boolean => {
  const currentTime = new Date();
  return currentTime > new Date(start) && currentTime < new Date(end);
};

const Event: FC<EventProps> = ({ 
  slug,
  title,
  desc,
  leader,
  avatar,
  start,
  end,
  cal 
}) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const isCurrentlyHappening = isNow(start, end);

  return (
    <Link 
      href={`/${slug}`} 
      className="block p-4 hover:bg-gray-50 transition-colors"
    >
      <div className="space-y-2">
        <p className="text-gray-600">
          <strong>{formatDate(startDate)}</strong>{' '}
          {formatTime(startDate)}–{formatTime(endDate)}
        </p>
        
        <h2 className="text-xl font-semibold">
          {title}
        </h2>
        
        <div className="flex items-center gap-2">
          {!avatar?.includes('emoji') && (
            <div className="relative w-6 h-6">
              <Image
                src={avatar}
                alt={`${leader} profile picture`}
                fill
                className="rounded-full object-cover"
                sizes="24px"
              />
            </div>
          )}
          <span className="text-gray-700">{leader}</span>
        </div>

        {desc && <p className="text-gray-600">{desc}</p>}

        {isCurrentlyHappening && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Live now
          </span>
        )}
      </div>
    </Link>
  );
};

export default Event;