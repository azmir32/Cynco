export interface Feedback {
    id: string;
    rating: number;
    comment: string;
    userId: string;
    createdAt: string;
    userName: string;
    userRole: string;
  }
  
  // Mock feedback data
  const mockFeedback: Feedback[] = [
    {
      id: '1',
      rating: 5,
      comment: "Incredible service! The team went above and beyond to help us implement the solution.",
      userId: 'user1',
      createdAt: '2024-03-15T10:00:00Z',
      userName: 'John Smith',
      userRole: 'Project Manager'
    },
    {
      id: '2',
      rating: 4,
      comment: "Very professional team and excellent support. Would definitely recommend.",
      userId: 'user2',
      createdAt: '2024-03-14T15:30:00Z',
      userName: 'Sarah Johnson',
      userRole: 'Tech Lead'
    },
    {
      id: '3',
      rating: 5,
      comment: "The platform has transformed how we handle our operations. Exceptional quality!",
      userId: 'user3',
      createdAt: '2024-03-13T09:45:00Z',
      userName: 'Michael Brown',
      userRole: 'Operations Director'
    },
    {
      id: '4',
      rating: 5,
      comment: "Outstanding performance and reliability. Exactly what we were looking for.",
      userId: 'user4',
      createdAt: '2024-03-12T14:20:00Z',
      userName: 'Emily Davis',
      userRole: 'CTO'
    },
    {
      id: '5',
      rating: 4,
      comment: "Great features and intuitive interface. Made our work much more efficient.",
      userId: 'user5',
      createdAt: '2024-03-11T11:15:00Z',
      userName: 'David Wilson',
      userRole: 'Senior Developer'
    },
    {
      id: '6',
      rating: 5,
      comment: "Exceptional customer service and product quality. Highly recommended!",
      userId: 'user6',
      createdAt: '2024-03-10T16:40:00Z',
      userName: 'Lisa Anderson',
      userRole: 'Product Manager'
    }
  ];
  
  // Mock database client
  export const db = {
    feedback: {
      findMany: async ({ take = 10, skip = 0, orderBy = { createdAt: 'desc' } } = {}) => {
        // Simulate database query with pagination
        const sortedFeedback = [...mockFeedback].sort((a, b) => {
          if (orderBy.createdAt === 'desc') {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          }
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        });
  
        return sortedFeedback.slice(skip, skip + take);
      },
  
      create: async ({ data }: { data: Omit<Feedback, 'id' | 'createdAt'> }) => {
        // Simulate creating new feedback
        const newFeedback: Feedback = {
          ...data,
          id: (mockFeedback.length + 1).toString(),
          createdAt: new Date().toISOString(),
        };
        mockFeedback.push(newFeedback);
        return newFeedback;
      },
  
      count: async () => {
        return mockFeedback.length;
      },
  
      findFirst: async ({ where }: { where: Partial<Feedback> }) => {
        return mockFeedback.find(feedback => 
          Object.entries(where).every(([key, value]) => 
            feedback[key as keyof Feedback] === value
          )
        );
      }
    }
  };
  
  // Helper function to format dates (optional)
  export const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };