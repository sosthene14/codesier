import React from 'react';

const PresentationSection = () => {

    const NeonCircle = () => {
        return <div className="neon-circle"></div>;
    };

    return (
        <section style={sectionStyle}>
            <div style={containerStyle}>
                <h1 style={titleStyle}>Bienvenue sur Mon Blog de Développeur</h1>
                <p style={descriptionStyle} className='neon-text'>
                    Découvrez des articles, tutoriels, et astuces pour améliorer vos compétences en développement.
                </p>
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
    fontSize: '2.5rem',
    marginBottom: '20px',
};

const descriptionStyle = {
    marginTop:"40px",
    fontSize: '1.2rem',
    color: 'white',
};

export default PresentationSection;
