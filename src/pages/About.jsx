import PageHeader from "../components/PageHeader";
import { Award, Target, Users } from "lucide-react";


const team=[

{
name:"Rahul Sharma",
role:"Founder & CEO",
image:
"https://randomuser.me/api/portraits/men/32.jpg"
},

{
name:"Priya Singh",
role:"Property Consultant",
image:
"https://randomuser.me/api/portraits/women/44.jpg"
},

{
name:"Aman Verma",
role:"Sales Manager",
image:
"https://randomuser.me/api/portraits/men/65.jpg"
}

];



export default function About(){


return(

<>


<PageHeader

title="About EstatePro"

subtitle="Building trust and helping people find their perfect homes"

/>




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

Our Story

</h2>


<p className="
mt-6
text-gray-600
leading-8
">

EstatePro was created with a vision to
simplify the real estate experience.

We connect buyers, sellers and investors
through verified properties and transparent
services.

</p>


<p className="
mt-4
text-gray-600
leading-8
">

Our goal is to make property buying
secure, simple and stress-free.

</p>


</div>




<img

src="
https://images.unsplash.com/photo-1560518883-ce09059eeffa
"

className="
rounded-3xl
shadow-xl
"

/>


</div>

</section>







{/* MISSION */}



<section className="
bg-gray-50
section-padding
">


<div className="
container
grid
md:grid-cols-3
gap-8
">


<div className="
bg-white
p-8
rounded-2xl
shadow-sm
text-center
">


<Target

className="
mx-auto
text-blue-600
"

size={45}

/>


<h3 className="
text-xl
font-bold
mt-5
">

Our Mission

</h3>


<p className="
text-gray-600
mt-3
">

Providing trusted and transparent
real estate solutions.

</p>


</div>





<div className="
bg-white
p-8
rounded-2xl
shadow-sm
text-center
">


<Award

className="
mx-auto
text-blue-600
"

size={45}

/>


<h3 className="
text-xl
font-bold
mt-5
">

Our Values

</h3>


<p className="
text-gray-600
mt-3
">

Quality, honesty and customer satisfaction.

</p>


</div>





<div className="
bg-white
p-8
rounded-2xl
shadow-sm
text-center
">


<Users

className="
mx-auto
text-blue-600
"

size={45}

/>


<h3 className="
text-xl
font-bold
mt-5
">

Our Team

</h3>


<p className="
text-gray-600
mt-3
">

Experienced professionals helping you.

</p>


</div>



</div>


</section>








{/* TEAM */}



<section className="
section-padding
">


<div className="
container
">


<h2 className="
text-4xl
font-bold
text-center
mb-12
">

Meet Our Team

</h2>



<div className="
grid
md:grid-cols-3
gap-8
">


{

team.map((person,index)=>(


<div

key={index}

className="
bg-white
rounded-2xl
shadow-md
overflow-hidden
text-center
hover:-translate-y-2
transition
"


>


<img

src={person.image}

className="
w-full
h-72
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

{person.name}

</h3>


<p className="
text-gray-500
mt-2
">

{person.role}

</p>


</div>


</div>


))


}



</div>


</div>


</section>


</>


)

}