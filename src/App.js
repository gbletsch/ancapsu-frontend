import React from 'react';
import Header from './components/Header'
import './Style.css'

function App() {
  return (
    <div className="flexbox-container">
      <Header />
      <section className="hero">
        Hero
      </section>
      <div className="main">
        <div className="cards">
        <div className="card">
            Image
            Title
            Info
            Full Text
          </div>
          <div className="card">
            Image
            Title
            Info
            Full Text
          </div>
          <div className="card">
            Image
            Title
            Info
            Full Text
          </div>
          <div className="card">
            Image
            Title
            Info
            Full Text
          </div>
          <div className="card">
            Image
            Title
            Info
            Full Text
          </div>
          <div className="card">
            Image
            Title
            Info
            Full Text
          </div>
        </div>
      </div>
      <footer>
        Footer
      </footer>
    </div>
  );
}

export default App;
