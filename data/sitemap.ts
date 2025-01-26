// Navbar items for the top navigation of the website
export const navbar = [
  {
    name: 'Learn',
    children: [
      {
        name: 'Live Classes',
        path: 'https://forms.fillout.com/t/eeMcgNH5Fkus',
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
        path: 'https://lu.ma/user/usr-m24zm9GWr3RfctQ',
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
        name: 'Founding',
        path: '/founding',
        description: 'Learn about how we started',
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
        { name: 'Donate', path: 'https://www.paypal.com/donate/?hosted_button_id=UP3ZGFTQ7YZ96' },
      ]
    },
    {
      name: 'Resources',
      pages: [
        { name: 'Events', path: 'https://lu.ma/user/usr-m24zm9GWr3RfctQ' },
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Code of Conduct', path: '/code-of-conduct' },
        { name: 'Contact Us', path: '/contact' }
      ]
    }
  ];
  