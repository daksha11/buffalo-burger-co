import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=3270&auto=format&fit=crop"
          alt="Delicious burger"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 fade-in">
            Welcome to Buffalo Burger Co.
          </h1>
          <p className="text-xl text-white mb-8 fade-in">
            Home of the finest burgers in town
          </p>
          <a
            href="https://www.ezcater.com/catering/buffalo-burger-and-hotdog-co-3?fulfillmentDetailId=b23900d5-fc05-4ca9-ae8b-1e9110ff7e07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 fade-in">
              Order Now
            </Button>
          </a>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Classic Buffalo",
                image:
                  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3204&auto=format&fit=crop",
                description: "Our signature burger with special sauce",
              },
              {
                name: "Cheese Lover",
                image:
                  "https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=2920&auto=format&fit=crop",
                description: "Triple cheese blend with caramelized onions",
              },
              {
                name: "Veggie Delight",
                image:
                  "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?q=80&w=3144&auto=format&fit=crop",
                description: "Plant-based patty with fresh vegetables",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover-scale">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Experience the Best Burger in Town?
          </h2>
          <Link href="/menu">
            <Button size="lg" variant="secondary" className="hover-scale">
              View Our Menu
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
