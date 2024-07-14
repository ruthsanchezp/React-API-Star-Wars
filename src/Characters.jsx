import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Characters.css';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc'); // Estado para el orden

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        setCharacters(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const sortCharacters = (key) => {
    const sortedCharacters = [...characters].sort((a, b) => {
      if (sortOrder === 'asc') {
        return parseFloat(a[key]) - parseFloat(b[key]);
      } else {
        return parseFloat(b[key]) - parseFloat(a[key]);
      }
    });
    setCharacters(sortedCharacters);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-danger">Error loading characters: {error.message}</p>;

  return (
    <div className="characters-container">
      <div className="characters-list">
        <h2 className="text-center text-secondary mb-4">Characters</h2>
        <div className="list-group">
          {characters.map(character => (
            <div key={character.name} className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{character.name}</h5>
              </div>
              <p className="mb-1">Height: {character.height}</p>
              <p className="mb-1">Mass: {character.mass}</p>
              <p className="mb-1">Hair Color: {character.hair_color}</p>
              <p className="mb-1">Skin Color: {character.skin_color}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="characters-table">
        <h2 className="text-center text-secondary mb-4">Comparison Table</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>
                <button className="btn btn-link" onClick={() => sortCharacters('height')}>
                  Height
                </button>
              </th>
              <th>
                <button className="btn btn-link" onClick={() => sortCharacters('mass')}>
                  Mass
                </button>
              </th>
              <th>Hair Color</th>
              <th>Skin Color</th>
            </tr>
          </thead>
          <tbody>
            {characters.map(character => (
              <tr key={character.name}>
                <td>{character.name}</td>
                <td>{character.height}</td>
                <td>{character.mass}</td>
                <td>{character.hair_color}</td>
                <td>{character.skin_color}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Characters;
