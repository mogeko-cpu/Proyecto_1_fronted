import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-cyber-gray border-b border-cyber-neon p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* SVG inline logo */}
        <div className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#00ffcc" strokeWidth="2" fill="none"/>
            <path d="M2 17L12 22L22 17" stroke="#ff00cc" strokeWidth="2" fill="none"/>
            <path d="M2 12L12 17L22 12" stroke="#6600ff" strokeWidth="2" fill="none"/>
          </svg>
          <span className="text-cyber-neon font-bold text-xl">Cyberpunk App</span>
        </div>
        
        <div className="flex gap-4">
          <NavLink to="/" className={({ isActive }) => 
            isActive ? "text-cyber-pink" : "text-cyber-neon hover:text-cyber-pink"
          } aria-label="Inicio">
            Inicio
          </NavLink>
          <NavLink to="/explore" className={({ isActive }) => 
            isActive ? "text-cyber-pink" : "text-cyber-neon hover:text-cyber-pink"
          } aria-label="Explorar">
            Explorar
          </NavLink>
          <NavLink to="/favorites" className={({ isActive }) => 
            isActive ? "text-cyber-pink" : "text-cyber-neon hover:text-cyber-pink"
          } aria-label="Favoritos">
            Favoritos
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => 
            isActive ? "text-cyber-pink" : "text-cyber-neon hover:text-cyber-pink"
          } aria-label="Contacto">
            Contacto
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;