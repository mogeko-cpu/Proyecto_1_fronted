import { useState, useEffect } from "react";
import Card from "../components/Card";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import EmptyState from "../components/EmptyState";

const Explore = () => {
  const [characters, setCharacters] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar personajes");
        return res.json();
      })
      .then((data) => {
        setCharacters(data.results);
        setFiltered(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const results = characters.filter((character) =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(results);
  }, [search, characters]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (filtered.length === 0) return <EmptyState message="No se encontraron personajes" />;

  return (
    <div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="🔍 Buscar personaje..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 bg-cyber-gray text-cyber-neon border border-cyber-neon rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-pink"
          aria-label="Buscar personajes"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((character) => (
          <Card key={character.id} item={character} />
        ))}
      </div>
    </div>
  );
};

export default Explore;