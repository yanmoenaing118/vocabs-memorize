const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {[1, 2, 3,4,5,6].map((_) => (
        <div
          key={_}
          className="rounded p-4 mb-4 glass-container shadow-md animate-pulse"
        >
          <div className="h-4 bg-gray-100 opacity-25 rounded mb-2"></div>
          <div className="h-4 bg-gray-100 opacity-25 rounded mb-2"></div>
          <div className="h-4 bg-gray-100 opacity-25 rounded mb-2"></div>

          <div className="h-32 bg-gray-100 opacity-25 rounded mb-4"></div>

          <div className="h-8 bg-gray-100 opacity-25 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
