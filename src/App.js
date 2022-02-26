import './App.css';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Greet from './components/Greet';
import Catch from './components/catchblock';
import Home from './components/home';
import Blog from './components/blog';
import Usefetch1 from './components/usefetch1';
import Obj from './components/obj';
import Basic from './components/basics';
import Hello from './components/hello';
import Navbar from './navbar';
import Blooglist from './components/bloglist';
import Navbar1 from './components/navbar1';
import Blogdetail from './components/blogdetail';
import Create from './components/create';
function Appl() {
  
   return( 
    <Router>
     
   <div className="App">
     
     <Navbar1/>
     <div className="content">
       <Switch>
      {/* <Route  path="/">*/}
         <Route exact path="/">
         <Usefetch1/>
         </Route>
         <Route path="/hello">
         <Hello/>
         </Route>
         <Route path="/blogs/:id">
         <Blogdetail/>
         </Route>
       </Switch>
    </div>
    </div>
    <Create/>
    </Router>
    );
  }


export default Appl;
