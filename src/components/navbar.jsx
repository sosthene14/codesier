import React from 'react';
import "./navbar.css"
const Navbar = () => {
    const currentPath = window.location.pathname;

    const linkStyle = {
        float: 'left',
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none',
        cursor: 'pointer',
    };

    const linkStyleActive = {
        float: 'left',
        display: 'block',
        color: '#6C63FF',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none',
        cursor: 'pointer',
    };

    return (
        <nav style={{ backgroundColor: '#333', overflow: 'hidden',display:"flex",justifyContent:"center" }}>
            <a href="/" style={currentPath === "/" ? linkStyleActive : linkStyle}>Accueil</a>
            <a href="/articles" style={currentPath === "/articles" ? linkStyleActive : linkStyle}>Articles</a>
            <a href="/tutoriels" style={currentPath === "/tutoriels" ? linkStyleActive : linkStyle}>Tutoriels</a>
            <a href="/langages" style={currentPath === "/langages" ? linkStyleActive : linkStyle}>Langages</a>
            <a href="/frameworks" style={currentPath === "/frameworks" ? linkStyleActive : linkStyle}>Frameworks</a>
            <a href="/outils-ressources" style={currentPath === "/outils-ressources" ? linkStyleActive : linkStyle}>Outils et Ressources</a>
            <a href="/conseils-astuces" style={currentPath === "/conseils-astuces" ? linkStyleActive : linkStyle}>Conseils et Astuces</a>
            <a href="/actualites" style={currentPath === "/actualites" ? linkStyleActive : linkStyle}>Actualités</a>
            <a href="/a-propos" style={currentPath === "/a-propos" ? linkStyleActive : linkStyle}>À Propos</a>
            <a href="/contact" style={currentPath === "/contact" ? linkStyleActive : linkStyle}>Contact</a>
        </nav>
    );
};

export default Navbar;
