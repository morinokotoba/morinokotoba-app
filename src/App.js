// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div>
      <h1>ようこそ、森の言葉アートサイトへ！🌲✨</h1>
      <button
        onClick={() => alert("ボタンが押されました！")}
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          background: 'linear-gradient(to right, #8BC6EC, #9599E2)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'transform 0.2s ease'
        }}
        onMouseOver={e => (e.target.style.transform = 'scale(1.05)')}
        onMouseOut={e => (e.target.style.transform = 'scale(1)')}
      >
        押してね 💫
      </button>
    </div>
  );
}

function About() {
  return <h1>このサイトについて 🌿</h1>;
}

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>ホーム</Link>
        <Link to="/about">このサイトについて</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
