import React from 'react';

function Article(props) {
  return (
    <div style={props.style}>
      <h1>{props.content.title}</h1>
      <p>{props.content.text}</p>
    </div>
  );
}

export default Article;