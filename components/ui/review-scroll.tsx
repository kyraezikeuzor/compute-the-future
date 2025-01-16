'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Review } from './review';

// Types for our reviews data and props
interface ReviewData {
  id: string;
  reviewer: string;
  occupation: string;
  review: string;
  date: string;
  location?: string;
}

interface InfiniteReviewsProps {
  reviewsList: ReviewData[];
  itemsPerPage?: number;
}

export const ReviewScroll: React.FC<InfiniteReviewsProps> = ({ 
  reviewsList,
  itemsPerPage = 6
}) => {
  const [reviews, setReviews] = useState<ReviewData[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial load
    loadMoreReviews();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !loading) {
          loadMoreReviews();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [hasMore, loading]);

  const loadMoreReviews = async () => {
    try {
      setLoading(true);
      const newReviews = reviewsList;
      
      if (newReviews.length < itemsPerPage) {
        setHasMore(false);
      }

      setReviews(prev => [...prev, ...newReviews]);
      setPage(prev => prev + 1);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-sm">
            <Review {...review} />
          </div>
        ))}
      </div>
      
      {/* Loading indicator */}
      <div ref={loaderRef} className="w-full py-8 flex justify-center">
        {loading && (
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" />
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
        )}
        {!hasMore && !loading && reviews.length > 0 && (
          <p className="text-gray-500">No more reviews to load</p>
        )}
      </div>
    </div>
  );
};

// Example usage with mock data generator
const generateMockReviews = (page: number, itemsPerPage: number): ReviewData[] => {
  return Array.from({ length: itemsPerPage }, (_, i) => ({
    id: `${page}-${i}`,
    reviewer: `User ${page * itemsPerPage + i}`,
    occupation: ['Student', 'Developer', 'Designer', 'Manager'][Math.floor(Math.random() * 4)],
    review: `This is a sample review ${page * itemsPerPage + i}. It demonstrates how the review would look in the grid layout with infinite scrolling.`,
    date: `${Math.floor(Math.random() * 30) + 1} days ago`,
    location: ['New York', 'San Francisco', 'London', 'Tokyo'][Math.floor(Math.random() * 4)]
  }));
};

