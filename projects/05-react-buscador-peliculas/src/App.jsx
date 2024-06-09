import { useEffect, useRef, useState, useCallback } from 'react';
import './App.css';

import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';
import debounce from 'just-debounce-it';

function useSearch() {
  const [search, updateSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);
  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === '';
      return;
    }
    if (search === '') {
      setError('Nose puede buscar una pelicula vacia');
      return;
    }

    if (search.length < 3) {
      setError('La busqueda al menos debe tener 3 caracteres');
      return;
    }
    setError(null);
  }, [search]);
  return { search, updateSearch, error };
}

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search, sort });

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      console.log('search', search);
      getMovies({ search });
    }, 300),
    [getMovies]
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    getMovies({ search });
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            name="query"
            placeholder="Avengers, Star wars, The matrix ...."
            type="text"
          />
          <input
            type="checkbox"
            onChange={handleSort}
            checked={sort}
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>{loading ? <p>Cargando.....</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
