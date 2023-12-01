import React, { useState, useEffect } from 'react';
import image from '../../../assets/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import Markdown from 'react-markdown'
import Navbar from '../../../components/navbar';
import meta from '../../../components/metaTags';
import { Helmet } from 'react-helmet';
import _ from 'lodash';


const ReactHooksPage = () => {
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
    const developementLangage = `
  * HTML : Langage de balisage pour la création de la structure d'une page web. 
  * CSS : Langage de style pour la mise en forme et la présentation des pages web.
  * JavaScript : Langage de programmation côté client pour rendre les pages web interactives.

`
    const editeurs = `
  * Éditeurs de texte : Visual Studio Code, Sublime Text, Atom, etc.
  * Navigateurs Web : Chrome, Firefox, Safari, etc.
  * Git : Système de gestion de version pour le suivi des modifications du code.
`
    const framework = `
  * React : Bibliothèque JavaScript pour la construction d'interfaces utilisateur.
  * Vue.js : Framework JavaScript progressif pour la construction d'interfaces utilisateur.
  * Bootstrap : Framework CSS pour la création de designs responsives.
`
    const conceptImportant = `
  * Responsive Design : Création de sites web qui s'adaptent à différentes tailles d'écrans.
  * API (Interface de Programmation d'Application) : Permet la communication entre différentes applications.
  * Version Control : Gestion des versions du code source avec des outils comme Git.
`
    const markdown5 = `
~~~jsx
const memoizedCallback = useCallback(() => {
  // Votre logique ici
}, [dependencies]);`

    localStorage.setItem("title", "Les Bases du Développement Web")
    return (
        <div>
            <Navbar />
            <div style={articleContainerStyle}>
                <h2 style={{ textAlign: "center", backgroundColor: "#303030" }}>Les Bases du Développement Web</h2>
                <img src={image.imageWeb} alt="react image" style={imageStyle} />
                <h2 >Introduction</h2>
                <p style={contentStyle}>Le développement web englobe toutes les activités liées à la création d'applications et de sites web. Il nécessite une compréhension de plusieurs technologies et langages de programmation.</p>
                <h2>Langages Principaux</h2>

                <Markdown
                    children={developementLangage}
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
                <h2>Outils de Développement</h2>
                <Markdown
                    children={editeurs}
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
                <h2>Frameworks et Bibliothèques</h2>
                <Markdown
                    children={framework}
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

                <h2>Concepts Importants</h2>
                <Markdown
                    children={conceptImportant}
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
                <p style={contentStyle}>Ceci est une introduction de base au développement web. Explorez ces concepts pour construire des applications web robustes et modernes.</p>

                <p style={{ textAlign: "center" }}> 🔥🔥🔥🔥🔥🔥</p>
            </div>
            <div>
                <h2>Découvez d'autres articles</h2>
                <div>

                </div>
            </div>
 <div>
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
        </div>

    )
};

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
export default ReactHooksPage;
