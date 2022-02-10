import React, {useState} from "react";


const MakePost = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name: name,
            post: post,
        };
        console.log(newPost)
        props.parentMakePost(newPost)
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' value={name} onChange={(event) => setName(event.target.value)} value={name}/>
            <label>Post</label>
            <input type='text' value={post} onChange={(event) => setPost(event.target.value)} value={post}/>
            <button type='sumbit'>Create</button>
        </form>
     );
}
 
export default MakePost;