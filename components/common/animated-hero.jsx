import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["Affordable", "Popular", "Bestselling", "Vibrant", "Eye-catching"], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    (<div className="w-full">
      <div className="container mx-auto">
        <div
          className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Link href={`/about`}>
            <Button variant="secondary" size="sm" className="gap-4">
              Know more about us <MoveRight className="w-4 h-4" />
            </Button>
            </Link>
          </div>
          <div className="flex gap-4 flex-col">
            <h1
              className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">Our products are</span>
              <span
                className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }>
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Discover top-quality products at unbeatable prices. Shop smart, fast, and hassle-free with our curated collection tailored for your needs. Simplify your shopping experience today!
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4" variant="outline">
              Brows our prodcuts <ArrowDown className="w-4 h-4" />
            </Button>
            <Link href={`/sign-up`}>
            <Button size="lg" className="gap-4">
              Sign up here <MoveRight className="w-4 h-4" />
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>)
  );
}

export { Hero };
