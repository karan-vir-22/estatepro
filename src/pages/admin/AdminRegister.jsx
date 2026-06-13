import {useState} from "react";
import API from "../../api/axios";


export default function AdminRegister(){

const [username,setUsername]=useState("");
const [password,setPassword]=useState("");


const register=async()=>{

try{

const res=await API.post(
"/auth/register",
{
username,
password
}
);


console.log(res.data);


}
catch(error){

console.log(error.response.data);

}

}



return(

<div className="p-10">

<h1 className="text-3xl font-bold">
Create Admin
</h1>


<input

className="border p-3 block mt-5"

placeholder="username"

onChange={(e)=>setUsername(e.target.value)}

/>


<input

className="border p-3 block mt-5"

placeholder="password"

type="password"

onChange={(e)=>setPassword(e.target.value)}

/>


<button

className="bg-blue-600 text-white p-3 mt-5"

onClick={register}

>

Create Admin

</button>


</div>

)

}