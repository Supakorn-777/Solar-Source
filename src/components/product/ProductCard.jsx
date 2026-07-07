import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


export default function ProductCard({ product }) {

    return (

        <Card
            className="
      rounded-3xl
      overflow-hidden
      hover:shadow-xl
      transition
      "
        >

            <div className="
h-52
bg-slate-100
overflow-hidden
">

                <img
                    src={product.image}
                    alt={product.model}
                    className="
h-full
w-full
object-cover
"
                />

            </div>


            <CardContent className="p-6">


                <Badge>
                    {product.tag}
                </Badge>


                <h3 className="
          mt-4
          text-2xl
          font-bold
        ">
                    {product.brand}
                </h3>


                <p className="text-gray-500">
                    {product.model}
                </p>


                <div className="mt-5 space-y-2">


                    <p>
                        ⚡ Power:
                        <b> {product.power}</b>
                    </p>


                    <p>
                        📈 Efficiency:
                        <b> {product.efficiency}</b>
                    </p>


                    <p className="
            text-xl
            font-bold
            text-blue-600
          ">
                        {product.price}
                    </p>


                </div>


                <Link to={`/products/${product.id}`}>

                    <Button className="w-full">
                        ดูรายละเอียด
                    </Button>

                </Link>


            </CardContent>


        </Card>

    );
}