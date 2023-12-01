import React from 'react';
import image from '../assets/image';
import { Helmet } from 'react-helmet';

// Exemple de données de derniers tutoriels
const latestTutorialsData = [
  { id: 1, title: 'Créer une application React', date: '2023-01-20', image: image.codePython2 },
  { id: 2, title: 'Créer une application React', date: '2023-01-20', image: image.codePython2 },

  // Ajoutez d'autres tutoriels selon vos besoins
];

const LatestTutorialsSection = () => {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Derniers Tutoriels</h2>
        <ul style={listStyle}>
          {latestTutorialsData.map((tutorial) => (
            <li key={tutorial.id} style={itemStyle}>
              <div>
                <img src={tutorial.image} style={imageLast} />
              </div>
              <a href={`/tutorial/${tutorial.id}`} style={linkStyle}>
                {tutorial.title}
              </a>
              <span style={dateStyle}>{formatDate(tutorial.date)}</span>
              <Helmet >
                <meta name="description" content={tutorial.title} />
              </Helmet>
            </li>


          ))}
        </ul>
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '50px 0',
  marginLeft: "80px"
};

const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  textAlign: 'center',
};

const imageLast = {
  height: "auto",
  maxwWidth: "100%",
  borderRadius: "15px"
}

const titleStyle = {
  fontSize: '2rem',
  marginBottom: '20px',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
};

const itemStyle = {
  marginBottom: '15px',
};

const linkStyle = {
  textDecoration: 'none',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginRight: '10px',
};

const dateStyle = {
  color: '#777',
  fontSize: '1rem',
};

// Fonction pour formater la date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
};

export default LatestTutorialsSection;
