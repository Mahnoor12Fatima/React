import { useState,useEffect } from "react";
import Blooglist from "./bloglist";
const Blog=()=>{
    const [blogs,setBlogs]=useState([
        {title:'my new website',body:'lorem..',author:'maria',id:1},
        {title:'my  website',body:'lorem...',author:'mahnoor',id:2},
        {title:' new website',body:'lorem...',author:'bano',id:3}
    ]
        
    )
    const handledelete=(id)=>
{
    const newBlogs=blogs.filter(blog=>blog.id !==id);
    setBlogs(newBlogs);
}
useEffect(()=>{
    console.log('use effect run')
})
    return(
        <div className="BLOG">
        {/*<Blooglist blogs= {blogs} title='All blogs'/>
         <Blooglist blogs= {blogs.filter((blog)=>blog.author=='maria')} title="Maria's blogs">*/}
         <Blooglist blogs={blogs} title='All blogs' handledelete={handledelete}/> 
        </div>
    )

}
export default Blog;
