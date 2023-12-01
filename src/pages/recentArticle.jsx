import React from 'react';
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import recentArticlesData from './dataRecentArticles';

const RecentArticle = () => {
  const { title } = useParams();

  const findArticleByTitle = (title) => {
    return _.find(recentArticlesData, { title: title });
  };

  const titleToFind = title;
  const foundArticle = findArticleByTitle(titleToFind);

  if (foundArticle) {
    console.log('Article trouvé :', foundArticle);
  } else {
    console.log('Aucun article trouvé avec le titre :', titleToFind);
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
    fontSize: '20px',
    lineHeight: '2',
  };

  return (
    <div style={articleContainerStyle}>
      <h2 style={{textAlign:"center"}}>{foundArticle?.title}</h2>
      <img src={foundArticle?.image} alt={foundArticle?.title} style={imageStyle} />
      <h1>{foundArticle?.h1}</h1>
      <img src={foundArticle?.smallImage} style={{width:"70px"}} />
      <h4 style={{fontSize:"1.2em"}}>{foundArticle?.p1}</h4>
      <h2 >{foundArticle?.q1}</h2>
      <p style={contentStyle}>{foundArticle?.content}</p>
    </div>
  );
};

export default RecentArticle;
