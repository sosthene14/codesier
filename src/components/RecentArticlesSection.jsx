import React from 'react';
import image from '../assets/image';
import { Helmet } from 'react-helmet';

// Exemple de données d'articles récents
const recentArticlesData = [
  { id: 1, title: 'Découvrir React Hooks', date: '2023-01-15', image: image.ReactHooksImage, h1: "Découvrir React Hooks : Une Plongée dans la Magie de la Gestion d'État" },
  { id: 2, title: 'Guide complet sur Node.js', date: '2023-01-10', image: image.Node },
  { id: 3, title: 'Les bases du développement web', date: '2023-01-05', image: image.imageWeb },
];

const RecentArticlesSection = () => {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Articles Récents</h2>
        <ul style={listStyle}>
          {recentArticlesData.map((article) => (
            <li key={article.id} style={itemStyle}>
              <div>
                <img src={article.image} style={imageArticle} />
              </div>
              <a href={`/article/${article.title}`} style={linkStyle}>
                {article.title}
              </a>
              <span style={dateStyle}>{formatDate(article.date)}</span>
              <br />
            </li>

          ))}
        </ul>
      </div>
    </section>
  );
};

const imageArticle = {
  width: "300px",
  borderRadius: "20px",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
}

const sectionStyle = {
  padding: '50px 0',

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
};

const itemStyle = {
  display: "flex",
  flexDirection: "column",
  alignItem: "center",
  marginBottom: '15px',
};

const linkStyle = {
  textDecoration: 'none',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginRight: '10px',
};

const dateStyle = {
  fontSize: '1rem',
};

// Fonction pour formater la date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
};

export default RecentArticlesSection;
