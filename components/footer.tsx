import { ShoppingBag, Instagram } from "lucide-react";
import { WhatsAppIcon } from "./navbar";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg font-bold uppercase tracking-wider text-foreground">
              {"D'POLI Boutique"}
            </span>
          </div>

          <p className="text-sm text-muted-foreground">
            Los Tres Brazos, Santo Domingo Norte, RD
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/18096278149"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/d_poli_boutique/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            {"© 2026 D'POLI Boutique. Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  );
}
