import { useState } from "react";
import products from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import ProductFilter from "@/components/product/ProductFilter";


export default function Products(){


const [active,setActive] = useState("All");


const filteredProducts =

active === "All"

?

products

:

products.filter(
(product)=>
product.category === active
);



return (

<section className="py-24 bg-slate-50">


<div className="
max-w-7xl
mx-auto
px-6
">


<h1 className="
text-5xl
font-bold
text-center
">

Solar Products

</h1>



<p className="
text-center
mt-4
text-gray-500
">

เลือกแผงโซลาร์เซลล์ที่เหมาะกับโครงการของคุณ

</p>



<div className="mt-10">

<ProductFilter

active={active}

setActive={setActive}

/>

</div>



<div className="
mt-14
grid
gap-8
md:grid-cols-3
">


{
filteredProducts.map(product=>(

<ProductCard

key={product.id}

product={product}

/>

))

}


</div>


</div>


</section>

)

}