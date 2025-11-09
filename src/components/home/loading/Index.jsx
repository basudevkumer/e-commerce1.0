import React from "react";

const Loading = () => {
  return (
    <div className="border border-gray_100 relative p-4 rounded cursor-pointer w-full h-[320px] shadow-xl">
      {/* Skeleton Container */}
      <div className="animate-pulse flex flex-col h-full">
        {/* Tag Skeleton */}
        <div className="absolute left-3 top-3">
          <div className="bg-gray-300 rounded w-16 h-6"></div>
        </div>

        {/* Image Skeleton */}
        <div className="w-full h-[175px] bg-gray-300 rounded"></div>

        {/* Content Skeleton */}
        <div className="pt-6 space-y-3 flex-1">
          {/* Rating Skeleton */}
          <div className="flex items-center gap-x-1">
            <div className="flex gap-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-5 h-5 bg-gray-300 rounded-full"></div>
              ))}
            </div>
            <div className="w-12 h-4 bg-gray-300 rounded ml-2"></div>
          </div>

          {/* Title Skeleton */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-4/5"></div>
          </div>

          {/* Price Skeleton */}
          <div className="flex gap-x-2 items-center">
            <div className="h-5 bg-gray-300 rounded w-16"></div>
            <div className="h-6 bg-gray-300 rounded w-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
