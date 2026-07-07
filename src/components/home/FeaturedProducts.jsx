import products from "@/data/products";
import ProductCard from "../product/ProductCard";


export default function FeaturedProducts(){


return (

<section className="py-24 bg-slate-50">


<div className="
mx-auto
max-w-7xl
px-6
">


<div className="text-center">

<h2 className="
text-4xl
font-bold
">
Featured Products
</h2>


<p className="
mt-4
text-gray-500
">
แผงโซลาร์เซลล์คุณภาพสูง พร้อมราคาพิเศษ
</p>

</div>



<div className="
mt-14
grid
gap-8
md:grid-cols-3
">


{
products.map(product=>(

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