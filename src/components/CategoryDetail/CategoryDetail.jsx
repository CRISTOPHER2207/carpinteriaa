// src/components/CategoryDetail/CategoryDetail.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CategoryDetail.css';

const categoryData = {
  melamine: {
    title: 'Melamine',
    description: `
      Nos especializamos en la fabricación de muebles y acabados de alta calidad en melamine. Nuestros servicios abarcan una amplia gama de necesidades de mobiliario, incluyendo:

      <br/><br/><strong>Reposteros de Cocina:</strong> Diseñamos y fabricamos reposteros de cocina personalizados que combinan funcionalidad y estilo. Utilizamos melamine de alta calidad para garantizar durabilidad y facilidad de limpieza.

      <br/><br/><strong>Muebles de Sala y Comedor:</strong> Creamos muebles a medida para salas y comedores, adaptándonos a tu estilo y espacio. Nuestros muebles de melamine son resistentes y están disponibles en una variedad de acabados y colores.

      <br/><br/><strong>Closets y Armarios:</strong> Ofrecemos soluciones de almacenamiento inteligentes y estéticas con nuestros closets y armarios de melamine. Diseñamos cada pieza para maximizar el espacio y facilitar la organización.

      <br/><br/><strong>Muebles de Oficina:</strong> Diseñamos y fabricamos mobiliario para oficinas que combina profesionalismo y comodidad. Nuestros muebles de melamine para oficinas incluyen escritorios, estanterías y gabinetes.

      <br/><br/>Cada proyecto es único y se realiza con un enfoque personalizado, asegurando que cada detalle cumpla con tus expectativas. Nuestro equipo de expertos trabaja contigo desde el diseño inicial hasta la instalación final, garantizando un proceso sin complicaciones y resultados excepcionales.

      <br/><br/>Confía en [Nombre de la Empresa] para transformar tus espacios con la durabilidad y elegancia de la melamine.
    `,
    images: ['./closet2.png', './closet4.jpg', './closet5.jpg', './closet7.jpg', './closet8.jpg'],
    backgroundImage: './mela.png'
  },
  doors: {
    title: 'Puertas',
    description: 'Descripción de las puertas...',
    images: ['/images/categories/doors_image1.jpg', '/images/categories/doors_image2.jpg'],
    backgroundImage: './dor.png'
  },
  furniture: {
    title: 'Muebles',
    description: 'Descripción de los muebles...',
    images: ['/images/categories/furniture_image1.jpg', '/images/categories/furniture_image2.jpg'],
    backgroundImage: './mela.png'
  },
  other: {
    title: 'Otros',
    description: 'Descripción de otros muebles...',
    images: ['/images/categories/other_image1.jpg', '/images/categories/other_image2.jpg'],
    backgroundImage: './mela.png'
  },
};

const CategoryDetail = ({ categoryId }) => {
  if (!categoryId) return null;

  const category = categoryData[categoryId];

  return (
    <div 
      className="category-detail"
      style={{ 
        backgroundImage: `url(${category.backgroundImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="category-text">
        <h2>{category.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: category.description }}></p>
      </div>
      <div className="category-carousel">
        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false}>
          {category.images.map((image, index) => (
            <div key={index} className="carousel-image-container">
              <img src={image} alt={`${category.title} ${index + 1}`} className="carousel-image" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CategoryDetail;
