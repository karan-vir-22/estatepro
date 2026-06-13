import { motion } from "framer-motion";
import { Search, Home as HomeIcon, ShieldCheck, Users } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";


const properties = [

{
image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
title:"Luxury Modern Villa",
location:"Goa, India",
price:"₹85 Lakhs"
},

{
image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
title:"Premium Apartment",
location:"Delhi, India",
price:"₹55 Lakhs"
},

{
image:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
title:"Smart Family Home",
location:"Punjab, India",
price:"₹75 Lakhs"
}

];



export default function Home(){


return(

<div>


{/* HERO SECTION */}

<section
className="
relative
h-[90vh]
bg-cover
bg-center
flex
items-center
"
style={{

backgroundImage:
"url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')"

}}
>


<div className="
absolute
inset-0
bg-black/50
">


</div>



<div className="
container
relative
text-white
">


<motion.h1

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

transition={{duration:0.8}}

className="
text-5xl
md:text-7xl
font-bold
max-w-3xl
leading-tight
"

>

Find Your Dream Home
With Confidence

</motion.h1>



<p className="
mt-6
text-lg
text-gray-200
max-w-xl
">

Discover premium properties
with trusted real estate experts.

</p>



{/* SEARCH BOX */}

<div className="
mt-10
bg-white
rounded-2xl
p-5
grid
md:grid-cols-4
gap-4
text-black
shadow-xl
">


<input

className="
border
rounded-lg
px-4
py-3
outline-none
"

placeholder="Location"

/>


<select
className="
border
rounded-lg
px-4
py-3
">

<option>
Property Type
</option>

<option>
Villa
</option>

<option>
Apartment
</option>

<option>
House
</option>


</select>




<select

className="
border
rounded-lg
px-4
py-3
"

>

<option>
Price Range
</option>

<option>
Below ₹50 Lakhs
</option>

<option>
₹50L - ₹1Cr
</option>

<option>
Above ₹1Cr
</option>

</select>




<button

className="
bg-blue-600
text-white
rounded-lg
flex
items-center
justify-center
gap-2
hover:bg-blue-700
transition
"

>

<Search size={20}/>

Search

</button>



</div>


</div>


</section>






{/* STATS */}


<section className="
section-padding
">


<div className="
container
grid
md:grid-cols-3
gap-8
">


<div className="
bg-gray-50
p-8
rounded-2xl
text-center
">

<HomeIcon
className="
mx-auto
text-blue-600
"
size={40}
/>


<h2 className="
text-3xl
font-bold
mt-4
">

500+

</h2>


<p>
Properties Listed
</p>


</div>





<div className="
bg-gray-50
p-8
rounded-2xl
text-center
">


<Users
className="mx-auto text-blue-600"
size={40}
/>


<h2 className="
text-3xl
font-bold
mt-4
">

1000+

</h2>


<p>
Happy Customers
</p>


</div>





<div className="
bg-gray-50
p-8
rounded-2xl
text-center
">


<ShieldCheck
className="mx-auto text-blue-600"
size={40}
/>


<h2 className="
text-3xl
font-bold
mt-4
">

100%

</h2>


<p>
Verified Properties
</p>


</div>



</div>


</section>







{/* FEATURED PROPERTIES */}



<section className="
section-padding
bg-gray-50
">


<div className="container">


<h2 className="
text-4xl
font-bold
text-center
">

Featured Properties

</h2>


<p className="
text-center
text-gray-500
mt-3
mb-10
">

Explore our premium collection

</p>




<Swiper

modules={[Autoplay]}

autoplay={{
delay:3000
}}

spaceBetween={30}

slidesPerView={1}

breakpoints={{

768:{
slidesPerView:2
},

1024:{
slidesPerView:3
}

}}

>



{

properties.map((property,index)=>(


<SwiperSlide key={index}>


<div className="
bg-white
rounded-2xl
overflow-hidden
shadow-lg
">


<img

src={property.image}

className="
h-64
w-full
object-cover
"

/>


<div className="
p-6
">


<h3 className="
text-xl
font-bold
">

{property.title}

</h3>


<p className="
text-gray-500
mt-2
">

📍 {property.location}

</p>


<p className="
text-blue-600
font-bold
mt-3
">

{property.price}

</p>


<button
className="
mt-5
bg-blue-600
text-white
px-5
py-2
rounded-lg
"
>

View Details

</button>


</div>


</div>


</SwiperSlide>


))

}


</Swiper>


</div>


</section>








{/* WHY CHOOSE US */}



<section className="
section-padding
">


<div className="
container
grid
md:grid-cols-2
gap-12
items-center
">


<div>


<h2 className="
text-4xl
font-bold
">

Why Choose EstatePro?

</h2>


<p className="
mt-5
text-gray-600
leading-7
">

We provide verified properties,
transparent pricing and professional
real estate guidance.

</p>


<ul className="
mt-6
space-y-4
">


<li>
✓ Verified Listings
</li>

<li>
✓ Expert Consultation
</li>

<li>
✓ Secure Transactions
</li>


</ul>


</div>




<img

src="
https://images.unsplash.com/photo-1600607688969-a5bfcd646154
"

className="
rounded-3xl
shadow-xl
"

/>



</div>


</section>



</div>

)

}