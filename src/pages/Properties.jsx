import {useState} from "react";

import PropertyCard from "../components/PropertyCard";

import propertiesData from "../data/properties";

import PageHeader from "../components/PageHeader";


export default function Properties(){


const [type,setType]=useState("All");


const filteredProperties =

type==="All"

?

propertiesData

:

propertiesData.filter(
item=>item.type===type
);



return(

<>


<PageHeader

title="Find Your Perfect Property"

subtitle="Browse verified properties according to your needs"

/>



<section className="
section-padding
">


<div className="
container
grid
md:grid-cols-4
gap-10
">



{/* FILTER */}


<div className="
bg-gray-50
p-6
rounded-2xl
h-fit
">


<h3 className="
text-xl
font-bold
mb-5
">

Filters

</h3>



<label>

Property Type

</label>



<select

onChange={(e)=>
setType(e.target.value)
}

className="
w-full
border
rounded-lg
p-3
mt-2
"

>


<option>
All
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

<option>
Office
</option>


</select>


</div>





{/* GRID */}



<div className="
md:col-span-3
grid
sm:grid-cols-2
lg:grid-cols-3
gap-8
">


{

filteredProperties.map(property=>(


<PropertyCard

key={property.id}

property={property}

/>


))


}



</div>



</div>


</section>


</>


)

}