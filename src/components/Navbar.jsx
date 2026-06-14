import {Link} from "react-router-dom";
import {Menu} from "lucide-react";
import {useState} from "react";


export default function Navbar(){


const [open,setOpen]=useState(false);



return(

<header className="
fixed
top-0
left-0
w-full
bg-white
shadow-sm
z-50
">


<div className="
container
flex
items-center
justify-between
h-20
">


<Link 
to="/"
className="
text-3xl
font-bold
text-blue-600
">

Estate<span className="text-green-600">
Pro
</span>

</Link>



<nav className="
hidden
md:flex
items-center
gap-10
">


<Link 
className="hover:text-blue-600"
to="/">

Home

</Link>


<Link 
className="hover:text-blue-600"
to="/properties">

Properties

</Link>



<Link 
className="hover:text-blue-600"
to="/about">

About

</Link>


<Link 
className="hover:text-blue-600"
to="/contact">

Contact

</Link>

<Link

to="/admin/login"

className="
bg-blue-600
text-white
px-5
py-2
rounded-xl
hover:bg-blue-700
transition
"

>

Admin Login

</Link>


<button
className="
bg-blue-600
hover:bg-blue-700
text-white
px-6
py-3
rounded-xl
transition
">

Get Started

</button>


</nav>



<button

onClick={()=>setOpen(!open)}

className="
md:hidden
"

>

<Menu/>

</button>


</div>




{
open &&

<div className="
md:hidden
bg-white
border-t
px-6
py-6
space-y-5
">


<Link 
className="block"
to="/">

Home

</Link>


<Link 
className="block"
to="/properties">

Properties

</Link>



<Link 
className="block"
to="/about">

About

</Link>


<Link 
className="block"
to="/contact">

Contact

</Link>



</div>

}



</header>

)

}