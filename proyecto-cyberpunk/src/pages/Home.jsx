import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-cyber-neon mb-4">
        🚀 Cyberpunk Explorer
      </h1>
      <p className="text-xl text-cyber-pink mb-8">
        Explora personajes, descubre mundos y guarda tus favoritos
      </p>
      <Link 
        to="/explore" 
        className="bg-cyber-neon text-black px-6 py-3 rounded-lg font-bold hover:bg-cyber-pink transition"
        aria-label="Comenzar a explorar"
      >
        Comenzar →
      </Link>
    </div>
  );
};

export default Home;