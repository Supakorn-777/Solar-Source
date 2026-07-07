import { useState } from "react";
import { Button } from "@/components/ui/button";


export default function Calculator(){

const [bill,setBill] = useState("");

const [result,setResult] = useState(null);



function calculate(){


const monthlyBill = Number(bill);


if(!monthlyBill) return;



// สมมติค่าไฟ 4.5 บาท/หน่วย
const usage = monthlyBill / 4.5;


// Solar 1 kW ผลิตประมาณ 120 หน่วย/เดือน
const systemSize = usage / 120;


// แผง AIKO 665W
const panels = Math.ceil(
(systemSize * 1000) / 665
);



setResult({

size: systemSize.toFixed(1),

panels,

saving: monthlyBill.toLocaleString()

});


}



return (

<section className="
py-24
bg-slate-50
">


<div className="
max-w-4xl
mx-auto
px-6
">


<h1 className="
text-5xl
font-bold
text-center
">

Solar Calculator

</h1>


<p className="
mt-4
text-center
text-gray-500
">

คำนวณระบบ Solar เบื้องต้นสำหรับบ้านและธุรกิจ

</p>




<div className="
mt-12
bg-white
rounded-3xl
shadow-lg
p-8
">


<label className="
font-bold
">

ค่าไฟต่อเดือน (บาท)

</label>


<input

type="number"

value={bill}

onChange={(e)=>
setBill(e.target.value)
}

placeholder="เช่น 5000"

className="
mt-3
w-full
rounded-xl
border
p-4
"

/>



<Button

onClick={calculate}

className="
mt-6
w-full
bg-orange-500
hover:bg-orange-600
"

>

คำนวณ

</Button>




{
result && (

<div className="
mt-10
rounded-2xl
bg-blue-50
p-6
">


<h2 className="
text-2xl
font-bold
">

ผลการประเมิน

</h2>


<div className="
mt-5
space-y-3
">


<p>
☀️ ขนาดระบบที่แนะนำ:
<b>
 {result.size} kW
</b>
</p>


<p>
🔋 จำนวนแผง AIKO 665W:
<b>
 {result.panels} แผง
</b>
</p>


<p>
💰 ประหยัดประมาณ:
<b>
 {result.saving} บาท/เดือน
</b>
</p>


</div>



<Button

className="
mt-6
bg-blue-600
"

>

ขอใบเสนอราคา

</Button>


</div>

)

}



</div>


</div>


</section>

)

}