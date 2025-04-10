"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
  const [selectedCategory, setSelectedCategory] = useState<null | "burgers" | "sides" | "drinks">(null);

  const categories = [
    {
      label: "Burgers",
      key: "burgers",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3204&auto=format&fit=crop"
    },
    {
      label: "Sides",
      key: "sides",
      image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=2940&auto=format&fit=crop"
    },
    {
      label: "Drinks",
      key: "drinks",
      image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=2940&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {!selectedCategory ? (
          <>
            <motion.h1
              className="text-5xl font-bold text-center mb-12 text-gray-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Choose Your Craving 🍔🍟🥤
            </motion.h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {categories.map((cat) => (
                <motion.div
                  key={cat.key}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer rounded-3xl overflow-hidden shadow-xl group transition-all duration-300"
                  onClick={() => setSelectedCategory(cat.key as any)}
                >
                  <div className="relative h-72 w-full">
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <h2 className="text-4xl font-bold text-white">{cat.label}</h2>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-4xl font-bold text-primary capitalize">{selectedCategory}</h2>
              <Button variant="ghost" onClick={() => setSelectedCategory(null)}>
                ← Back to Categories
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {menuItems[selectedCategory].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-md overflow-hidden"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="relative h-64">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <span className="text-lg font-bold text-primary">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <Link href={orderLink} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-primary text-white hover:bg-primary/90">
                        Add to Order
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
