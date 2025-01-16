// Navbar items for the top navigation of the website
export const navbar = [
  {
    name: 'Learn',
    children: [
      {
        name: 'Live Classes',
        path: '/classes',
        description: 'Learn with a group of peers',
        icon: '👥'
      },
    ]
  },
  {
    name: 'Community',
    children: [
      {
        name: 'Events',
        path: '/events',
        description: 'Join our upcoming events',
        icon: '📅'
      },
      {
        name: 'Code Gallery',
        path: '/code-gallery',
        description: 'Explore student projects',
        icon: '🎨'
      }
    ]
  },
  {
    name: 'About',
    children: [
      {
        name: 'Team',
        path: '/team',
        description: 'Meet the people behind the platform',
        icon: '🌟'
      },
      {
        name: 'Sponsorship',
        path: '/sponsorship',
        description: 'Partner with us',
        icon: '🤝'
      }
    ]
  }
];
  
  // Footer items categorized by sections
  export const footer = [
    {
      name: 'Community',
      pages: [
        { name: 'Team', path: '/team' },
        { name: 'Philosophy', path: '/philosophy' },
        { name: 'Founding', path: '/founding' },
        { name: 'Donate', path: '/donate' },
      ]
    },
    {
      name: 'Resources',
      pages: [
        { name: 'Events', path: '/events' },
        { name: 'Press Inquiries', path: '/press-inquiries' },
        { name: 'Privacy Policy', path: '/press-inquiries' },
        { name: 'Code of Conduct', path: '/code-of-conduct' },
        { name: 'Contact Us', path: '/code-of-conduct' }
      ]
    }
  ];
  