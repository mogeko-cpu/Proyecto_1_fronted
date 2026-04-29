import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import { useFavorites } from "../context/FavoritesContext";
import { showToast } from "../utils/toast";
import { useRef } from "react";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addFavorite, removeFavorite, favorites } = useFavorites();
  const modalRef = useRef(null);
  
  const isFav = favorites.some((fav) => fav.id === parseInt(id));

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Personaje no encontrado");
        return res.json();
      })
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleFavoriteClick = () => {
    if (isFav) {
      modalRef.current?.showModal();
    } else {
      addFavorite(character);
      showToast(`${character.name} agregado a favoritos`, "success");
    }
  };

  const confirmRemove = () => {
    removeFavorite(character.id);
    modalRef.current?.close();
    showToast(`${character.name} eliminado de favoritos`, "info");
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!character) return <EmptyState message="Personaje no encontrado" />;

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/explore" className="text-cyber-neon hover:text-cyber-pink mb-4 inline-block">
        ← Volver a explorar
      </Link>
      
      <div className="bg-cyber-gray border border-cyber-neon rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img 
              src={character.image} 
              alt={character.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:w-1/2">
            <h1 className="text-3xl font-bold text-cyber-pink mb-4">{character.name}</h1>
            <div className="space-y-2">
              <p><span className="text-cyber-neon font-bold">Estado:</span> {character.status}</p>
              <p><span className="text-cyber-neon font-bold">Especie:</span> {character.species}</p>
              <p><span className="text-cyber-neon font-bold">Género:</span> {character.gender}</p>
              <p><span className="text-cyber-neon font-bold">Origen:</span> {character.origin?.name}</p>
              <p><span className="text-cyber-neon font-bold">Ubicación:</span> {character.location?.name}</p>
            </div>
            
            <button
              onClick={handleFavoriteClick}
              className={`mt-6 px-6 py-2 rounded-lg font-bold transition ${
                isFav 
                  ? "bg-cyber-pink text-black hover:bg-cyber-neon" 
                  : "bg-cyber-neon text-black hover:bg-cyber-pink"
              }`}
            >
              {isFav ? "❤️ Quitar de favoritos" : "🤍 Agregar a favoritos"}
            </button>
          </div>
        </div>
      </div>

      <dialog 
        ref={modalRef} 
        className="bg-cyber-gray border-2 border-cyber-pink rounded-lg p-6 backdrop:bg-black/50"
      >
        <p className="text-cyber-neon mb-4">
          ¿Eliminar <span className="text-cyber-pink font-bold">{character?.name}</span> de favoritos?
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
    </div>
  );
};

export default Detail;