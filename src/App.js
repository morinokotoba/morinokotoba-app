import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>ようこそ、森の言葉アートサイトへ！🌲✨</h1>;
}

function About() {
  return <h1>このサイトについて</h1>;
}

function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>ホーム</Link>
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

