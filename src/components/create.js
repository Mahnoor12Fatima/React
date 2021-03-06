import { useState } from "react";

const Create=()=>{
    const [title,setTitle]=useState("");
    const[body,setBody]=useState("");
    const[author,setAuthor]=useState("mario");
const handleSubmit=(e)=>{
    e.preventDefault();
    const blog={title,body,author};
    console.log(blog);
}
return(
    <div className="create">
         <h2>Add a new blog</h2>
         <form onSubmit={handleSubmit}>
             <label>Blog title:</label>
                 <input type="text"
                     required
                     value={title}
                     onChange={(e)=>setTitle(e.target.value)}
                 ></input>
            <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}>
                </textarea>
                <label>Blog author:</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshii">yoshii</option>
                </select>
                <button>Add blog</button>
         </form>
        <p> {title}</p>
        <p> {body}</p>
        <p> {author}</p>
    </div>
   
)
}
export default Create;