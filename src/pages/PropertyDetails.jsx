import { useParams } from "react-router-dom";
import { MapPin, BedDouble, Bath, Ruler } from "lucide-react";

import properties from "../data/properties";


export default function PropertyDetails(){


const {id}=useParams();



const property = properties.find(
(item)=>item.id === Number(id)
);



if(!property){

return(

<div className="
container
py-32
text-center
">


<h1 className="
text-4xl
font-bold
">

Property Not Found

</h1>


</div>

)

}




return(


<section className="
section-padding
">


<div className="
container
">


{/* IMAGE GALLERY */}


<div className="
grid
md:grid-cols-2
gap-5
">


<img

src={property.image}

className="
rounded-3xl
h-[450px]
w-full
object-cover
"

/>


<div className="
grid
grid-cols-2
gap-4
">


<img

src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"

className="
rounded-xl
object-cover
"

/>



<img

src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"

className="
rounded-xl
object-cover
"

/>



</div>



</div>







{/* CONTENT */}


<div className="
grid
md:grid-cols-3
gap-10
mt-12
">



{/* LEFT */}



<div className="
md:col-span-2
">


<h1 className="
text-5xl
font-bold
">

{property.title}

</h1>



<div className="
flex
items-center
gap-2
text-gray-500
mt-5
">

<MapPin/>

{property.location}

</div>



<div className="
flex
gap-8
mt-8
">


<div>

<BedDouble
className="text-blue-600"
/>

<p>

{property.bedrooms}

Bedrooms

</p>


</div>




<div>

<Bath
className="text-blue-600"
/>

<p>

{property.bathrooms}

Bathrooms

</p>


</div>




<div>

<Ruler
className="text-blue-600"
/>

<p>

{property.size}

sq.ft

</p>


</div>



</div>





<h2 className="
text-3xl
font-bold
mt-10
">

Description

</h2>



<p className="
text-gray-600
leading-8
mt-4
">

This beautiful property offers modern
architecture, premium facilities and
a comfortable lifestyle.

Located in a prime location with
excellent connectivity.

</p>





<h2 className="
text-3xl
font-bold
mt-10
">

Amenities

</h2>



<div className="
grid
grid-cols-2
gap-4
mt-5
">


{

[
"Swimming Pool",
"Parking",
"Security",
"Garden",
"Gym",
"Power Backup"

].map((item,index)=>(


<div

key={index}

className="
bg-gray-50
p-4
rounded-xl
"

>

✓ {item}

</div>


))


}



</div>



</div>







{/* RIGHT CARD */}



<div className="
bg-white
shadow-xl
rounded-3xl
p-8
h-fit
border
">


<h2 className="
text-3xl
font-bold
text-blue-600
">

{property.price}

</h2>



<h3 className="
text-xl
font-semibold
mt-8
">

Schedule A Visit

</h3>




<input

placeholder="Your Name"

className="
border
w-full
p-3
rounded-lg
mt-5
"

/>



<input

placeholder="Phone Number"

className="
border
w-full
p-3
rounded-lg
mt-4
"

/>




<input

placeholder="Email"

className="
border
w-full
p-3
rounded-lg
mt-4
"

/>




<textarea

placeholder="Message"

className="
border
w-full
p-3
rounded-lg
mt-4
h-28
"

/>



<button

className="
bg-blue-600
text-white
w-full
py-3
rounded-xl
mt-5
hover:bg-blue-700
transition
"

>

Send Request

</button>



</div>




</div>



</div>


</section>


)

}