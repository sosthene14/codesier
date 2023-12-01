import React from 'react'
import Navbar from '../../../components/navbar'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Markdown from 'react-markdown'
import image from '../../../assets/image'
import { Helmet } from 'react-helmet';
import _ from 'lodash';
import meta from '../../../components/metaTags'

const GuideCompletNode = () => {

    const findArticleByTitle = (title) => {
        return _.find(meta, { title: title });
      };
      
      // Exemple d'utilisation
      const titleToFind = localStorage.getItem("title");
      const foundArticle = findArticleByTitle(titleToFind);
      
      if (foundArticle) {
        console.log('Article trouvé :');
      } else {
        console.log('Aucun article trouvé avec le titre :', titleToFind);
      }

    const markdown = `Here is some JavaScript code:

~~~js
console.log('It works!')
~~~
`
    const markdownNodeCheck = `

\`\`\`js
node -v
npm -v
\`\`\`
`;

    const markdownJs = `

\`\`\`js
const fs = require('fs');
\`\`\` 
`
    const markdownPackageInstall = `
~~~jsx
npm install <nom-du-package>
Création d'un Serveur Web
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, Node.js!');
});

const port = 3000;
server.listen(port, () => {
  console.log('Serveur en écoute sur le port ${3000}');
});
Express.js`
    const expressjs = `
~~~jsx
npm install express
//Exemple d'Application Express :
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

const port = 3000;
app.listen(port, () => {
  console.log('Serveur Express en écoute sur le port ${3000}');
});`
    const markdown5 = `
    ~~~jsx
    const memoizedCallback = useCallback(() => {
      // Votre logique ici
    }, [dependencies]);`
    localStorage.setItem("title", "Guide Complet sur Node.js")
    return (
        <div>
            <Navbar />
            <div style={articleContainerStyle}>
                <h2 style={{ textAlign: "center", backgroundColor: "#303030" }}>Guide Complet sur Node.js</h2>
                <img src={image.Node} alt="react image" style={imageStyle} />
                <h3>Introduction à Node.js</h3>
                <img src={image.Node} style={{ width: "70px" }} />
                <h2 >Qu'est-ce que Node Js ?</h2>
                <p style={contentStyle}>Node.js est une plateforme JavaScript côté serveur basée sur le moteur JavaScript V8 de Google. Elle permet d'exécuter du code JavaScript sur le serveur, fournissant ainsi une exécution côté serveur pour les applications web.</p>
                <h2>Installation de Node.js</h2>

                <p style={contentStyle}>Téléchargement et Installation : Rendez-vous sur le site officiel de <span><strong><a href='https://nodejs.org/' target="_blank">Node.js</a></strong></span> pour télécharger la dernière version stable et installez-la sur votre système.<br />

                    Vérification de l'Installation : Ouvrez votre terminal et exécutez les commandes suivantes pour vérifier que Node.js et npm (Node Package Manager) sont correctement installés :</p>

                <Markdown
                    children={markdownNodeCheck}
                    components={{
                        code(props) {
                            const { children, className, node, ...rest } = props
                            const match = /language-(\w+)/.exec(className || '')
                            return match ? (
                                <SyntaxHighlighter
                                    {...rest}
                                    PreTag="div"
                                    children={String(children).replace(/\n$/, '')}
                                    language={match[1]}
                                />
                            ) : (
                                <code {...rest} style={{ backgroundColor: "black" }}>
                                    {children}
                                </code>
                            )
                        }
                    }}
                />
                <h3>Concepts de Base</h3>
                <p style={contentStyle}>Node.js utilise un système de modules. Vous pouvez créer vos propres modules ou utiliser des modules externes. Pour importer un module dans votre fichier, utilisez require.</p>
                <p style={contentStyle}>Vous pouvez trouver des modules sur <strong><a href='https://www.npmjs.com/package/react-markdown'>npm</a></strong></p>
                <Markdown
                    children={markdownJs}
                    components={{
                        code(props) {
                            const { children, className, node, ...rest } = props
                            const match = /language-(\w+)/.exec(className || '')
                            return match ? (
                                <SyntaxHighlighter
                                    {...rest}
                                    PreTag="div"
                                    children={String(children).replace(/\n$/, '')}
                                    language={match[1]}

                                />
                            ) : (
                                <code {...rest} style={{ backgroundColor: "black" }}>
                                    {children}
                                </code>
                            )
                        }
                    }}
                />
                <p style={contentStyle}>npm (Node Package Manager) : npm est le gestionnaire de packages de Node.js. Il permet d'installer des bibliothèques tierces (packages) pour utiliser dans vos projets.</p>
                <Markdown
                    children={markdownPackageInstall}
                    components={{
                        code(props) {
                            const { children, className, node, ...rest } = props
                            const match = /language-(\w+)/.exec(className || '')
                            return match ? (
                                <SyntaxHighlighter
                                    {...rest}
                                    PreTag="div"
                                    children={String(children).replace(/\n$/, '')}
                                    language={match[1]}

                                />
                            ) : (
                                <code {...rest} style={{ backgroundColor: "black" }}>
                                    {children}
                                </code>
                            )
                        }
                    }}
                />
                <p style={contentStyle}><span><strong><a href='https://expressjs.com/fr/' target="_blank">Express.js</a></strong></span> est un framework web minimaliste pour Node.js. Il simplifie le processus de création d'API et d'applications web.<br />

                    Installation d'Express :</p>
                <Markdown
                    children={expressjs}
                    components={{
                        code(props) {
                            const { children, className, node, ...rest } = props
                            const match = /language-(\w+)/.exec(className || '')
                            return match ? (
                                <SyntaxHighlighter
                                    {...rest}
                                    PreTag="div"
                                    children={String(children).replace(/\n$/, '')}
                                    language={match[1]}

                                />
                            ) : (
                                <code {...rest} style={{ backgroundColor: "black" }}>
                                    {children}
                                </code>
                            )
                        }
                    }}
                />
                Gestion de la Base de Données

                <h3>Gestion de la Base de Données</h3>
                <p style={contentStyle}>Node.js prend en charge plusieurs bases de données.
                    <span><strong><a href='https://www.mongodb.com/fr-fr' target="_blank">MongoDB</a></strong></span> ,
                    <span><strong><a href='https://www.mysql.com/fr/' target="_blank">MySQL</a></strong></span> ,
                    <span><strong><a href='https://www.postgresql.org/' target="_blank">PostgreSQL</a></strong></span> ,
                    sont parmi les plus populaires. Utilisez des bibliothèques comme mongoose pour MongoDB ou mysql2 pour MySQL. </p>

                <h3>Asynchrone et Callbacks</h3>
                <p style={contentStyle}>Node.js est conçu pour être non bloquant et asynchrone, ce qui signifie que de nombreuses opérations se font de manière asynchrone. Utilisez des callbacks ou des Promises pour gérer l'asynchronicité.</p>
                
                <h1 style={{ textAlign: "center", backgroundColor: "#303030", marginTop: "80px" }}>Conclusion</h1>
                <p style={contentStyle}>Node.js est une technologie puissante pour le développement côté serveur. Ce guide fournit une introduction de base, mais il y a beaucoup plus à explorer. Explorez les différentes bibliothèques, frameworks et outils disponibles pour enrichir vos compétences en développement Node.js.</p>

            </div>
            <div>
                <h2>Découvez d'autres articles</h2>
                <div>

                </div>
            </div>
            <Helmet>
                <title>{foundArticle?.title}</title>
                <meta name="description" content={foundArticle?.description} />
                <meta name="keywords" content={foundArticle?.tags} />
                <meta name="author" content={foundArticle?.name} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="theme-color" content="#3498db" />
                <meta property="og:title" content={foundArticle?.title} />
                <meta property="og:description" content={foundArticle?.description} />
                <meta property="og:url" content={foundArticle?.url} />
            </Helmet>
        </div>
    )
}
const articleContainerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    marginTop: '20px',
};

const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '20px',
};

const contentStyle = {
    fontSize: '18px',
    lineHeight: '2',
};
export default GuideCompletNode