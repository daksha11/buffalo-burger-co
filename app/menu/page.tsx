import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const menuItems = {
  burgers: [
    {
      name: "Classic Buffalo",
      description: "Our signature burger with lettuce, tomato, pickles, onions, and our special Buffalo sauce",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3204&auto=format&fit=crop"
    },
    {
      name: "Cheese Lover",
      description: "Triple cheese blend (cheddar, mozzarella, swiss) with caramelized onions and garlic aioli",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=2920&auto=format&fit=crop"
    },
    {
      name: "Spicy Buffalo",
      description: "Jalapeños, pepper jack cheese, spicy mayo, and our signature hot sauce",
      price: 13.99,
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2944&auto=format&fit=crop"
    },
    {
      name: "Veggie Delight",
      description: "Plant-based patty with fresh vegetables, avocado, and vegan cheese",
      price: 13.99,
      image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?q=80&w=3144&auto=format&fit=crop"
    }
  ],
  sides: [
    {
      name: "Buffalo Fries",
      description: "Crispy fries seasoned with our special Buffalo spice blend",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=2940&auto=format&fit=crop"
    },
    {
      name: "Onion Rings",
      description: "Thick-cut onion rings with a crispy golden coating",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=2940&auto=format&fit=crop"
    }
  ],
  drinks: [
    {
      name: "Classic Milkshake",
      description: "Rich and creamy milkshake in vanilla, chocolate, or strawberry",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=2940&auto=format&fit=crop"
    },
    {
      name: "Craft Sodas",
      description: "Selection of premium craft sodas",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=2940&auto=format&fit=crop"
    }
  ]
};

const orderLink = "https://www.ezcater.com/catering/buffalo-burger-and-hotdog-co-3?fulfillmentDetailId=b23900d5-fc05-4ca9-ae8b-1e9110ff7e07";

export default function MenuPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">Our Menu</h1>

        {/*Burgers*/}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary">Burgers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems.burgers.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover-scale">
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-lg font-bold text-primary">${item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Link href={orderLink} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-primary text-white hover:bg-primary/90">
                      Add to Order
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sides */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary">Sides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems.sides.map((item, index) => (
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
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-lg font-bold text-primary">${item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Link href={orderLink} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-primary text-white hover:bg-primary/90">
                      Add to Order
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Drinks */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-primary">Drinks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems.drinks.map((item, index) => (
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
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-lg font-bold text-primary">${item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Link href={orderLink} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-primary text-white hover:bg-primary/90">
                      Add to Order
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}


{/*
import React from "react";

const MenuPage: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Menu</h1>

        <div className="flex flex-col md:flex-row gap-12 text-sm md:text-base">
          
        //Classic Burgers
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Classic Burgers</h2>
            <ul className="space-y-2">
              <li><b>Broadway Burger</b> - $7.99</li>
              <li><b>Bailey Burger</b> - $10.99</li>
              <li><b>Niagara Burger</b> - $10.99</li>
              <li><b>Shumway Burger</b> - $10.99</li>
              <li><b>Hickory Burger</b> - $10.99</li>
              <li><b>Spring Burger (V)</b> - $14.99</li>
              <li><b>Shoreline Burger</b> - $13.99</li>
              <li><b>Grider Grilled Chicken Sandwich</b> - $9.99</li>
              <li><b>Elmwood Turkey Burger</b> - $9.99</li>
            </ul>
          </div>

          //Chopped Burgers, Wings, Desserts
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Chopped Burgers</h2>
            <ul className="space-y-2">
              <li><b>Broadway Chopped Burger</b> - $7.99</li>
              <li><b>Liberty St Chopped Burger</b> - $10.99</li>
              <li><b>Shoreline Chopped Burger</b> - $10.99</li>
              <li><b>Spring Chopped Burger</b> - $15.99</li>
              <li><b>Add Vegan Cheese</b> - $1.50</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-red-700">Wings & Tenders</h2>
            <ul className="space-y-2">
              <li><b>Buffalo Wings (6)</b> - $9.99</li>
              <li><b>Buffalo Wings (10)</b> - $14.99</li>
              <li><b>Chicken Tenders</b> - $9.99</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-red-700">Desserts</h2>
            <ul className="space-y-2">
              <li><b>Deep Fried Oreos (6)</b> - $6.00</li>
              <li><b>Deep Fried Oreos (12)</b> - $8.00</li>
            </ul>
          </div>

          // Hot Dogs, Sides, Drinks, Beers
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Hot Dogs</h2>
            <ul className="space-y-2">
              <li><b>Broadway Dog</b> - $5.99</li>
              <li><b>Sobieski Dog</b> - $6.99</li>
              <li><b>Fillmore Dog</b> - $6.99</li>
              <li><b>Michigan Ave Dog</b> - $7.50</li>
              <li><b>Walden Dog</b> - $6.99</li>
              <li><b>Best Street Dog</b> - $6.50</li>
              <li><b>Delvan Dog</b> - $8.49</li>
              <li><b>Main Street Footlong Dog</b> - $9.99</li>
              <li><b>Cornwall Dog</b> - $7.49</li>
              <li><b>Genesee Jerk Chicken Dog</b> - $8.99</li>
              <li><b>Hertel Ave Dog</b> - $8.49</li>
              <li><b>Utica Dog</b> - $8.49</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-red-700">Canal Sides</h2>
            <ul className="space-y-2">
              <li><b>French Fries</b> - $4.49 (Basket $6.49)</li>
              <li><b>Sweet Potato Fries</b> - $4.49 (Basket $6.49)</li>
              <li><b>Loaded Fries</b> - $10.49</li>
              <li><b>Beer Battered Onion Rings</b> - $6.99</li>
              <li><b>Town Garden Salad</b> - $9.99</li>
              <li><b>Baked Beans</b> - $3.99</li>
              <li><b>Cole Slaw</b> - $3.99</li>
              <li><b>Assorted Chips</b> - $2.49</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-red-700">Drinks</h2>
            <ul className="space-y-2">
              <li><b>Fountain Drinks</b> - $3.49</li>
              <li><b>Canned Drinks</b> - $2.50</li>
              <li><b>Bottled Water</b> - $3.00</li>
              <li><b>Specialty Lemonade</b> - $3.99</li>
              <li><b>Milkshakes</b> - $6.49</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-red-700">Beers</h2>
            <p>
              $5.00 — Budweiser, Bud Light, Corona, Blue Moon, Angry Orchard, Heineken, Stella Artois
            </p>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-sm text-center text-gray-500">
          <p>Upgrade to onion rings or sweet potato fries for $1.00</p>
          <p>Make any burger or dog a combo with fries and drink for $4.00</p>
          <p className="mt-2 font-semibold">Toppings & Condiments Available</p>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
*/}