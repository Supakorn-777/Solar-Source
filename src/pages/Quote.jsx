import { Button } from "@/components/ui/button";


export default function Quote(){

return (

<section className="py-24 bg-slate-50">


<div className="
max-w-3xl
mx-auto
px-6
">


<h1 className="
text-5xl
font-bold
text-center
">

ขอใบเสนอราคา

</h1>


<p className="
mt-4
text-center
text-gray-500
">

รับราคาพิเศษสำหรับผู้ติดตั้งและโครงการ

</p>



<form className="
mt-12
space-y-6
bg-white
p-8
rounded-3xl
shadow-lg
">


<input

placeholder="ชื่อบริษัท"

className="
w-full
rounded-xl
border
p-4
"

/>


<input

placeholder="ชื่อผู้ติดต่อ"

className="
w-full
rounded-xl
border
p-4
"

/>


<input

placeholder="เบอร์โทรศัพท์"

className="
w-full
rounded-xl
border
p-4
"

/>


<input

placeholder="LINE ID"

className="
w-full
rounded-xl
border
p-4
"

/>


<select

className="
w-full
rounded-xl
border
p-4
"

>

<option>
เลือกแบรนด์สินค้า
</option>

<option>
AIKO
</option>

<option>
LONGi
</option>

<option>
Trina Solar
</option>


</select>



<textarea

placeholder="รายละเอียดเพิ่มเติม"

className="
w-full
rounded-xl
border
p-4
h-32
"

/>



<Button

className="
w-full
bg-orange-500
hover:bg-orange-600
"

>

ส่งคำขอใบเสนอราคา

</Button>



</form>


</div>


</section>

)

}