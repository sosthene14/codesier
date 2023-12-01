import React, { useState, useEffect } from 'react';
import image from '../../../assets/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import Markdown from 'react-markdown'
import Navbar from '../../../components/navbar';
import { Helmet } from 'react-helmet';
import _ from 'lodash';
import meta from '../../../components/metaTags'

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

  
  const markdown = `Une petite illustration:

~~~jsx
const [count, setCount] = useState(0);
~~~
`
  const markdown2 = `

~~~jsx
useEffect(() => {
  // Votre sortilège ici
}, [dependencies]);
`
  const markdown3 = `
~~~jsx
const myContext = useContext(MyContext);
`
  const markdown4 = `
~~~jsx
const [state, dispatch] = useReducer(reducer, initialState);
`
  const markdown5 = `
~~~jsx
const memoizedCallback = useCallback(() => {
  // Votre logique ici
}, [dependencies]);`
localStorage.setItem("title", "Découvrir React Hooks : Une Plongée dans la Magie de la Gestion d'État")
  return (
  <div>
    <Navbar />
    <div style={articleContainerStyle}>
      <h2 style={{ textAlign: "center", backgroundColor: "#303030" }}>Découvrir React Hooks : Une Plongée dans la Magie de la Gestion d'État</h2>
      <img src={image.ReactHooksImage} alt="react image" style={imageStyle} />
      <h3>Bienvenue dans le monde captivant de React Hooks, où la gestion de l'état devient une expérience élégante et puissante. Si vous êtes un développeur React chevronné ou que vous débutez tout juste dans le monde du développement web, les React Hooks sont là pour élever votre expérience de programmation à un niveau supérieur.</h3>
      <img src={image.smalreactimage} style={{ width: "70px" }} />
      <h2 >Qu'est-ce que React Hooks ?</h2>
      <p style={contentStyle}>React Hooks est une fonctionnalité introduite dans React 16.8 qui permet aux développeurs de gérer l'état et d'utiliser d'autres fonctionnalités de React dans les composants fonctionnels. Ils résolvent élégamment le problème de la réutilisation du code lié à l'état et aux effets secondaires dans les composants fonctionnels.</p>
      <h2>Plongeons dans le Monde Magique des Hooks</h2>
      <h3>useState : La Potion de l'État</h3>
      <p style={contentStyle}>Le Hook  <span><strong><a href='https://react.dev/reference/react/useState' target="_blank">useState</a></strong></span> est comme une potion magique qui confère à vos composants fonctionnels la capacité d'avoir leur propre état local. C'est aussi simple que de dire « Abracadabra ! »</p>

      <Markdown
        children={markdown}
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
      <h3>useEffect : Le Sortilège des Effets Secondaires</h3>
      <p style={contentStyle}>Le Hook <span><strong><a href='https://react.dev/reference/react/useEffect' target="_blank">useEffect</a></strong></span> vous permet de lancer des sorts (fonctions) après que le composant a été rendu. Utilisez-le pour des opérations telles que des appels API ou la manipulation du DOM.</p>
      <Markdown
        children={markdown2}
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
      <h3>useContext : La Connaissance Partagée</h3>
      <p style={contentStyle}>Le Hook <span><strong><a href='https://react.dev/reference/react/useContext' target="_blank">useContext</a></strong></span> permet d'accéder au contexte partagé dans votre application React. Utilisez-le pour partager des valeurs entre des composants sans avoir à passer des propriétés manuellement.</p>
      <Markdown
        children={markdown3}
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

      <h3>useReducer : L'Épopée de la Réduction</h3>
      <p style={contentStyle}>Le Hook <span><strong><a href='https://react.dev/reference/react/useReducer' target="_blank">useReducer</a></strong></span> est idéal pour gérer des états complexes à l'aide de fonctions de réduction. Il est souvent utilisé lorsque l'état dépend de l'état précédent.</p>
      <Markdown
        children={markdown4}
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

      <h3>useCallback : La Stratégie de Mémoïsation</h3>
      <p style={contentStyle}>Le Hook <span><strong><a href='https://react.dev/reference/react/useCallback' target="_blank">useCallback</a></strong></span> memoïse une fonction, évitant ainsi sa récréation à chaque rendu. Utile lorsque vous transmettez des fonctions en tant que propriétés à des composants enfants.</p>
      <Markdown
        children={markdown5}
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
      <h1 style={{ textAlign: "center", backgroundColor: "#303030", marginTop: "80px" }}>Conclusion</h1>
      <p style={contentStyle}>Devenez le Magicien React Ultime
        En explorant les méandres de React Hooks, vous débloquerez une nouvelle dimension de
        la programmation React. Alors, enfilez votre chapeau de magicien, agitez votre baguette
        (ou votre clavier), et plongez dans le monde enchanteur des Hooks !</p>

    </div>
    <div>
      <h2>Découvez d'autres articles</h2>
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
