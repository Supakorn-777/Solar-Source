import {
  Phone,
  Mail,
  MapPin,
  MessageCircle
} from "lucide-react";


export default function Contact(){

return (

<section className="py-24 bg-white">


<div className="
max-w-6xl
mx-auto
px-6
">


<div className="text-center">


<h1 className="
text-5xl
font-bold
">

Contact Solar Source

</h1>


<p className="
mt-4
text-gray-500
text-lg
">

ติดต่อทีมงานเพื่อสอบถามราคาและข้อมูลสินค้า

</p>


</div>



<div className="
mt-14
grid
gap-8
md:grid-cols-2
">



<div className="
space-y-6
">


<div className="
flex
gap-4
items-center
">


<div className="
rounded-2xl
bg-blue-600
p-4
text-white
">

<Phone />

</div>


<div>

<h3 className="font-bold">
โทรศัพท์
</h3>

<p>
080-095-5681
</p>

</div>


</div>





<div className="
flex
gap-4
items-center
">


<div className="
rounded-2xl
bg-green-600
p-4
text-white
">

<MessageCircle />

</div>


<div>

<h3 className="font-bold">
LINE
</h3>

<p>
Solar Source
</p>

</div>


</div>





<div className="
flex
gap-4
items-center
">


<div className="
rounded-2xl
bg-orange-500
p-4
text-white
">

<Mail />

</div>


<div>

<h3 className="font-bold">
Email
</h3>

<p>
sales@solarsource.com
</p>

</div>


</div>





<div className="
flex
gap-4
items-center
">


<div className="
rounded-2xl
bg-gray-800
p-4
text-white
">

<MapPin />

</div>


<div>

<h3 className="font-bold">
Location
</h3>

<p>
Thailand
</p>

</div>


</div>



</div>




{/* Map Placeholder */}

<div className="
rounded-3xl
bg-slate-200
h-[400px]
flex
items-center
justify-center
">


<p className="text-gray-400">

Google Map

</p>


</div>



</div>


</div>


</section>

)

}