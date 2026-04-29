import { useFavorites } from "../context/FavoritesContext";
import Card from "../components/Card";
import EmptyState from "../components/EmptyState";

const Favorites = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <EmptyState message="No tienes personajes favoritos aún. ¡Explora y agrega algunos!" />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-cyber-neon mb-6">❤️ Mis Favoritos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((character) => (
          <Card key={character.id} item={character} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;