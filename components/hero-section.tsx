import Image from "next/image";
import { MapPin, Truck } from "lucide-react";
import { WhatsAppIcon } from "./navbar";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16 lg:pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-sneakers.jpg"
          alt="Sneakers urbanos premium en D'POLI Boutique"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Moda Urbana 
          </p>

          <h1 className="font-serif text-4xl font-bold uppercase leading-none tracking-tight text-foreground md:text-7xl lg:text-6xl">
            <span className="block">{"Donde hay Calidad"}</span>
            <span className="block text-primary">{"no hay competencia"}</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground lg:text-xl">
            Ropa de marca y original para hombres que marcan
            tendencia.
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
            <Truck className="h-5 w-5" />
            <span>Hacemos envios a domicilio a todo el pais</span>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/18096278149"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Compra por WhatsApp
            </a>
            <a
              href="https://www.instagram.com/d_poli_boutique/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-foreground/30 bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:border-foreground hover:bg-foreground/5"
            >
              <InstagramIcon className="h-5 w-5" />
              Siguenos en Instagram
            </a>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Los Tres Brazos, Santo Domingo Norte, RD</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
