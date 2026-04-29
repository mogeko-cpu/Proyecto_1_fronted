const ErrorMessage = ({ message }) => {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="bg-red-500/20 border-2 border-red-500 text-red-500 p-6 rounded-lg text-center">
        <p className="text-4xl mb-2">⚠️</p>
        <p className="font-bold">Error: {message}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;