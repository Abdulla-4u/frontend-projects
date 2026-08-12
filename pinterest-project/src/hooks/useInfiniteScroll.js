import { useEffect, useRef } from "react";

const useInfiniteScroll = ({ onLoadMore, hasMore, isLoading }) => {
  const observerRef = useRef(null);

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore && !isLoading) {
          onLoadMore();
        }
      },
      {
        rootMargin: "300px", // prefetch before bottom
      }
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [onLoadMore, hasMore, isLoading]);

  return observerRef;
};

export default useInfiniteScroll;
