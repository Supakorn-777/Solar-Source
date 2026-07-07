import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/images/solar-hero.jpg";


export default function Hero() {

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="Solar Energy"
        className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
        "
      />


      {/* Overlay */}
      <div
        className="
        absolute
        inset-0
        bg-black/50
        "
      />


      <div
        className="
        relative
        z-10
        mx-auto
        flex
        min-h-screen
        max-w-7xl
        items-center
        px-6
        "
      >

        <div className="max-w-3xl text-white">


          <motion.h1
            initial={{
              opacity:0,
              y:40
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:0.8
            }}

            className="
            text-5xl
            font-extrabold
            leading-tight
            md:text-7xl
            "
          >
            Powering
            <br/>
            Thailand's Solar Future
          </motion.h1>


          <motion.p
            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            transition={{
              delay:0.3
            }}

            className="
            mt-6
            text-xl
            text-white/80
            "
          >
            Solar Source
            <br/>
            แหล่งรวมแผงโซลาร์เซลล์คุณภาพสูง
            จากแบรนด์ชั้นนำระดับโลก
          </motion.p>



          <div className="mt-10 flex flex-wrap gap-4">


            <Button
              size="lg"
              className="
              bg-orange-500
              hover:bg-orange-600
              "
            >
              ดูสินค้า
              <ArrowRight/>
            </Button>


            <Button
              size="lg"
              variant="outline"
              className="
              border-white
              text-white
              hover:bg-white
              hover:text-black
              "
            >
              ขอใบเสนอราคา
            </Button>


          </div>


        </div>

      </div>


    </section>
  );
}