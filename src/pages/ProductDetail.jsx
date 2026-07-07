import { useParams } from "react-router-dom";
import products from "@/data/products";
import { Button } from "@/components/ui/button";


export default function ProductDetail() {

    const { id } = useParams();


    const product = products.find(
        (item) => item.id === id
    );


    if (!product) {

        return (

            <div className="p-10 text-center">

                <h1 className="text-3xl font-bold">
                    ไม่พบสินค้า
                </h1>

            </div>

        )

    }


    return (

        <section className="py-24">


            <div className="
max-w-7xl
mx-auto
px-6
grid
gap-12
md:grid-cols-2
">


                {/* Image */}

                <div className="
h-[450px]
rounded-3xl
bg-slate-200
flex
items-center
justify-center
">

                    <img
                        src={product.image}
                        alt={product.model}
                        className="
h-full
w-full
object-cover
rounded-3xl
"
                    />

                </div>



                {/* Detail */}

                <div>


                    <h1 className="
text-5xl
font-bold
">

                        {product.model}

                    </h1>


                    <p className="
mt-6
text-gray-500
text-lg
">

                        {product.description}

                    </p>



                    <div className="
mt-8
space-y-4
text-lg
">


                        <p>
                            ⚡ Power:
                            <b> {product.power}</b>
                        </p>


                        <p>
                            📈 Efficiency:
                            <b> {product.efficiency}</b>
                        </p>


                        <p>
                            💰 Price:
                            <b className="text-blue-600">
                                {product.price}
                            </b>
                        </p>


                        <p>
                            🛡 Warranty:
                            <b> {product.warranty}</b>
                        </p>


                    </div>



                    <div className="mt-10 flex gap-4">


                        <Button>
                            Download Datasheet
                        </Button>


                        <Button
                            className="
bg-orange-500
hover:bg-orange-600
"
                        >

                            ขอใบเสนอราคา

                        </Button>


                    </div>


                </div>


            </div>


        </section>

    )

}