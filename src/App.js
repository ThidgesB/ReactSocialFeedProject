import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import MakePost from './Components/MakePost/MakePost';
import './App.css';

function App() {

  const [posts, setPosts] = useState([])

  function addNewPost(post){
    let tempPosts = [...posts, post]

    setPosts(tempPosts)
  }


  return (
    <div className='container-fluid'>
      <div className='row'>
        <h1 style={{margin: '1em'}}>Social<small className='text-muted'>Feed</small></h1>
        <div className='col-md-6'>
          <div className='border-box'>
            <MakePost parentMakePost={addNewPost} />
          </div>
          <div className='border-box'>
            <DisplayPosts parentPosts={posts}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
