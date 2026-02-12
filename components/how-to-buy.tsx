import {
  MousePointerClick,
  MessageCircle,
  CheckCircle,
  Truck,
} from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    step: "01",
    title: "Elige Tu Estilo",
    description:
      "Explora nuestra coleccion y escoge las piezas que te gusten.",
  },
  {
    icon: MessageCircle,
    step: "02",
    title: "Escribenos al WhatsApp",
    description:
      "Envianos un mensaje con el producto que deseas comprar.",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Confirmamos Disponibilidad",
    description:
      "Te confirmamos talla, precio y disponibilidad al instante.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Recogelo o Te Lo Enviamos",
    description:
      "Visitanos en tienda o te lo enviamos a domicilio a cualquier parte del pais.",
  },
];

export function HowToBuy() {
  return (
    <section id="how-to-buy" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Proceso Simple
          </p>
          <h2 className="font-serif text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
            Como Comprar
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <div key={item.step} className="group relative text-center">
              {index < steps.length - 1 && (
                <div
                  className="absolute right-0 top-10 hidden h-px w-full bg-border lg:block"
                  style={{ left: "50%" }}
                />
              )}
              <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center border border-border bg-card transition-colors group-hover:border-primary group-hover:bg-primary/10">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <span className="mb-2 block font-serif text-3xl font-bold text-border">
                {item.step}
              </span>
              <h3 className="mb-2 font-serif text-lg font-bold uppercase tracking-wide text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
