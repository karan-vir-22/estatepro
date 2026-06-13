import { Link } from "react-router-dom";
import { MapPin, BedDouble, Bath } from "lucide-react";


export default function PropertyCard({property}){


return(

<div
className="
bg-white
rounded-2xl
overflow-hidden
shadow-md
hover:shadow-xl
transition
duration-300
"
>


<img

src={property.image}

alt={property.title}

className="
w-full
h-64
object-cover
"

/>



<div className="
p-6
">


<h2 className="
text-xl
font-bold
text-gray-900
">

{property.title}

</h2>



<div className="
flex
items-center
gap-2
text-gray-500
mt-3
">

<MapPin size={18}/>

{property.location}

</div>




<div className="
flex
gap-6
mt-4
text-gray-600
">


<div className="
flex
items-center
gap-2
">

<BedDouble size={18}/>

{property.bedrooms}

</div>



<div className="
flex
items-center
gap-2
">

<Bath size={18}/>

{property.bathrooms}

</div>



</div>



<h3 className="
text-blue-600
font-bold
text-xl
mt-5
">

{property.price}

</h3>



<Link

to={`/property/${property.id}`}

className="
block
text-center
bg-blue-600
text-white
py-3
rounded-xl
mt-5
hover:bg-blue-700
transition
"

>

View Details

</Link>



</div>



</div>


)


}