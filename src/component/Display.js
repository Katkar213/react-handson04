import {BrowserRouter,Routes,Route,Link} from  "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import Student from "./Student"
function Display(){

return(
    <>
    
<BrowserRouter>
<nav>
<Link id="link" to="/">Home</Link>
<Link id="link" to="/Student">Student</Link>
<Link id="link" to="/Contact">Contact Us</Link></nav>


<Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Student" element={<Student/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
</Routes>

</BrowserRouter>

    </>
)


}
export  default Display
