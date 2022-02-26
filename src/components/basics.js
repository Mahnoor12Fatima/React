import React from "react";

const Basic=()=>{
       const title="welcome to the new blog";
        const like="5";
        //const person={name:"mahnoor",age:20};
        const site="http://www.google.com";
         return( <div className="App">
           
           
           
      
           
          <h1>App component</h1>
          <p>App component</p>
          <p>{title}</p>
          <p>Like={like}times</p>
          {/*<p>{person}</p>*/}
          <p>Like={7}times</p>
          <p>Like={"ten"}times</p>
          <p>{[1,2,3,4,5]}</p>
          <p>{Math.random()*10}</p>
          <a href="http://www.google.com">google site</a>
          <p><a href={site}>google site</a></p>
         
          </div>
         );   
}
export default Basic;