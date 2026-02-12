import { ShieldCheck, Zap, UserCheck, Clock, Store, Truck } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Productos Originales",
    description: "100% marcas autenticas. Sin replicas, sin imitaciones.",
  },
  {
    icon: Zap,
    title: "Ultimas Tendencias",
    description: "Lo mas nuevo en moda urbana y streetwear.",
  },
  {
    icon: UserCheck,
    title: "Atencion Personalizada",
    description: "Asesoramiento de estilo pensado para ti.",
  },
  {
    icon: Clock,
    title: "Respuesta Rapida",
    description: "Te respondemos al instante por WhatsApp.",
  },
  {
    icon: Truck,
    title: "Envios a Domicilio",
    description: "Recibe tu pedido en la puerta de tu casa a todo el pais.",
  },
  {
    icon: Store,
    title: "Tienda Fisica",
    description: "Ven a ver, probarte y sentir la calidad en persona.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              La Diferencia
            </p>
            <h2 className="font-serif text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
              {"Por Que D'POLI"}
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
              {"No solo vendemos ropa. Creamos un estilo de vida. Cada pieza en nuestra tienda es seleccionada para el hombre urbano moderno."}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="group flex gap-5 border-b border-border pb-6 last:border-b-0"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-card transition-colors group-hover:bg-primary/10">
                  <reason.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-serif text-lg font-bold uppercase text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
