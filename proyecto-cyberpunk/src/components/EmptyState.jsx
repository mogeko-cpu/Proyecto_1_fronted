const EmptyState = ({ message }) => {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="text-cyber-neon text-xl text-center">
        <p className="text-6xl mb-4">🔍</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default EmptyState;