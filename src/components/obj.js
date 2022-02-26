import { useState } from "react";
const Obj=()=>{
    const [blogs,setBlog]=useState([
{title:'my new website',body:'lorem..',author:'maria',id:1},
{title:'my  website',body:'lorem...',author:'mahnoor',id:2},
{title:' new website',body:'lorem...',author:'bano',id:3}
    ])
    return(
<div className="obj">
    {blogs.map((blog)=>(
        <div className='blog-preview' key={blog.id}>
<h2>{blog.title}</h2>
<p>written by {blog.author}</p>
        </div>
    ))

    }
</div>
    )
}
export default Obj;