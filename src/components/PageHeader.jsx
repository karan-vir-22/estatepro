export default function PageHeader({title,subtitle}){


return(

<section className="
bg-gray-50
py-24
text-center
">


<div className="container">


<h1 className="
text-5xl
font-bold
text-gray-900
">

{title}

</h1>


<p className="
mt-5
text-gray-500
text-lg
">

{subtitle}

</p>


</div>


</section>

)


}