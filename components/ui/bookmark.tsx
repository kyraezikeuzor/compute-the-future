import { ReactNode } from 'react';

interface BookmarkProps {
  icon: React.ReactNode;
  children: ReactNode;
  className?: string;  // Optional prop
}

const Bookmark: React.FC<BookmarkProps> = ({ icon, children, className }) => {
  return (
    <div className={`z-40 -mt-2 absolute ${className} w-fit lg:w-fit flex flex-row items-center gap-3 px-6 py-4 rounded-xl bg-white/95 backdrop-blur border-2 border-gray-100 shadow-sm`}>
      <div className='flex flex-col items-center justify-center w-6 h-6 lg:w-8 lg:h-8'>
        {icon}
      </div>
      <div className='flex flex-col w-80'>
        {children}
      </div>
    </div>
  );
};

interface BookmarkTitleProps {
  children: ReactNode;
}

const BookmarkTitle: React.FC<BookmarkTitleProps> = ({ children }) => {
  return (
    <h3 className="font-bold text-sm md:text-lg">
      {children}
    </h3>
  );
};

interface BookmarkDescriptionProps {
  children: ReactNode;
}

const BookmarkDescription: React.FC<BookmarkDescriptionProps> = ({ children }) => {
  return (
    <div className="flex-col gap-1 items-center text-[--clr-base-text]">
      <p className="text-xs md:text-base">
        {children}
      </p>
    </div>
  );
};

export { Bookmark, BookmarkTitle, BookmarkDescription };
