import { useState,useEffect } from "react";
import Blooglist from "./bloglist";
const Catch = () => {
    const [blogs,setBlogs]=useState(null);
    const [ispending,setIspending]=useState(true);
    const [error,setError]=useState(null);
    const handledelete=(id)=>
{
    const newBlogs=blogs.filter(blog=>blog.id !==id);
    setBlogs(newBlogs);
}
useEffect(()=>{
    setTimeout(()=>{
   fetch('http://localhost:8000/blogss')
   .then(res=>{
    //   console.log(res);
       if(!res.ok){
throw Error('could not fetch the data');
      }
       return res.json();
   })
   .then(data=>{
       setBlogs(data);
       setIspending(false);
setError(null);
   })
   .catch(err=>{
//console.log(err.message);
setError(err.message);
setIspending(false);
   }

   )
},1000)
},[])
    return ( <div className="Blog">
        {/*<Blooglist blogs= {blogs} title='All blogs'/>
         <Blooglist blogs= {blogs.filter((blog)=>blog.author=='maria')} title="Maria's blogs">*/}
         {error && <div>{error}</div>}
         {ispending && <div>loading...</div>}
        {blogs && <Blooglist blogs={blogs} title='All blogs' handledelete={handledelete}/> }
        
        <p>homepage</p>
    </div> );
}
 
export default Catch;