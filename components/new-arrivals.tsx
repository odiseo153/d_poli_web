import Image from "next/image";

const arrivals = [
  {
    title: "Coleccion Street Fit",
    image: "/images/new-arrival-1.jpg",
    label: "Recien Llegado",
  },
  {
    title: "Tenis Premium",
    image: "/images/new-arrival-2.jpg",
    label: "Tendencia",
  },
  {
    title: "Esenciales Casual",
    image: "/images/new-arrival-3.jpg",
    label: "Nuevo",
  },
  {
    title: "Completa Tu Look",
    image: "/images/new-arrival-4.jpg",
    label: "Seleccion",
  },
];

export function NewArrivals() {
  return (
    <section id="new-arrivals" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Lo Ultimo
          </p>
          <h2 className="font-serif text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
            Nuevas Llegadas
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {arrivals.map((item) => (
            <a
              key={item.title}
              href="https://wa.me/18096278149"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent transition-opacity group-hover:opacity-80" />
              <span className="absolute left-4 top-4 bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                {item.label}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-serif text-xl font-bold uppercase text-foreground lg:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-wider text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  {"Comprar Ahora →"}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
