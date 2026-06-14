import {useState} from "react";
import {useNavigate} from "react-router-dom";


export default function AdminLogin(){


const navigate = useNavigate();


const [username,setUsername] = useState("");

const [password,setPassword] = useState("");

const [error,setError] = useState("");




const handleLogin=(e)=>{


e.preventDefault();



if(
username === "admin" &&
password === "admin123"
)

{


localStorage.setItem(
"admin",
"true"
);



navigate("/admin/dashboard");


}

else{


setError(
"Invalid username or password"
);


}


};





return(

<div className="
min-h-screen
flex
items-center
justify-center
bg-gray-50
">


<div className="
bg-white
shadow-xl
rounded-3xl
p-10
w-full
max-w-md
">



<h1 className="
text-3xl
font-bold
text-center
mb-8
">

Admin Login

</h1>





{
error &&

<p className="
text-red-500
text-center
mb-4
">

{error}

</p>

}





<form
onSubmit={handleLogin}
>




<input


type="text"


placeholder="Username"


value={username}


onChange={(e)=>
setUsername(e.target.value)
}


className="
border
w-full
p-4
rounded-xl
mb-4
"

/>






<input


type="password"


placeholder="Password"


value={password}


onChange={(e)=>
setPassword(e.target.value)
}


className="
border
w-full
p-4
rounded-xl
mb-6
"

/>






<button


type="submit"


className="
bg-blue-600
text-white
w-full
py-4
rounded-xl
hover:bg-blue-700
transition
"

>

Login

</button>




</form>



<div className="
mt-6
text-center
text-sm
text-gray-500
">


<p>
Demo Login
</p>

<p>
Username: admin
</p>

<p>
Password: admin123
</p>


</div>




</div>


</div>


)

}