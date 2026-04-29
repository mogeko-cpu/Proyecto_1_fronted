const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-cyber-neon"></div>
        <div className="animate-spin rounded-full h-16 w-16 border-l-4 border-r-4 border-cyber-pink absolute top-0 left-0" style={{ animationDirection: 'reverse' }}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;