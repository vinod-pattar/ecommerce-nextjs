"use client";
import { Hero } from "@/components/common/animated-hero";
import { Categories } from "@/components/common/categories";
import { Category } from "@/components/common/category";
import Image from "next/image";
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const featuredProducts = [
  { name: "Product 1", price: 1999, image: "https://picsum.photos/400/400" },
  { name: "Product 2", price: 2999, image: "https://picsum.photos/400/400" },
  { name: "Product 3", price: 1499, image: "https://picsum.photos/400/400" },
  { name: "Product 4", price: 3999, image: "https://picsum.photos/400/400" },
  { name: "Product 5", price: 2499, image: "https://picsum.photos/400/400" },
  { name: "Product 6", price: 1799, image: "https://picsum.photos/400/400" },
]

export default function Home() {
  return (
    <div className="w-full">
      <Hero />

      <section className="mb-16 py-16 back bg-gradient-to-r from-gray-100 to-gray-300">
        <h2 className="text-4xl font-semibold mb-12 text-center">Shop by Category</h2>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Category
              name="Men's Fashion"
              src="https://picsum.photos/400/400"
              description={`Men's Fashions category description`}
              link="/products/mens-fashion"
            />
            <Category
              name="Women's Fashion"
              src={"https://picsum.photos/400/400"}
              description={`Women's Fashions category description`}
              link="/products/womens-fashion"
            />
            <Category
              name="Kids Fashion"
              src={"https://picsum.photos/400/400"}
              description={`Kids Fashions category description`}
              link="/products/kids-fashion"
            />
            <Category
              name="Electronics"
              src={"https://picsum.photos/400/400"}
              description={`Electronics category description`}
              link="/products/electronics"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto mb-16 py-16">
        <h2 className="text-4xl font-semibold mb-6 text-center">Featured Products</h2>
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {featuredProducts.map((product, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <Image src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" width={400}  height={400}/>
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-primary">₹{product.price.toLocaleString('en-IN')}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" onClick={() => console.log('Add to cart:', product.name)}>
                        Add to Cart
                      </Button>
                      <Button onClick={() => console.log('Buy now:', product.name)}>
                        Buy Now
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>



      <section className="mx-auto px-4 py-16 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#00a388] via-[#79bd8f] to-[#beeb9f]">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2">Email: support@v0ecommerce.com</p>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p className="mb-4">Address: 123 eCommerce St, Web City, 12345</p>
          <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
          <p className="mb-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p>Saturday - Sunday: Closed</p>
        </div>
      </div>
    </section>
    </div>
  );
}
