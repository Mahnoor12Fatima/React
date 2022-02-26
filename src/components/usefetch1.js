import { useState,useEffect } from "react";
import Blooglist from "./bloglist";
import Usefetch from "./usefetch2";
const Usefetch1=()=>{
const{data:blogs,ispending,error}=Usefetch(' http://localhost:8000/blogs');
return ( <div className="Fetch1">
{/*<Blooglist blogs= {blogs} title='All blogs'/>
 <Blooglist blogs= {blogs.filter((blog)=>blog.author=='maria')} title="Maria's blogs">*/}
 {error && <div>{error}</div>}
 {ispending && <div>loading...</div>}
{blogs && <Blooglist blogs={blogs} title='All blogs'/> }
</div> );
}
export default Usefetch1;