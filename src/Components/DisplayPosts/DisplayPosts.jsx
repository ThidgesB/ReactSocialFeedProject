import MasterButton from "../MasterButton/MasterButton";


const DisplayPosts = (props) => {

    return ( 
        <table clasName='table'>
        <tbody>
          {props.parentPosts.map((post) => {
            return (
              <body className='post-box'>
                <td>{post.name}</td>
                <td>{post.post}</td>
                <td><MasterButton /></td>
              </body>
            );
          })}
        </tbody>
      </table>
     );
}
 
export default DisplayPosts;