import React, { useState } from 'react';
import './MasterButton.css';

const MasterButton = (props) => {

    return ( <div>
        <button type="button" className={`${props.post.reaction==='liked'?'liked':'inactive'} reactionBtn`} onClick={()=>props.onLikeClick(props.index)}>Like</button>
        <button type="button" className={`${props.post.reaction==='disliked'?'disliked':'inactive'} reactionBtn`} onClick={()=>props.onDislikeClick(props.index)}>Dislike</button>
              </div>
    )
}
export default MasterButton;