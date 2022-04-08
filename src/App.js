import React from 'react';
import Post from './components/Post';
import posts from './posts.json'

import './App.css';

function App() {
  return (
    <div>

      {posts.map(({title, image, description}, key) => <Post key={key} image={image} title={title} description={description} /> 
      )}

    </div>
  );
}

export default App;
