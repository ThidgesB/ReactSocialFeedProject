import MasterButton from "../MasterButton/MasterButton";
import './DisplayPosts.css'

const DisplayPosts = (props) => {

    return ( 
        <table clasName='table'>
        <tbody>
          {props.parentPosts.map((post, index) => {
            return (
              <body className='post-box'>
                <h3 className='postName'>{post.name}</h3>
                <p>{post.post}</p>
                <td><MasterButton onLikeClick={props.onLikeClick} onDislikeClick={props.onDislikeClick} index={index} post={post}/></td>
              </body>
            );
          })}
        </tbody>
      </table>
     );
}
 
export default DisplayPosts;