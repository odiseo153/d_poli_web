import Image from "next/image";
import { WhatsAppIcon } from "./navbar";

const products = [
  {
    name: "Jordan X",
    category: "Tenis",
    image: "/images/product-sneakers-1.jpg",
    tag: "Mas Vendido",
  },
  {
    name: "Shadow High-Top",
    category: "Tenis",
    image: "/images/product-sneakers-2.jpg",
    tag: "Nuevo",
  },
  {
    name: "Conjunto de poloche y gorras y tenis",
    category: "Camisetas",
    image: "/images/product-tshirt.png",
    tag: null,
  },
  {
    name: "Poloche Clasico",
    category: "Polos",
    image: "/images/product-polo.png", 
    tag: null,
  },
  {
    name: "Combo de bermuda,poloche y tenis",
    category: "Jeans",
    image: "/images/combo.png", 
    tag: "Popular",
  },
  {
    name: "Combo de gorras,poloche y tenis",
    category: "Combo",
    image: "/images/combo2.png",
    tag: null,
  },
  {
    name: "Gorras De Diferentes Estilos",
    category: "Gorras",
    image: "/images/gorra.png",
    tag: "Nuevo",
  },
];

export function FeaturedProducts() {
  return (
    <section id="products" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Nuestra Coleccion
            </p>
            <h2 className="font-serif text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
              Productos Destacados
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Lo mejor en moda urbana. Toca cualquier producto para preguntar
            precio y disponibilidad por WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* First item spans 2 cols on large screens */}
          <div className="group relative overflow-hidden bg-card sm:col-span-2 lg:row-span-2">
            <div className="relative aspect-square lg:aspect-auto lg:h-full">
              <Image
                src={products[0].image || "/placeholder.svg"}
                alt={products[0].name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              {products[0].tag && (
                <span className="absolute left-4 top-4 bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                  {products[0].tag}
                </span>
              )}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  {products[0].category}
                </p>
                <h3 className="mb-4 font-serif text-2xl font-bold uppercase text-foreground lg:text-3xl">
                  {products[0].name}
                </h3>
                <a
                  href="https://wa.me/18096278149"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Preguntar por WhatsApp
                </a>
              </div>
            </div>
          </div>

          {products.slice(1).map((product) => (
            <div
              key={product.name}
              className="group relative overflow-hidden bg-card"
            >
              <div className="relative aspect-square">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                {product.tag && (
                  <span className="absolute left-3 top-3 bg-primary px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                    {product.tag}
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="mb-0.5 text-xs font-semibold uppercase tracking-wider text-primary">
                    {product.category}
                  </p>
                  <h3 className="mb-3 font-serif text-lg font-bold uppercase text-foreground">
                    {product.name}
                  </h3>
                  <a
                    href="https://wa.me/18096278149"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                    Consultar Precio
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
