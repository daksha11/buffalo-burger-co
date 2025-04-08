import Image from 'next/image';
import { MapPin, Phone, Clock } from 'lucide-react';

const locations = [
  {
    name: "Downtown Buffalo",
    address: "123 Main Street, Buffalo, NY 14201",
    phone: "(555) 123-4567",
    hours: "Mon-Sun: 11:00 AM - 10:00 PM",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2940&auto=format&fit=crop"
  },
  {
    name: "Williamsville",
    address: "456 Transit Road, Williamsville, NY 14221",
    phone: "(555) 234-5678",
    hours: "Mon-Sun: 11:00 AM - 9:00 PM",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop"
  },
  {
    name: "Amherst",
    address: "789 Sheridan Drive, Amherst, NY 14226",
    phone: "(555) 345-6789",
    hours: "Mon-Sun: 11:00 AM - 9:30 PM",
    image: "https://images.unsplash.com/photo-1555992336-fb0d29498b13?q=80&w=2940&auto=format&fit=crop"
  }
];

export default function LocationsPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">Our Locations</h1>
        <p className="text-gray-600 text-center mb-12">
          Find your nearest Buffalo Burger Co. restaurant
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover-scale"
            >
              <div className="relative h-48">
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{location.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    <span>{location.address}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-5 w-5 mr-2 text-primary" />
                    <span>{location.phone}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    <span>{location.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}