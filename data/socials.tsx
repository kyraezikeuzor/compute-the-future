import { 
    Mail,
    Instagram,
    Github,
    Youtube,
    Linkedin,
    Twitter,
    MessageSquare, // for Slack
  } from 'lucide-react';
  
  export const socials = [
    {
      name: "Mail",
      link: "mailto:contact@computefutures.org",
      icon: <Mail className="w-6 h-6 hover:text-blue-500 transition-colors duration-200" strokeWidth={2} />
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/computefutures/",
      icon: <Instagram className="w-6 h-6 hover:text-pink-500 transition-colors duration-200" strokeWidth={2} />
    },
    {
      name: "Slack",
      link: "",
      icon: <MessageSquare className="w-6 h-6 over:text-purple-500 transition-colors duration-200" strokeWidth={2} />
    },
    {
      name: "Twitter",
      link: "",
      icon: <Twitter className="w-6 h-6 hover:text-sky-500 transition-colors duration-200" strokeWidth={2} />
    },
    {
      name: "LinkedIn",
      link: "",
      icon: <Linkedin className="w-6 h-6 hover:text-blue-700 transition-colors duration-200" strokeWidth={2} />
    },
    {
      name: "Github",
      link: "",
      icon: <Github className="w-6 h-6 hover:text-gray-800 transition-colors duration-200" strokeWidth={2} />
    },
    {
      name: "YouTube",
      link: "https://www.instagram.com/omeloraorg/",
      icon: <Youtube className="w-6 h-6 hover:text-red-500 transition-colors duration-200" strokeWidth={2} />
    }
  ];