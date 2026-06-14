import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { Phone, Mail, MapPin } from "lucide-react";
import { sendEnquiry } from "../api/propertyApi";


export default function Contact() {


const [form,setForm] = useState({

name:"",
email:"",
phone:"",
message:""

});



const handleSubmit = async(e)=>{

e.preventDefault();


try{


await sendEnquiry(form);


alert("Message sent successfully");


setForm({

name:"",
email:"",
phone:"",
message:""

});


}

catch(error){


console.log(error);


alert("Something went wrong. Please try again.");


}


};





return(

<>


<PageHeader

title="Contact Us"

subtitle="Get in touch with our real estate experts"

/>





<section className="section-padding">


<div className="
container
grid
md:grid-cols-2
gap-12
">





{/* FORM */}



<div>


<h2 className="
text-3xl
font-bold
mb-6
">

Send Message

</h2>





<form onSubmit={handleSubmit}>



<input


placeholder="Full Name"


value={form.name}


onChange={(e)=>

setForm({

...form,

name:e.target.value

})

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


placeholder="Email"


type="email"


value={form.email}


onChange={(e)=>

setForm({

...form,

email:e.target.value

})

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


placeholder="Phone"


value={form.phone}


onChange={(e)=>

setForm({

...form,

phone:e.target.value

})

}


className="
border
w-full
p-4
rounded-xl
mb-4
"

/>







<textarea


placeholder="Your Message"


value={form.message}


onChange={(e)=>

setForm({

...form,

message:e.target.value

})

}


className="
border
w-full
p-4
rounded-xl
h-32
"

/>






<button


type="submit"


className="
bg-blue-600
text-white
px-8
py-3
rounded-xl
mt-5
hover:bg-blue-700
transition
"


>

Submit

</button>




</form>



</div>









{/* INFORMATION */}



<div>


<h2 className="
text-3xl
font-bold
mb-8
">

Contact Information

</h2>







<div className="
space-y-6
">





<div className="
flex
gap-4
items-center
">


<Phone

className="text-blue-600"

/>


<p>
+91 98765 43210
</p>


</div>







<div className="
flex
gap-4
items-center
">


<Mail

className="text-blue-600"

/>


<p>
info@estatepro.com
</p>


</div>







<div className="
flex
gap-4
items-center
">


<MapPin

className="text-blue-600"

/>


<p>
Punjab, India
</p>


</div>






</div>









<div className="
mt-10
rounded-2xl
overflow-hidden
">



<iframe


className="
w-full
h-72
"


src="
https://maps.google.com/maps?q=Punjab%20India&t=&z=13&ie=UTF8&iwloc=&output=embed
"


loading="lazy"


title="Google Map"


/>



</div>





</div>






</div>


</section>


</>


)

}