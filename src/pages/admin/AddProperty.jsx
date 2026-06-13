import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {addProperty} from "../../api/propertyApi";


export default function AddProperty(){


const navigate=useNavigate();



const [form,setForm]=useState({

title:"",
location:"",
price:"",
type:"",
size:"",
bedrooms:"",
bathrooms:"",
images:"",
description:""

});




const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

});

};





const submitHandler=async(e)=>{


e.preventDefault();



try{


await addProperty({

...form,

images:[
form.images
],

size:Number(form.size),

bedrooms:Number(form.bedrooms),

bathrooms:Number(form.bathrooms),

amenities:[
"Parking",
"Security",
"Garden"
]


});



alert("Property Added");


navigate("/admin/dashboard");


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
max-w-3xl
">


<div className="
bg-white
rounded-3xl
shadow
p-8
">


<h1 className="
text-3xl
font-bold
mb-8
">

Add New Property

</h1>



<form
onSubmit={submitHandler}
className="
space-y-4
"
>



<input
name="title"
placeholder="Property Title"
onChange={handleChange}
className="input"
/>



<input
name="location"
placeholder="Location"
onChange={handleChange}
className="input"
/>



<input
name="price"
placeholder="Price"
onChange={handleChange}
className="input"
/>



<input
name="type"
placeholder="Property Type"
onChange={handleChange}
className="input"
/>



<input
name="size"
placeholder="Size (sq ft)"
onChange={handleChange}
className="input"
/>



<input
name="bedrooms"
placeholder="Bedrooms"
onChange={handleChange}
className="input"
/>



<input
name="bathrooms"
placeholder="Bathrooms"
onChange={handleChange}
className="input"
/>



<input
name="images"
placeholder="Image URL"
onChange={handleChange}
className="input"
/>



<textarea

name="description"

placeholder="Description"

onChange={handleChange}

className="
input
h-32
"

/>




<button

className="
bg-blue-600
text-white
px-8
py-3
rounded-xl
"

>

Add Property

</button>



</form>


</div>


</div>


</div>


)

}