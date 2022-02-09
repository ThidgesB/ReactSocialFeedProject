import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';


function App() {

  const [posts, setPosts] = useState([{name: 'Chris', post: 'This is a mock post'}])

  return (
    <div>
      <DisplayPosts parentPosts={posts} />
      
    </div>
  );
}

export default App;
