import React from 'react';

function Article(props) {
  return (
    <div style={props.style}>
      <h2>{props.content.title}</h2>
      <hr />
      <p>{props.content.text}</p>
    </div>
  );
}

export default Article;