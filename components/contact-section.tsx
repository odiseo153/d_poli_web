import { MapPin, Clock, Instagram, Truck } from "lucide-react";
import { WhatsAppIcon } from "./navbar";

export function ContactSection() {
  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Contactanos
          </p>
          <h2 className="font-serif text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
            {"Contacto y Ubicacion"}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* WhatsApp CTA */}
          <div className="flex flex-col items-center bg-primary p-8 text-center lg:p-10">
            <WhatsAppIcon className="mb-4 h-12 w-12 text-primary-foreground" />
            <h3 className="mb-2 font-serif text-2xl font-bold uppercase text-primary-foreground">
              WhatsApp
            </h3>
            <p className="mb-2 text-lg font-bold text-primary-foreground">
              809-627-8149
            </p>
            <p className="mb-6 text-sm leading-relaxed text-primary-foreground/80">
              La forma mas rapida de contactarnos. Pregunta por productos,
              precios y disponibilidad al instante.
            </p>
            <a
              href="https://wa.me/18096278149"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-background px-8 py-3 text-sm font-bold uppercase tracking-wider text-foreground transition-transform hover:scale-105"
            >
              Escribenos Ahora
            </a>
          </div>

          {/* Store Location */}
          <div className="flex flex-col items-center border border-border bg-card p-8 text-center lg:p-10">
            <MapPin className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 font-serif text-2xl font-bold uppercase text-foreground">
              Visitanos
            </h3>
            <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
              {"D'POLI Boutique"}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Los Tres Brazos
              <br />
              Santo Domingo Norte, RD
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" />
              <span>Lun - Sab: 10am - 8pm</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" />
              <span>Dom: 12pm - 6pm</span>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
              <Truck className="h-4 w-4" />
              <span>Envios a domicilio</span>
            </div>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center border border-border bg-card p-8 text-center lg:p-10">
            <Instagram className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 font-serif text-2xl font-bold uppercase text-foreground">
              Instagram
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Siguenos para ver las ultimas llegadas, inspiracion de outfits y
              ofertas exclusivas.
            </p>
            <a
              href="https://www.instagram.com/d_poli_boutique/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-foreground/30 px-8 py-3 text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:border-foreground hover:bg-foreground/5"
            >
              @d_poli_boutique
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
