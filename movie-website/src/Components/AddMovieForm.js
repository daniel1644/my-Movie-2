import React, { useState } from 'react';

const AddMovieForm = ({ onAddMovie }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const newMovie = {
      id: Math.random(),
      name,
      image,
      description,
      genre,
    };
    onAddMovie(newMovie);
    setName('');
    setImage('');
    setDescription('');
    setGenre('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={event => setImage(event.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={event => setDescription(event.target.value)}
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={event => setGenre(event.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
