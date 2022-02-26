import { useState,useEffect } from "react";
const Usefetch2=(url)=>{
    const [data,setData]=useState(null);
    const [ispending,setIspending]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        const abortCont = new AbortController();
        setTimeout(()=>{
       fetch(url,{signal:abortCont.signal})
       .then(res=>{
        //   console.log(res);
           if(!res.ok){
    throw Error('could not fetch the data');
          }
           return res.json();
       })
       .then(data=>{
           setData(data);
           setIspending(false);
    setError(null);
       })
       .catch(err=>{
           if(err.name=="AbortError")
           {
               console.log("fetch absorted")
           }
    //console.log(err.message);
    else{
    setError(err.message);
    setIspending(false);
    }
       }
    
       )
    },1000)
    },[url])
    return{data,ispending,error};
}
export default Usefetch2;