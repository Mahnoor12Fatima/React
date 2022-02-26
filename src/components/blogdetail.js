import { useParams } from "react-router";
import Usefetch2 from "./usefetch2";
const Blogdetail = () => {
    const {id} = useParams();
    const {data:blog,error,ispending}=Usefetch2('http://localhost:8000/blogs/' + id);
    return ( 
        <div className="blogdetail">
            { ispending &&<div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
           {/* <h2>Blog Detail-{id}</h2>*/}
        </div>
     );
}
 
export default Blogdetail;