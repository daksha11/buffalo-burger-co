"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/buffalo_logo.png"
                alt="Buffalo Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-2xl font-bold text-primary">
                Buffalo Burger Co.
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/" className="text-gray-800 hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/menu" className="text-gray-800 hover:text-primary transition-colors">
                Menu
              </Link>
              <Link href="/gallery" className="text-gray-800 hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link href="/locations" className="text-gray-800 hover:text-primary transition-colors">
                Locations
              </Link>
              <a
                href="https://www.ezcater.com/catering/buffalo-burger-and-hotdog-co-3?fulfillmentDetailId=b23900d5-fc05-4ca9-ae8b-1e9110ff7e07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-primary text-white hover:bg-primary/90">
                  Order Now
                </Button>
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white slide-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-gray-800 hover:text-primary">
              Home
            </Link>
            <Link href="/menu" className="block px-3 py-2 text-gray-800 hover:text-primary">
              Menu
            </Link>
            <Link href="/gallery" className="block px-3 py-2 text-gray-800 hover:text-primary">
              Gallery
            </Link>
            <Link href="/locations" className="block px-3 py-2 text-gray-800 hover:text-primary">
              Locations
            </Link>
            <a
              href="https://www.ezcater.com/catering/buffalo-burger-and-hotdog-co-3?fulfillmentDetailId=b23900d5-fc05-4ca9-ae8b-1e9110ff7e07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-primary text-white hover:bg-primary/90">
                Order Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
