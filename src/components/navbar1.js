import { Link } from "react-router-dom";

const Navbar1=()=>{
return (
<nav className="navbar">
<h1>The Dojo Blogs</h1>
<div className="links">
   {/* <a href="/">Home</a>*/}
   <Link to="/">Home</Link>
    {/*<a href="/create">New Blog</a>*/}
    <Link to="/hello">New Blog</Link>
</div>
</nav>
);
}
export default Navbar1;

