import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './Components/MovieList';
import SearchBar from './Components/SearchBar';
import AddMovieForm from './Components/AddMovieForm';

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.myjson.online/v1/records/78a0a148-bbb0-4b2f-8038-e01c92b6a9d7');
        // Assuming the response data is an array of movie objects
        setMovies(response.data);
        setFilteredMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = searchTerm => {
    const filtered = movies.filter(movie =>
      movie.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const handleAddMovie = newMovie => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...filteredMovies, newMovie]);
  };

  return (
    <div>
      <h1>Movie Library</h1>
      <SearchBar onSearch={handleSearch} />
      <AddMovieForm onAddMovie={handleAddMovie} />
      {/* Ensure movies prop is initialized with an array */}
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
