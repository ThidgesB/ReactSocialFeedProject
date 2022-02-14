import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import MakePost from "./Components/MakePost/MakePost";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  function addNewPost(post) {
    let tempPosts = [post, ...posts];

    setPosts(tempPosts);
    console.log(tempPosts);
  }

  function onLikeClick(index) {
    let newTempPosts = [...posts];
    if (newTempPosts[index].reaction === "inactive" || newTempPosts[index].reaction === 'disliked') {
      newTempPosts[index].reaction = "liked";
    } else {
      newTempPosts[index].reaction = "inactive";
    }
    setPosts(newTempPosts)
  }

  function onDislikeClick(index) {
    let newTempPosts = [...posts];
    if (newTempPosts[index].reaction === "inactive" || newTempPosts[index].reaction === 'liked') {
      newTempPosts[index].reaction = 'disliked';
    } else {
      newTempPosts[index].reaction = 'inactive';
    }
    setPosts(newTempPosts)
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <h1 style={{ margin: "1em" }}>
          Social<small className="text-muted">Feed</small>
        </h1>
        <div className="col-md-6">
          <div className="border-box">
            <MakePost parentMakePost={addNewPost} />
          </div>
          <div className="border-box">
            <DisplayPosts parentPosts={posts} onLikeClick={onLikeClick}  onDislikeClick={onDislikeClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
