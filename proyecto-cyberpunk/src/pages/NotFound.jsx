import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-cyber-pink mb-4">404</h1>
      <p className="text-xl text-cyber-neon mb-8">Página no encontrada</p>
      <Link to="/" className="text-cyber-purple underline">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;