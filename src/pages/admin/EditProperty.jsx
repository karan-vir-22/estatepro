import {useEffect,useState} from "react";
import {useParams,useNavigate} from "react-router-dom";

import {
getProperty,
updateProperty
}
from "../../api/propertyApi";



export default function EditProperty(){


const {id}=useParams();

const navigate=useNavigate();


const [form,setForm]=useState({});



useEffect(()=>{


const loadProperty=async()=>{


const res=
await getProperty(id);


setForm(res.data);


};


loadProperty();


},[id]);





const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};





const submitHandler=async(e)=>{


e.preventDefault();


await updateProperty(
id,
form
);


alert("Updated");


navigate("/admin/dashboard");


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
p-8
rounded-3xl
shadow
">


<h1 className="
text-3xl
font-bold
mb-8
">

Edit Property

</h1>



<form
onSubmit={submitHandler}
className="space-y-4"
>


<input

name="title"

value={form.title || ""}

onChange={handleChange}

className="input"

/>


<input

name="location"

value={form.location || ""}

onChange={handleChange}

className="input"

/>


<input

name="price"

value={form.price || ""}

onChange={handleChange}

className="input"

/>


<input

name="type"

value={form.type || ""}

onChange={handleChange}

className="input"

/>


<textarea

name="description"

value={form.description || ""}

onChange={handleChange}

className="input h-32"

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

Update Property

</button>


</form>


</div>


</div>


</div>

)

}