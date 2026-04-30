import { Link } from "react-router-dom";
import BackgroundCarousel from "../components/BackgroundCarousel";


const backgroundGifs = [
  {
    src: "/gifs/g1.gif",   // ← Primer GIF
    alt: "Cyberpunk ciudad"
  },
  {
    src: "/gifs/g2.gif",   // ← Segundo GIF
    alt: "Neon lights"
  }
];

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Carrusel de fondo */}
      <BackgroundCarousel items={backgroundGifs} interval={6000} />

      {/* Contenido principal */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
        {/* Logo */}
        <div className="mb-8 animate-bounce">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#00ffcc" strokeWidth="2" fill="none"/>
            <path d="M2 17L12 22L22 17" stroke="#ff00cc" strokeWidth="2" fill="none"/>
            <path d="M2 12L12 17L22 12" stroke="#6600ff" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-cyber-neon mb-4 animate-pulse">
          Rick And Morty Multiverse
        </h1>
        
        <p className="text-xl md:text-2xl text-cyber-pink mb-8 max-w-2xl">
          Explora personajes del multiverso de Rick y Morty.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Link 
            to="/explore" 
            className="bg-cyber-neon text-black px-8 py-3 rounded-lg font-bold hover:bg-cyber-pink transition transform hover:scale-105 inline-block shadow-lg shadow-cyber-neon/50"
          >
            Comenzar exploración
          </Link>
          
          <Link 
            to="/contact" 
            className="border-2 border-cyber-neon text-cyber-neon px-8 py-3 rounded-lg font-bold hover:bg-cyber-neon hover:text-black transition transform hover:scale-105 inline-block"
          >
            📡 Contactar soporte
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-cyber-gray/80 backdrop-blur-sm border border-cyber-neon rounded-lg p-4">
            <p className="text-3xl font-bold text-cyber-pink">50+</p>
            <p className="text-cyber-neon text-sm">Personajes</p>
          </div>
          <div className="bg-cyber-gray/80 backdrop-blur-sm border border-cyber-neon rounded-lg p-4">
            <p className="text-3xl font-bold text-cyber-pink">∞</p>
            <p className="text-cyber-neon text-sm">Universos</p>
          </div>
          <div className="bg-cyber-gray/80 backdrop-blur-sm border border-cyber-neon rounded-lg p-4">
            <p className="text-3xl font-bold text-cyber-pink">🌐</p>
            <p className="text-cyber-neon text-sm">Todas las dimensiones</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;