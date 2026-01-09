import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
          <div className="skeleton h-64 w-full"></div>
          <div className="p-6 space-y-4">
            <div className="skeleton h-6 w-3/4 rounded"></div>
            <div className="skeleton h-4 w-full rounded"></div>
            <div className="skeleton h-4 w-5/6 rounded"></div>
            <div className="flex justify-between items-center">
              <div className="skeleton h-8 w-20 rounded"></div>
              <div className="skeleton h-6 w-16 rounded"></div>
            </div>
            <div className="skeleton h-12 w-full rounded-lg"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;