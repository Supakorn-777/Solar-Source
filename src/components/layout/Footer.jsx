import {
  Sun,
  Phone,
  Mail,
  MessageCircle
} from "lucide-react";


export default function Footer(){

return (

<footer className="
bg-slate-900
text-white
">


<div className="
max-w-7xl
mx-auto
px-6
py-16
grid
gap-10
md:grid-cols-3
">



{/* Brand */}

<div>


<div className="
flex
items-center
gap-2
">

<Sun className="text-orange-500"/>


<h2 className="
text-2xl
font-bold
">

Solar Source

</h2>


</div>


<p className="
mt-5
text-white/60
">

แหล่งรวมแผงโซลาร์เซลล์
คุณภาพสูงจากแบรนด์ระดับโลก

</p>


</div>





{/* Products */}

<div>


<h3 className="
text-xl
font-bold
">

Products

</h3>


<ul className="
mt-5
space-y-3
text-white/60
">

<li>AIKO</li>
<li>LONGi</li>
<li>Trina Solar</li>

</ul>


</div>





{/* Contact */}

<div>


<h3 className="
text-xl
font-bold
">

Contact

</h3>


<div className="
mt-5
space-y-4
text-white/60
">


<p className="flex gap-3">
<Phone size={20}/>
080-095-5681
</p>


<p className="flex gap-3">
<MessageCircle size={20}/>
LINE: Solar Source
</p>


<p className="flex gap-3">
<Mail size={20}/>
sales@solarsource.com
</p>


</div>


</div>


</div>




<div className="
border-t
border-white/10
py-6
text-center
text-white/50
">


© 2026 Solar Source. All rights reserved.


</div>


</footer>

)

}