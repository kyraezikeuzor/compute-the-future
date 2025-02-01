'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Logo } from './logo'
import { Button } from './button'
import { navbar } from '@/data/sitemap'
import { Menu, X, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'

interface BaseNavigationItem {
    name: string;
    path?: string;
    description?: string;
    icon?: string;
    external?: boolean;
}
  
interface NavigationChild extends BaseNavigationItem {
    path: string;
}

export interface NavigationItem extends BaseNavigationItem {
    path?: string;
    children?: NavigationChild[];
}

export type NavigationItems = NavigationItem[];

interface NavChild {
  name: string;
  path: string;
  icon?: React.ReactNode;
}

interface NavItem {
  name: string;
  children?: NavChild[];
}


export function hasChildren(item: NavigationItem): item is NavigationItem & { children: NavigationChild[] } {
    return Array.isArray(item.children) && item.children.length > 0;
}

const hoverBorder = <span className="absolute -bottom-[1.5px] left-0 w-full h-[5px] rounded-full bg-[var(--clr-blue-base)] opacity-0 group-hover:opacity-100"></span>

  
const NavItem = ({ item }:{item:NavigationItem}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!hasChildren(item)) {
    return (
      <li className="relative group">
        <Link 
          href={item.path || '#'} 
          className="px-3 py-4 hover:text-[var(--clr-blue-base)] inline-block"
          {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {item.name}
          {item.external && <ExternalLink className="inline-block ml-1 w-4 h-4" />}
          {hoverBorder}
        </Link>
      </li>
    );
  }

  return (
    <li
      className="relative flex flex-col group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className="flex items-center gap-1 px-3 py-4 hover:text-[var(--clr-blue-base)] relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.name}
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
        {hoverBorder}
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 w-96 mt-2 bg-white rounded-lg shadow-md border-2 border-gray-200 py-2 z-50">
          {item.children?.map((child, index) => (
            <Link
              key={index}
              href={child.path}
              className="flex items-center gap-4 px-4 py-2 hover:bg-gray-50"
            >
              {child.icon && (
                <div className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100">
                  {child.icon}
                </div>
              )}
              <div>
                <div className="font-medium">{child.name}</div>
                {child.description && (
                  <div className="font-normal text-sm text-gray-500">{child.description}</div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({});

  const toggleSection = (index: number): void => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };


  return (
    <nav className='relative w-full flex flex-col items-center sticky top-0 z-50 bg-[--clr-base] border-b-2 border-gray-200 '>
      <div className='w-full bg-[--clr-blue-base] text-white py-1'>
        <div className='flex flex-row gap-1 items-center justify-center text-[11px] lg:text-[15px]'>
          <p className='text-center font-normal'>Virtual Computer Science Camps Are in Session</p> <Link href='https://forms.fillout.com/t/eeMcgNH5Fkus' className='ml-1 flex flex-row gap-1 items-center text-yellow-200'>Explore Now <ExternalLink className='w-4 h-4'/></Link>
        </div>
      </div>
      <div className='hidden md:flex flex-row md:px-[4vw] py-[vh] w-full items-center justify-between 2xl:max-w-[1400px]'>
        <div className='flex flex-row gap-5 justify-start items-center font-medium'>
            <div className="relative group">
              <div className="px-3 py-3">
                <Logo/>
                {hoverBorder}
              </div>
            </div>
            <ul className='hidden md:flex flex-row items-center gap-1 justify-center'>
                {navbar.map((item, index) => (
                    <NavItem key={index} item={item} />
                ))}
            </ul>
        </div>
        <div className='flex flex-row gap-1'>
            <Button variant='ghost'><Link href='https://forms.fillout.com/t/eeMcgNH5Fkus'>Join Us</Link></Button>
            <Button><Link href='https://www.paypal.com/donate/?hosted_button_id=UP3ZGFTQ7YZ96'>Donate</Link></Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className='w-full flex flex-row md:hidden px-5 py-[1vh] justify-between items-center'>
        <Logo/>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-24 left-0 right-0 w-full bg-white border-b-2 border-r-2 border-l-2 border-gray-200 shadow-lg">
          <div className="px-5 py-4 space-y-2">
            {navbar.map((item, index) => (
            <div key={index} className="border-b border-gray-100 last:border-0">
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full py-3 flex items-center justify-between font-medium"
                  >
                    {item.name}
                    {openSections[index] ? 
                      <ChevronUp className="h-5 w-5" /> : 
                      <ChevronDown className="h-5 w-5" />
                    }
                  </button>
                  <div className={`pl-4 space-y-1 overflow-hidden transition-all duration-200 ${
                    openSections[index] ? 'max-h-96 pb-3' : 'max-h-0'
                  }`}>
                    {item.children.map((child, childIndex) => (
                      <Link
                        key={childIndex}
                        href={child.path}
                        className="block py-2 text-gray-600 hover:text-gray-900"
                      >
                        <div className="flex items-center gap-3">
                          {child.icon && <span className="text-xl">{child.icon}</span>}
                          {child.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={`/${item.name}`}
                  className="block py-3 hover:text-[var(--clr-blue-base)]"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          </div>
        </div>
      )}
    </nav>
  );
}