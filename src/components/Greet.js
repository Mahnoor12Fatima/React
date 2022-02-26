import React from "react";
import {useState} from "react";
const Greet=()=>{
    const handleclick=(e)=>{
        console.log('hello,ninja',e.target);
    }
   
        const handleclickAgain=(name)=>{
            console.log('hello'+ name);
        
    }
    const handleclickmeAgain=(name,e)=>{
        console.log('hello'+ name,e.target);
    
}
//const name='Ali';
const[name ,setName]=useState('Ali');
const clickagain=()=>{
    setName('Ahmad');
    setAge(5);
}
const[age,setAge]=useState(3);

    return(
     <div className='greet'>
         <h2>Homepage</h2>
<button onClick={handleclick}>Click</button>
<button onClick={()=>{handleclickAgain('mario')}}>Click again</button>
<button onClick={(e)=>{handleclickmeAgain('mario',e)}}>Click me again</button>  
<p>{name}"is" {age}"year old"</p> 
<button onClick={clickagain} >click again</button>

     </div>   
    );
}
export default Greet;