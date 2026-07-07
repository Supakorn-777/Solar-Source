import { motion } from "framer-motion";
import {
  BadgeCheck,
  Truck,
  FileText,
  Factory,
  ShieldCheck,
  Headphones,
} from "lucide-react";


const features = [
  {
    icon: Factory,
    title: "ราคาส่งจากแหล่งสินค้า",
    description:
      "เข้าถึงราคาแข่งขันสำหรับผู้ติดตั้งและโครงการ",
  },

  {
    icon: BadgeCheck,
    title: "สินค้าของแท้",
    description:
      "จำหน่ายแผงจากแบรนด์ชั้นนำระดับโลก",
  },

  {
    icon: Truck,
    title: "พร้อมส่ง",
    description:
      "มีสินค้าและระบบจัดส่งทั่วประเทศ",
  },

  {
    icon: FileText,
    title: "Datasheet ครบ",
    description:
      "มีข้อมูลสินค้าและเอกสารประกอบ",
  },

  {
    icon: ShieldCheck,
    title: "มาตรฐานระดับโลก",
    description:
      "คัดเลือกเฉพาะแบรนด์ Tier 1",
  },

  {
    icon: Headphones,
    title: "บริการให้คำปรึกษา",
    description:
      "ช่วยเลือกสินค้าให้เหมาะกับโครงการ",
  },
];


export default function WhyChooseUs(){


return (

<section className="py-24 bg-white">


<div className="
max-w-7xl
mx-auto
px-6
">


<div className="text-center">


<h2 className="
text-4xl
font-bold
md:text-5xl
">
Why Solar Source
</h2>


<p className="
mt-4
text-gray-500
">
Partner สำหรับธุรกิจ Solar อย่างมืออาชีพ
</p>


</div>



<div className="
mt-14
grid
gap-8
sm:grid-cols-2
lg:grid-cols-3
">


{
features.map((item,index)=>{


const Icon = item.icon;


return (

<motion.div

key={item.title}

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.1
}}

className="
rounded-3xl
bg-slate-50
p-8
hover:shadow-lg
transition
"


>


<div className="
mb-5
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-blue-600
text-white
">

<Icon size={28}/>

</div>


<h3 className="
text-xl
font-bold
">

{item.title}

</h3>


<p className="
mt-3
text-gray-500
">

{item.description}

</p>


</motion.div>


)


})

}


</div>


</div>


</section>

)

}