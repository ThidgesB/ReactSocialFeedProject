import React, {useState} from "react";
import './MakePost.css'

const MakePost = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name: name,
            post: post,
            reaction: 'inactive'
        };
        console.log(newPost)
        props.parentMakePost(newPost)
        setName('')
        setPost('')
    }

    return ( 
        <form className='make-post' onSubmit={handleSubmit}>
            <div className="mb-3">
            <label for='nameInput' className="form-label">Name</label>
            <input required type='text' className="form-control" id='formControlNameInput' value={name} onChange={(event) => setName(event.target.value)} value={name}/>
            </div>
            <div className="mb-3">
            <label for='postInput' className="form-label">Post</label>
            <input required type='text' className="form-control" id='formControlPostInput' rows='3' value={post} onChange={(event) => setPost(event.target.value)} value={post}/>
            </div>
            <button type='submit' className="btn btn-primary">Create</button>
        </form>
     );
}
 
export default MakePost;