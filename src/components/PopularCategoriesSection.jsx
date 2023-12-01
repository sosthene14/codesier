import React from 'react';

// Exemple de données de catégories populaires
const popularCategoriesData = [
  { id: 1, name: 'JavaScript', articlesCount: 20 },
  { id: 2, name: 'React', articlesCount: 15 },
  { id: 3, name: 'Python', articlesCount: 18 },
  { id: 4, name: 'Web Development', articlesCount: 25 },
  // Ajoutez d'autres catégories selon vos besoins
];

const PopularCategoriesSection = () => {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Catégories Populaires</h2>
        <ul style={listStyle}>
          {popularCategoriesData.map((category) => (
            <li key={category.id} style={itemStyle}>
              <span style={categoryStyle}>{category.name}</span>
              <span style={countStyle}>{category.articlesCount} articles</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '50px 0',
  width:"600px",
  display:"flex",
  marginLeft:"50px"

};

const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  textAlign: 'center',
};

const titleStyle = {
  fontSize: '2rem',
  marginBottom: '20px',
  
};

const listStyle = {
  listStyle: 'none',
  padding: 0,

  display:"flex",
  flexDirection:"column",

};

const itemStyle = {
  marginBottom: '15px',
  display:"flex",
  alignItems:"center",
  justifyContent:"space-between"
};

const categoryStyle = {

  backgroundColor: '#646cffaa', // Couleur de fond de la catégorie (verte dans cet exemple)
  padding: '8px 12px',
  borderRadius: '4px',
  marginRight: '8px',
};

const countStyle = {
  fontSize: '1rem',
};

export default PopularCategoriesSection;
