import Image from 'next/image';

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=2940&auto=format&fit=crop",
    caption: "Our signature Classic Buffalo Burger, perfectly grilled and stacked high"
  },
  {
    image: "https://images.unsplash.com/photo-1610614819513-58e34989848b?q=80&w=2940&auto=format&fit=crop",
    caption: "Fresh ingredients prepped daily for the perfect burger experience"
  },
  {
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=2940&auto=format&fit=crop",
    caption: "Crispy golden fries seasoned with our special Buffalo spice blend"
  },
  {
    image: "https://images.unsplash.com/photo-1600891964092-4359a2119b93?q=80&w=2940&auto=format&fit=crop",
    caption: "Our cozy dining area perfect for family gatherings"
  },
  {
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2940&auto=format&fit=crop",
    caption: "Handcrafted milkshakes made with premium ice cream"
  },
  {
    image: "https://images.unsplash.com/photo-1561758033-7e924f619b47?q=80&w=2940&auto=format&fit=crop",
    caption: "Our expert chefs preparing your perfect burger"
  }
];

export default function GalleryPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">Gallery</h1>
        <p className="text-gray-600 text-center mb-12">
          Take a peek at our delicious burgers and vibrant atmosphere
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover-scale"
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-center">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}