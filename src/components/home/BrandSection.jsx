import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";


const brands = [
  {
    name: "AIKO",
    description:
      "High Efficiency Solar Technology",
  },

  {
    name: "LONGi",
    description:
      "World Leading Solar Manufacturer",
  },

  {
    name: "Trina Solar",
    description:
      "Reliable Solar Energy Solution",
  },
];


export default function BrandSection() {


  return (

    <section className="py-24 bg-white">


      <div className="
        mx-auto
        max-w-7xl
        px-6
      ">


        <div className="text-center">


          <h2 className="
            text-4xl
            font-bold
            md:text-5xl
          ">
            Trusted Brands
          </h2>


          <p className="
            mt-4
            text-gray-500
            text-lg
          ">
            เราคัดสรรแผงโซลาร์เซลล์จากผู้ผลิตระดับโลก
          </p>


        </div>



        <div className="
          mt-14
          grid
          gap-8
          md:grid-cols-3
        ">


          {brands.map((brand,index)=>(


            <motion.div

              key={brand.name}

              initial={{
                opacity:0,
                y:30
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                delay:index * 0.2
              }}

            >


              <Card
                className="
                rounded-3xl
                border-none
                shadow-lg
                hover:shadow-xl
                transition
                "
              >


                <CardContent
                  className="
                  p-10
                  text-center
                  "
                >


                  <h3 className="
                    text-3xl
                    font-bold
                    text-blue-600
                  ">
                    {brand.name}
                  </h3>


                  <p className="
                    mt-4
                    text-gray-500
                  ">
                    {brand.description}
                  </p>


                </CardContent>


              </Card>


            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );
}