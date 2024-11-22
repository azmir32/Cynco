export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface Comment {
  id: string;
  postId: string;
  author: string;
  content: string;
  createdAt: string;
  avatar?: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: Author;
  tags: string[];
  readingTime: number;
  comments: Comment[];
  likes: number;
}



export async function getPosts(): Promise<Post[]> {
  return [
    {
      id: '1',
      title: 'Introduction to Cynco.io',
      excerpt: 'Learn about the powerful features of LedgerUp and how it can transform your financial management.',
      content: 'Full article content here...',
      coverImage: '/images/blog-images/introduction-to-Cynco.svg',
      date: '2024-03-15T10:00:00Z',
      author: {
        id: 'auth1',
        name: 'Sarah Johnson',
        avatar: 'images/author/sarah.svg',
        bio: 'Financial Technology Expert | Lead Developer at Cynco'
      },
      tags: ['fintech', 'tutorial', 'getting-started'],
      readingTime: 5,
      comments: [
        {
          id: 'c1',
          postId: '1',
          author: 'Mike Chen',
          content: 'Great introduction! Looking forward to trying these features.',
          createdAt: '2024-03-15T14:30:00Z',
          avatar: '/images/avatars/mike.jpg'
        }
      ],
      likes: 42
    },
    {
      id: '2',
      title: 'Automating Your Financial Workflows',
      excerpt: 'Discover how to set up automated processes for your daily financial tasks using Cynco advanced automation features.',
      content: 'Detailed guide about automation...',
      coverImage: '/images/blog-images/blog-workflow.svg',
      date: '2024-03-12T08:30:00Z',
      author: {
        id: 'auth2',
        name: 'David Kim',
        avatar: 'images/author/david.svg',
        bio: 'Automation Specialist | Senior Developer'
      },
      tags: ['automation', 'productivity', 'tutorials'],
      readingTime: 8,
      comments: [
        {
          id: 'c2',
          postId: '2',
          author: 'Lisa Wong',
          content: 'This saved me hours of work! Thank you!',
          createdAt: '2024-03-13T09:15:00Z',
          avatar: '/images/avatars/lisa.jpg'
        }
      ],
      likes: 67
    },
    {
      id: '3',
      title: 'Security Best Practices for Financial Data',
      excerpt: 'Learn how to protect your sensitive financial information with our comprehensive security guide.',
      content: 'Security guidelines and best practices...',
      coverImage: '/images/blog-images/blog-security-data.svg',
      date: '2024-03-10T14:15:00Z',
      author: {
        id: 'auth3',
        name: 'Alexandra Peters',
        avatar: 'images/author/alex.svg',
        bio: 'Security Expert | CTO'
      },
      tags: ['security', 'best-practices', 'data-protection'],
      readingTime: 10,
      comments: [],
      likes: 89
    },
    {
      id: '4',
      title: 'Maximizing ROI with Cynco Analytics',
      excerpt: 'Deep dive into Cyncolytics tools and how they can help improve your financial decision-making.',
      content: 'Analytics deep dive content...',
      coverImage: '/images/blog-images/blog-analytics.svg',
      date: '2024-03-08T11:20:00Z',
      author: {
        id: 'auth4',
        name: 'Marcus Johnson',
        avatar: 'images/author/marcus.svg',
        bio: 'Data Analytics Lead | Financial Advisor'
      },
      tags: ['analytics', 'roi', 'data-analysis'],
      readingTime: 7,
      comments: [],
      likes: 73
    },
    {
      id: '5',
      title: 'Integration Guide: Cynco + Popular Tools',
      excerpt: 'Step-by-step guide to integrating Cynco with your existing software ecosystem.',
      content: 'Integration instructions...',
      coverImage: '/images/blog-images/blog-intergration.svg',
      date: '2024-03-05T09:45:00Z',
      author: {
        id: 'auth5',
        name: 'Rachel Torres',
        avatar: 'images/author/rachel.svg',
        bio: 'Integration Specialist | Developer Relations'
      },
      tags: ['integration', 'tutorial', 'tools'],
      readingTime: 12,
      comments: [],
      likes: 45
    },
    {
      id: '6',
      title: 'Q1 2024 Financial Technology Trends',
      excerpt: 'Explore the latest trends in financial technology and how theyre shaping the future of finance.',
      content: 'Trends analysis...',
      coverImage: '/images/blog-images/blog-technology-trends.svg',
      date: '2024-03-03T13:00:00Z',
      author: {
        id: 'auth1',
        name: 'Sarah Johnson',
        avatar: 'images/author/sarah.svg',
        bio: 'Financial Technology Expert | Lead Developer at LedgerUp'
      },
      tags: ['trends', 'fintech', 'analysis'],
      readingTime: 6,
      comments: [],
      likes: 91
    },
    {
      id: '7',
      title: 'Mobile Financial Management with Cynco',
      excerpt: 'Tips and tricks for managing your finances on-the-go using our mobile application.',
      content: 'Mobile management strategies...',
      coverImage: '/images/blog-images/blog-mobile-management.svg',
      date: '2024-02-28T15:30:00Z',
      author: {
        id: 'auth6',
        name: 'James Wilson',
        avatar: 'images/author/james.svg',
        bio: 'Mobile Development Lead | UX Specialist'
      },
      tags: ['mobile', 'tips', 'productivity'],
      readingTime: 5,
      comments: [],
      likes: 58
    },
    {
      id: '8',
      title: 'Understanding Financial Reporting with Cynco',
      excerpt: 'Master the art of financial reporting using our comprehensive reporting tools.',
      content: 'Reporting guide...',
      coverImage: '/images/blog-images/blog-financial-report.svg',
      date: '2024-02-25T10:20:00Z',
      author: {
        id: 'auth7',
        name: 'Emily Chen',
        avatar: 'images/author/emily.svg',
        bio: 'Financial Analyst | Product Manager'
      },
      tags: ['reporting', 'finance', 'tutorial'],
      readingTime: 9,
      comments: [],
      likes: 62
    },
    {
      id: '9',
      title: 'AI in Financial Management: Cynco Smart Features',
      excerpt: 'Discover how AI-powered features in Cynco can revolutionize your financial management.',
      content: 'AI features overview...',
      coverImage: '/images/blog-images/blog-ai.svg',
      date: '2024-02-22T14:45:00Z',
      author: {
        id: 'auth8',
        name: 'Dr. Michael Zhang',
        avatar: 'images/author/dr.svg',
        bio: 'AI Research Lead | Senior Architect'
      },
      tags: ['ai', 'innovation', 'technology'],
      readingTime: 8,
      comments: [],
      likes: 85
    },
    {
      id: '10',
      title: 'Customizing Your Cynco Dashboard',
      excerpt: 'Learn how to personalize your dashboard for maximum efficiency and productivity.',
      content: 'Dashboard customization guide...',
      coverImage: '/images/blog-images/blog-dashboard.svg',
      date: '2024-02-20T11:00:00Z',
      author: {
        id: 'auth9',
        name: 'Sophie Anderson',
        avatar: 'images/author/sophie.svg',
        bio: 'UX Designer | Product Specialist'
      },
      tags: ['customization', 'productivity', 'tutorial'],
      readingTime: 6,
      comments: [],
      likes: 71
    }
  ];
}