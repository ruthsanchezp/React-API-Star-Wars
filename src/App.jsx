import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

function App({ children }) {
  return (
    <div className="container mt-4 p-4 bg-light rounded shadow">
      <ErrorBoundary>
        {children}
      </ErrorBoundary>
    </div>
  );
}

export default App;

