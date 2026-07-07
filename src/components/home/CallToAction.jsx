import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";


export default function CallToAction(){

return (

<section className="
py-24
bg-blue-900
">


<div className="
mx-auto
max-w-5xl
px-6
text-center
text-white
">


<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.6
}}

>


<h2 className="
text-4xl
font-bold
md:text-5xl
">

พร้อมเริ่มโครงการ Solar แล้วหรือยัง?

</h2>


<p className="
mt-6
text-lg
text-white/80
">

Solar Source พร้อมจัดหาแผงโซลาร์เซลล์
สำหรับผู้ติดตั้งและโครงการทั่วประเทศ

</p>



<div className="
mt-10
flex
flex-wrap
justify-center
gap-4
">


<Button

size="lg"

className="
bg-orange-500
hover:bg-orange-600
"

>

<MessageCircle className="mr-2"/>

ขอใบเสนอราคา

</Button>



<Button

size="lg"

variant="outline"

className="
border-white
text-white
hover:bg-white
hover:text-blue-900
"

>

<Phone className="mr-2"/>

ติดต่อเรา

</Button>


</div>


</motion.div>


</div>


</section>

)

}