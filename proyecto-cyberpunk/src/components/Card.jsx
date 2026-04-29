import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { showToast } from "../utils/toast";
import { useRef } from "react";

const Card = ({ item, type = "character" }) => {
  const { addFavorite, removeFavorite, favorites } = useFavorites();
  const isFav = favorites.some((fav) => fav.id === item.id);
  const modalRef = useRef(null);

  const handleFavoriteClick = () => {
    if (isFav) {
      modalRef.current?.showModal();
    } else {
      addFavorite(item);
      showToast(`${item.name} agregado a favoritos`, "success");
    }
  };

  const confirmRemove = () => {
    removeFavorite(item.id);
    modalRef.current?.close();
    showToast(`${item.name} eliminado de favoritos`, "info");
  };

  return (
    <>
      <div className="bg-cyber-gray border border-cyber-neon rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyber-neon/50 transition">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-cyber-pink mb-2">{item.name}</h2>
          <p className="text-cyber-neon text-sm">Especie: {item.species}</p>
          <p className="text-cyber-purple text-sm">Estado: {item.status}</p>
          
          <div className="flex justify-between items-center mt-4">
            <Link 
              to={`/detail/${item.id}`} 
              className="text-cyber-neon hover:text-cyber-pink underline text-sm"
              aria-label={`Ver detalles de ${item.name}`}
            >
              Ver detalles →
            </Link>
            <button
              onClick={handleFavoriteClick}
              className="text-2xl hover:scale-110 transition"
              aria-label={isFav ? `Quitar ${item.name} de favoritos` : `Agregar ${item.name} a favoritos`}
            >
              {isFav ? "❤️" : "🤍"}
            </button>
          </div>
        </div>
      </div>

      {/* Modal de confirmación */}
      <dialog 
        ref={modalRef} 
        className="bg-cyber-gray border-2 border-cyber-pink rounded-lg p-6 backdrop:bg-black/50"
      >
        <p className="text-cyber-neon mb-4">
          ¿Eliminar <span className="text-cyber-pink font-bold">{item.name}</span> de favoritos?
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={() => modalRef.current?.close()}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Cancelar
          </button>
          <button
            onClick={confirmRemove}
            className="px-4 py-2 bg-cyber-pink text-black rounded hover:bg-cyber-neon transition"
          >
            Confirmar
          </button>
        </div>
      </dialog>
    </>
  );
};

export default Card;