import { useState,useEffect } from "react";
import Blooglist from "./bloglist";
const Home = () => {
    const [blogs,setBlogs]=useState(null);
    const [ispending,setIspending]=useState(true);
    const handledelete=(id)=>
{
    const newBlogs=blogs.filter(blog=>blog.id !==id);
    setBlogs(newBlogs);
}
useEffect(()=>{
    setTimeout(()=>{
   fetch('http://localhost:8000/blogs')
   .then(res=>{
       return res.json();
   })
   .then(data=>{
       setBlogs(data);
       setIspending(false);

   })
},1000)
},[])
    return ( <div className="Blog">
        {/*<Blooglist blogs= {blogs} title='All blogs'/>
         <Blooglist blogs= {blogs.filter((blog)=>blog.author=='maria')} title="Maria's blogs">*/}
         {ispending && <div>loading...</div>}
        {blogs && <Blooglist blogs={blogs} title='All blogs' handledelete={handledelete}/> }
        
        <p>homepage</p>
    </div> );
}
 
export default Home;