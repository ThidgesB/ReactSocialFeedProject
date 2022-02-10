import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import MakePost from './Components/MakePost/MakePost';


function App() {

  const [posts, setPosts] = useState([])

  function addNewPost(post){
    let tempPosts = [...posts, post]

    setPosts(tempPosts)
  }


  return (
    <div>
      <MakePost parentMakePost={addNewPost}/>
      <DisplayPosts parentPosts={posts} />
    </div>
  );
}

export default App;
