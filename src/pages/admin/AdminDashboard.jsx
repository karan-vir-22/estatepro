import { useEffect, useState } from "react";
import { getProperties, deleteProperty } from "../../api/propertyApi";
import { Link } from "react-router-dom";



export default function AdminDashboard(){


const [properties,setProperties]=useState([]);



const fetchProperties=async()=>{

try{

const res=await getProperties();

setProperties(res.data);

}

catch(error){

console.log(error);

}

};



useEffect(()=>{

fetchProperties();

},[]);





const handleDelete=async(id)=>{


const confirmDelete =
window.confirm(
"Delete this property?"
);


if(!confirmDelete)
return;



try{


await deleteProperty(id);


fetchProperties();


}

catch(error){

console.log(error);

}


};




return(


<div className="
min-h-screen
bg-gray-50
py-10
">


<div className="
container
">


<h1 className="
text-4xl
font-bold
mb-8
">

Admin Dashboard

</h1>




<div className="
bg-white
rounded-2xl
shadow
p-6
mb-10
">


<h2 className="
text-2xl
font-bold
">

Total Properties

</h2>


<p className="
text-5xl
text-blue-600
font-bold
mt-3
">

{properties.length}

</p>


</div>






<div className="
bg-white
rounded-2xl
shadow
p-6
">


<div className="
flex
justify-between
items-center
mb-6
">


<h2 className="
text-2xl
font-bold
">

Manage Properties

</h2>



<Link

to="/admin/add-property"

className="
bg-blue-600
text-white
px-5
py-3
rounded-xl
"

>

Add Property

</Link>


</div>






<div className="
overflow-x-auto
">


<table className="
w-full
">


<thead>

<tr className="
border-b
">


<th className="p-3 text-left">
Title
</th>


<th className="p-3">
Location
</th>


<th className="p-3">
Price
</th>


<th className="p-3">
Action
</th>


</tr>

</thead>



<tbody>


{

properties.map((property)=>(


<tr

key={property._id}

className="
border-b
"


>


<td className="p-3">

{property.title}

</td>


<td className="p-3">

{property.location}

</td>



<td className="p-3">

{property.price}

</td>



<td className="p-3">

<Link

to={`/admin/edit-property/${property._id}`}

className="
bg-green-600
text-white
px-4
py-2
rounded-lg
mr-2
"

>

Edit

</Link>
<button

onClick={()=>handleDelete(property._id)}

className="
bg-red-500
text-white
px-4
py-2
rounded-lg
"

>

Delete

</button>


</td>



</tr>


))


}


</tbody>


</table>


</div>



</div>


</div>


</div>


)

}
