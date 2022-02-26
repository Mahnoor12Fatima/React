import { Link } from "react-router-dom";

const Blooglist=({blogs,title,handledelete})=>{
   
    return(
        <div className="Bloglist">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className='blog-preview' key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
        <h2>{blog.title}</h2>
        </Link>
        <p>written by {blog.author}</p>
        
        <button onClick={()=>handledelete(blog.id)}>delete blog</button>
        
                </div>
            ))
           }
           
           
</div>
    )}
export default Blooglist;