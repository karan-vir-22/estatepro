import {useState} from "react";
import {useSearchParams} from "react-router-dom";

import PropertyCard from "../components/PropertyCard";
import propertiesData from "../data/properties";
import PageHeader from "../components/PageHeader";


export default function Properties(){


const [searchParams] = useSearchParams();


const [type,setType]=useState("All");



const searchLocation =
searchParams.get("location") || "";


const searchType =
searchParams.get("type") || "";


const searchPrice =
searchParams.get("price") || "";





const filteredProperties = propertiesData.filter((item)=>{


// dropdown filter

const typeMatch =
type==="All" ||
item.type===type;



// search location filter

const locationMatch =
searchLocation==="" ||
item.location
.toLowerCase()
.includes(
searchLocation.toLowerCase()
);




// search type filter

const searchTypeMatch =
searchType==="" ||
item.type===searchType;




// price filter

let priceMatch=true;


if(searchPrice){


const price=Number(
item.price
.replace(/[^0-9]/g,"")
);



if(searchPrice.includes("+")){


const min =
Number(
searchPrice.replace("+","")
);


priceMatch =
price>=min;


}

else{


const [min,max]=
searchPrice.split("-");


priceMatch =
price>=Number(min)
&&
price<=Number(max);


}


}



return (

typeMatch &&
locationMatch &&
searchTypeMatch &&
priceMatch

);



});





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

value={type}

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


<option value="All">
All
</option>


<option value="Villa">
Villa
</option>


<option value="Apartment">
Apartment
</option>


<option value="House">
House
</option>


<option value="Office">
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

filteredProperties.length > 0 ?


filteredProperties.map(property=>(


<PropertyCard

key={property.id}

property={property}

/>


))


:

<p className="
text-gray-500
">

No properties found

</p>



}



</div>



</div>


</section>



</>


)

}