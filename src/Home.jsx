import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container d-flex justify-content-center align-items-center">
      <div className="text-center bg-white p-5 rounded shadow">
        <h1 className="display-4 text-primary">Star Wars People</h1>
        <p className="lead">Características y detalles de los personajes de Star Wars.</p>
        <Link to="/characters" className="btn btn-primary btn-lg">View Characters</Link>
        <p>
        <a href="https://ruthsanchezp.github.io/react-api-star-wars/" target='_blank'>Despliege en Gihub Pages</a>
        </p>
      </div>
    </div>
  );
}

export default Home;
