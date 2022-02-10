
const DisplayPosts = (props) => {
    return ( 
        <table clasName='table'>
        <tbody>
          {props.parentPosts.map((post) => {
            return (
              <tr>
                <td>{post.name}</td>
                <td>{post.post}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
     );
}
 
export default DisplayPosts;