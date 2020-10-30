import React from 'react';
import Article from './article.js'

let defaultArticle = {
  title: 'Default Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quos praesentium placeat natus illo facere et ex repellendus porro consectetur necessitatibus quis aspernatur ea, vel assumenda vero rerum ipsum doloribus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quos praesentium placeat natus illo facere et ex repellendus porro consectetur necessitatibus quis aspernatur ea, vel assumenda vero rerum ipsum doloribus.',
}

let errorArticle = {
  title: 'Error Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quos praesentium placeat natus illo facere et ex repellendus porro consectetur necessitatibus quis aspernatur ea, vel assumenda vero rerum ipsum doloribus.',
}

let successArticle = {
  title: 'Success Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quos praesentium placeat natus illo facere et ex repellendus porro consectetur necessitatibus quis aspernatur ea, vel assumenda vero rerum ipsum doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quos praesentium placeat natus illo facere et ex repellendus porro consectetur necessitatibus quis aspernatur ea, vel assumenda vero rerum ipsum doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quos praesentium placeat natus illo facere et ex repellendus porro consectetur necessitatibus quis aspernatur ea, vel assumenda vero rerum ipsum doloribus.',
}

let errorArticleStyle = {
  color: 'red',
  width: '50%',
  height: 'auto',
  backgroundColor: 'transparent',
  border: '3px solid red',
  margin: '20px auto',
  borderRadius: '5px',
  padding: '10px',
}

let defaultArticleStyle = {
  color: 'blue',
  width: '50%',
  height: 'auto',
  backgroundColor: 'transparent',
  border: '3px solid blue',
  margin: '20px auto',
  borderRadius: '5px',
  padding: '10px',
}

let successArticleStyle = {
  color: 'green',
  width: '50%',
  height: 'auto',
  backgroundColor: 'transparent',
  border: '3px solid green',
  borderRadius: '5px',
  margin: '20px auto',
  padding: '10px',
}

function ListOfArticles() {
  return (
    <div>
      <Article content={defaultArticle} style={defaultArticleStyle} />
      <Article content={errorArticle} style={errorArticleStyle} />
      <Article content={successArticle} style={successArticleStyle} />
    </div>
  );
}

export default ListOfArticles;