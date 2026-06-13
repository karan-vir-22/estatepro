import PageHeader from "../components/PageHeader";
import {Phone,Mail,MapPin} from "lucide-react";


export default function Contact(){


return(

<>


<PageHeader

title="Contact Us"

subtitle="Get in touch with our real estate experts"

/>



<section className="
section-padding
">


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



<input

placeholder="Full Name"

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

className="
border
w-full
p-4
rounded-xl
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
mt-5
hover:bg-blue-700
"

>

Submit

</button>



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

/>


</div>


</div>


</div>


</section>


</>


)

}