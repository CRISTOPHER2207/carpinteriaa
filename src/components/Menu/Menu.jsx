// src/components/Menu/Menu.jsx
import React from 'react';
import './Menu.css';

const Menu = ({ onCategorySelect }) => {
  const categories = [
    { id: 'melamine', name: 'Melamine', icon: './melamine.jpg' },
    { id: 'doors', name: 'Puertas', icon: './puerta.png' },
    { id: 'furniture', name: 'Techos Sol y Sombra', icon: './techo.jpg' },
    { id: 'other', name: 'Carpinteria General', icon: './general.png' },
  ];

  return (
    <div className="menu">
      {categories.map(category => (
        <div key={category.id} className="menu-item" onClick={() => onCategorySelect(category.id)}>
          <img src={category.icon} alt={category.name} />
          <span>{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Menu;
