import {
BrowserRouter,
Routes,
Route
}
from "react-router-dom";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminRegister from "./pages/admin/AdminRegister";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProperty from "./pages/admin/AddProperty";
import EditProperty from "./pages/admin/EditProperty";


function App(){


return(

<BrowserRouter>

<Navbar/>


<main className="pt-20">


<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/properties" element={<Properties/>}/>

<Route path="/property/:id" element={<PropertyDetails/>}/>

<Route path="/about" element={<About/>}/>

<Route path="/contact" element={<Contact/>}/>

<Route path="/admin/login" element={<AdminLogin/>}/>

<Route path="/admin/register" element={<AdminRegister/>}/>

<Route path="/admin/dashboard" element={<AdminDashboard/>}/>

<Route path="/admin/add-property" element={<AddProperty/>}/>

<Route path="/admin/edit-property/:id" element={<EditProperty/>}/>

</Routes>


</main>


<Footer/>


</BrowserRouter>


)

}
export default App;
