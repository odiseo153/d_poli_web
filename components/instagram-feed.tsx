import Image from "next/image";
import { Instagram } from "lucide-react";

const instagramPosts = [
  "/images/new-arrival-1.jpg",
  "/images/product-sneakers-1.jpg",
  "/images/store-interior-1.jpg",
  "/images/new-arrival-2.jpg",
  "/images/product-tshirt.jpg",
  "/images/new-arrival-3.jpg",
];

export function InstagramFeed() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Siguenos
          </p>
          <h2 className="font-serif text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
            @d_poli_boutique
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Mira nuestros ultimos looks, outfits y nuevas llegadas en Instagram.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {instagramPosts.map((src, index) => (
            <a
              key={`${src}-${index}`}
              href="https://www.instagram.com/d_poli_boutique/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden"
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Publicacion de Instagram de D'POLI Boutique ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-primary/60 opacity-0 transition-opacity group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-primary-foreground" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.instagram.com/d_poli_boutique/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-foreground/30 px-8 py-3 text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:border-foreground hover:bg-foreground/5"
          >
            <Instagram className="h-5 w-5" />
            Seguir en Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
