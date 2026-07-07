import { Button } from "@/components/ui/button";
import { Flame, PackageCheck, BadgePercent } from "lucide-react";


const promotions = [

  {
    brand:"AIKO",
    model:"AIKO 665W Dual Glass",
    oldPrice:"5.20 บาท/W",
    price:"4.75 บาท/W",
    detail:"ราคาพิเศษสำหรับยกพาเลท",
  },


  {
    brand:"LONGi",
    model:"LONGi Hi-MO 6 650W",
    oldPrice:"4.90 บาท/W",
    price:"4.65 บาท/W",
    detail:"ราคาพิเศษสำหรับโครงการ",
  },


  {
    brand:"Trina Solar",
    model:"Trina Vertex 720W",
    oldPrice:"5.10 บาท/W",
    price:"4.90 บาท/W",
    detail:"โปรโมชั่นสินค้าพร้อมส่ง",
  },

];



export default function Promotions(){


return (

<section className="py-24 bg-slate-50">


<div className="
max-w-7xl
mx-auto
px-6
">


<div className="text-center">


<div className="
flex
justify-center
">

<Flame
className="text-orange-500"
size={48}
/>

</div>


<h1 className="
mt-4
text-5xl
font-bold
">

โปรโมชั่น Solar Source

</h1>


<p className="
mt-4
text-gray-500
">

ราคาพิเศษสำหรับผู้ติดตั้งและโครงการ

</p>


</div>




<div className="
mt-14
grid
gap-8
md:grid-cols-3
">


{
promotions.map((item)=>(


<div

key={item.model}

className="
rounded-3xl
bg-white
p-8
shadow-lg
border
"


>


<div className="
flex
items-center
gap-2
text-orange-500
font-bold
">

<BadgePercent/>

SPECIAL

</div>



<h2 className="
mt-5
text-2xl
font-bold
">

{item.brand}

</h2>


<p className="text-gray-500">

{item.model}

</p>



<div className="mt-6">


<p className="
line-through
text-gray-400
">

{item.oldPrice}

</p>



<p className="
text-4xl
font-bold
text-blue-600
">

{item.price}

</p>


</div>



<p className="
mt-4
text-gray-500
">

{item.detail}

</p>




<Button

className="
mt-6
w-full
bg-orange-500
hover:bg-orange-600
"

>

<PackageCheck className="mr-2"/>

ขอราคา

</Button>



</div>


))

}


</div>


</div>


</section>

)

}