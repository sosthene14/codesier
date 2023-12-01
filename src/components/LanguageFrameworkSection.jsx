import React from 'react';
import { Helmet } from 'react-helmet';
import image from '../assets/image';

const LanguageFrameworkSection = () => {
  return (
    <section style={sectionStyle}>


      <div style={containerStyle}>
        <h2 style={titleStyle}>Sélection de Langages/Frameworks</h2>
        <div style={frameworksContainerStyle}>
          <div style={frameworkStyle}>
            <img src={image.React} style={{ width: "150px" }} alt="React Logo" />
            <p>React</p>

            <p>Une bibliothèque JavaScript populaire pour la création d'interfaces
              utilisateur interactives. Facilite le développement d'applications frontales modernes...</p>

          </div>
          <div style={frameworkStyle}>
            <img src={image.Node} style={{ width: "150px" }} alt="Node JS Logo" />
            <p>Node JS</p>

            <p>Un environnement d'exécution JavaScript côté serveur qui permet d'exécuter du code JavaScript côté serveur...</p>
          </div>
          <div style={frameworkStyle}>
            <img src={image.Python} style={{ width: "150px" }} alt="Python Logo" />
            <p>Python</p>

            <p>Un langage de programmation polyvalent et facile à apprendre, souvent utilisé pour le développement web, l'analyse de données et l'intelligence artificielle ...</p>
          </div>
          {/* Ajoutez d'autres langages/frameworks selon vos besoins */}
        </div>
      </div>
    </section>
  );
};

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

const frameworksContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginTop: "50px",
};

const frameworkStyle = {
  padding: '10px 20px',
  margin: '10px',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default LanguageFrameworkSection;
