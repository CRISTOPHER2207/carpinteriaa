// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';
import CategoryDetail from './components/CategoryDetail/CategoryDetail';
import Contact from './components/Contact/Contact';


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="App">
      <div>
        <Header />
        <Hero />
        <Menu onCategorySelect={handleCategorySelect} />
        <CategoryDetail categoryId={selectedCategory} />
      </div>
      <Contact />
    </div>
  );
}

export default App;
