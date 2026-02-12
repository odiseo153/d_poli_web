import Image from "next/image";

const galleryImages = [
  {
    src: "/images/store-interior-1.jpg",
    alt: "Interior de D'POLI Boutique con moda urbana",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/images/store-sneaker-wall.jpg",
    alt: "Mural de tenis en D'POLI Boutique",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/store-shelves.jpg",
    alt: "Estantes de ropa en D'POLI Boutique",
    className: "col-span-1 row-span-1",
  },
];

export function StoreGallery() {
  return (
    <section id="gallery" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Nuestro Espacio
          </p>
          <h2 className="font-serif text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
            La Boutique
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden ${image.className}`}
            >
              <div className="relative aspect-square h-full w-full">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/20 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
