export interface Feedback {
    id: string;
    rating: number;
    comment: string;
    userId: string;
    createdAt: string;
    userName: string;  
  userRole: string;
  }
  
  export interface FeedbackError {
    rating?: string;
    comment?: string;
    _form?: string;
  }
  
  export interface PaginationData {
    total: number;
    pages: number;
    current: number;
  }