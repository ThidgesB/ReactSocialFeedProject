import MasterButton from "../MasterButton/MasterButton";


const DisplayPosts = (props) => {

    return ( 
        <table clasName='table'>
        <tbody>
          {props.parentPosts.map((post) => {
            return (
              <tr>
                <td>{post.name}</td>
                <td>{post.post}</td>
                <td><MasterButton /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
     );
}
 
export default DisplayPosts;