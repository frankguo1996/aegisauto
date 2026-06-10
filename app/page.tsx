import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Pricing", href: "#pricing" },
  { name: "Gallery", href: "#gallery" },
  { name: "Quote", href: "#quote" },
];

const services = [
  {
    title: "Paint Protection Film",
    desc: "Protect high-impact areas from rock chips, road debris, scratches, and Calgary winter conditions.",
  },
  {
    title: "Pre-Cut PPF Kits",
    desc: "Precision-cut film kits for DIY users or individual installers, ready for installation.",
  },
  {
    title: "Ceramic Coating",
    desc: "Add gloss, easier washing, and long-term paint protection for your vehicle.",
  },
];

const pricing = [
  {
    name: "Base Package",
    price: "From $899",
    desc: "Essential front-end protection for daily driving.",
    items: ["Partial hood", "Partial fenders", "Front bumper", "Mirror caps"],
  },
  {
    name: "Pro Package",
    price: "From $1,399",
    badge: "Best Seller",
    desc: "More complete front-end protection for high-impact areas.",
    items: [
      "Full hood",
      "Full fenders",
      "Front bumper",
      "Mirror caps",
      "A-pillars",
      "Partial roof",
    ],
  },
  {
    name: "Max Package",
    price: "Get a Quote",
    desc: "Complete vehicle coverage for maximum paint protection.",
    items: [
      "Complete exterior coverage",
      "Custom install",
      "Best for high-end vehicles",
    ],
  },
];

const products = [
  {
    title: "Gloss PPF",
    image: "/images/Clear.png",
    desc: "Clear protection film with factory-style gloss finish.",
  },
  {
    title: "Matte PPF",
    image: "/images/Matte.png",
    desc: "Transforms gloss paint into a satin/matte finish while adding protection.",
  },
  {
    title: "Colored PPF",
    image: "/images/Colored.png",
    desc: "Paint protection and color change in one solution.",
  },
];


const cases = [
  {
    title: "BMW i4 Full Front Protected",
    vehicle: "2026 BMW i4M50",
    service: "Pro Package",
    image: "/images/i4.jpeg",
    desc: "Protected with Terminax UltraNax Nano",
  },
  {
    title: "BMW Z4 Full Car",
    vehicle: "2026 BMW Z4M40i",
    service: "Max Package",
    image: "/images/Z4.jpeg",
    desc: "Protected with Xpel Fusion Plus",
  },
  {
    title: "BMW X5M Matte Transformation",
    vehicle: "2026 BMW X5M",
    service: "Matte Max Package",
    image: "/images/X5M.jpeg",
    desc: "GSWF DEFENDER Matte Protection PPF",
  },
  {
    title: "VW Atlas Custom PPF Installation",
    vehicle: "2026 Volkswagen Atlas Exceline",
    service: "Custom Rocker Panel + Front bumper PPF",
    image: "/images/Atlas.jpeg",
    desc: "Terminax UltraNax Nano custom cut",
  },
  {
    title: "Phantom Red PPF Cybertruck",
    vehicle: "2024 Tesla Cybertruck",
    service: "Colored Max Package",
    image: "/images/Cybertruck.jpeg",
    desc: "Terminax Chroma-X Black Phantom Red protect the Cybertruck",
    link: "/cybertruck-ppf",
  },
];


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-red-600/20 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 p-1 shadow-lg">
              <Image
                src="/images/logo.png"
                alt="Aegis Auto Film"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            <div>
              <p className="text-lg font-bold tracking-tight">
                Aegis Auto Film
              </p>

              <div className="mt-1 h-[2px] w-16 rounded-full bg-red-600" />
            </div>
          </a>

          <nav className="hidden gap-8 text-sm text-neutral-300 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition hover:text-red-500"
              >
                {item.name}
              </a>
            ))}
          </nav>

    <a
      href="tel:4038150249"
      className="rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
    >
      Call
    </a>

  </div>
</header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">

        <div className="absolute inset-0">
          <Image
            src="/images/M3T.jpg"
            alt="Background"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/25" />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">

          <p className="mb-4 uppercase tracking-[0.4em] text-red-500">
            Aegis Auto Film
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Protect What
            <span className="text-red-500"> Drives You</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            Premium Paint Protection Film, Ceramic Coating for Calgary Drivers
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href="tel:4038150249"
              className="rounded-full bg-red-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-red-700"
            >
              Call Now
            </a>

            <a
              href="#quote"
              className="rounded-full border border-white/20 px-6 py-3 text-center font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Get A Quote
            </a>

          </div>

        </div>

      </section>

      {/* About */}
      <section className="border-t border-red-600/20 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-4 h-1 w-16 rounded-full bg-red-600" />

            <h2 className="text-4xl font-bold">
              PPF Service Built Around Convenience
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-400">
              Aegis Auto Film provides mobile installation and 
              pick-up & delivery service for 
              Calgary vehicle owners, enthusiasts.
            </p>

            <p className="mt-4 text-lg leading-8 text-neutral-400">
              Instead of requiring every customer to visit a shop, we focus on
              flexible service, clean installation standards, and practical
              protection packages designed for real driving conditions in Alberta.
            </p>
            <p className="mt-4 text-lg leading-8 text-neutral-400">
              Maybe you are a individual installer, or DIY enthusiasts, 
              contact us now for pre-cut PPF
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-neutral-900 p-8">
            <h3 className="text-2xl font-semibold">Why Aegis Auto Film</h3>

            <ul className="mt-6 space-y-4 text-neutral-400">
              <li>✓ Paint protection film for daily drivers and high-end vehicles</li>
              <li>✓ Pre-cut PPF kits for DIY users and installers</li>
              <li>✓ Custom installation for specific inquiry</li>
              <li>✓ Practical packages based on real-world driving needs</li>
              <li>✓ Mobile service in Calgary and surrounding areas</li>
            </ul>
          </div>
        </div>
      </section>

              
      {/* Services */}
      <section id="services" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Services
          </p>
          <>
            <div className="mb-4 h-1 w-16 rounded-full bg-red-600" />

            <h2 className="text-4xl font-bold">
              What We Offer
            </h2>
          </>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-sm leading-6 text-neutral-400">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Products
          </p>
          <>
            <div className="mb-4 h-1 w-16 rounded-full bg-red-600" />

            <h2 className="text-4xl font-bold">
              Film Options
            </h2>
          </>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.title}
                className="
                    group
                    rounded-3xl
                    border
                    border-white/10
                    bg-neutral-900
                    p-6
                    transition
                    hover:border-red-600
                    hover:bg-neutral-800
                    "
              >
                <div className="relative mb-6 h-48 overflow-hidden rounded-2xl">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-semibold">{product.title}</h3>
                <p className="mt-4 text-neutral-400">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Pricing
          </p>

          <div className="mb-4 h-1 w-16 rounded-full bg-red-600" />

          <h2 className="text-4xl font-bold">PPF Packages</h2>

          <p className="mt-4 max-w-3xl text-neutral-400">
            Choose from essential front-end protection, extended high-impact coverage,
            or full vehicle protection. Final pricing may vary depending on vehicle
            size, film type, and installation requirements.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricing.map((plan, index) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-3xl p-6 transition ${
                  index === 1
                    ? "border-2 border-red-600 bg-red-600/5 shadow-lg shadow-red-600/10"
                    : "border border-white/10 bg-neutral-900 hover:border-red-600"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>

                  {plan.badge && (
                    <span className="shrink-0 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <p className="mt-4 text-3xl font-bold">{plan.price}</p>

                <p className="mt-3 text-sm leading-6 text-neutral-400">
                  {plan.desc}
                </p>

                <ul className="mt-6 space-y-3 text-sm text-neutral-400">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-red-500">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {plan.name === "Max Package" && (
                  <a
                    href="#quote"
                    className="mt-8 rounded-full bg-red-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-700"
                  >
                    Request Custom Quote
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
        <section id="gallery" className="border-t border-white/10 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-500">
              Gallery
            </p>

            <div className="mb-4 h-1 w-16 rounded-full bg-red-600" />

            <h2 className="text-4xl font-bold">Recent Work</h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {cases.map((item) => (
                <Link
                href={item.link || "#gallery"}
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 transition hover:border-red-600"
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-[center_65%] transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{item.title}</h3>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-red-600/20 px-3 py-1 text-xs text-red-400">
                        {item.vehicle}
                      </span>

                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-neutral-300">
                        {item.service}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-neutral-400">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>


      {/* Quote Form */}
      <section id="quote" className="border-t border-red-600/20 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 h-1 w-16 rounded-full bg-red-600" />

          <h2 className="text-4xl font-bold">
            Request Quote For Your Vehicle
          </h2>

          <p className="mt-4 text-neutral-400">
            Tell us what vehicle you have and what service you are interested in.
            We will get back to you with the next steps.
          </p>

          <form
            action="https://formspree.io/f/xpqelanr"
            method="POST"
            className="mt-10 grid gap-5"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="rounded-2xl border border-white/10 bg-neutral-900 px-5 py-4 text-white outline-none focus:border-red-600"
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                required
                className="rounded-2xl border border-white/10 bg-neutral-900 px-5 py-4 text-white outline-none focus:border-red-600"
              />
            </div>

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="rounded-2xl border border-white/10 bg-neutral-900 px-5 py-4 text-white outline-none focus:border-red-600"
            />
              <input
              name="vehicle"
              type="text"
              placeholder="Vehicle Year / Make / Model"
              required
              className="rounded-2xl border border-white/10 bg-neutral-900 px-5 py-4 text-white outline-none focus:border-red-600"
            />

            <select
              name="service"
              className="rounded-2xl border border-white/10 bg-neutral-900 px-5 py-4 text-white outline-none focus:border-red-600"
            >
              <option>Paint Protection Film</option>
              <option>Pre-Cut PPF Kits</option>
              <option>Ceramic Coating</option>
              <option>Not Sure Yet</option>
            </select>

            <textarea
              name="message"
              placeholder="Tell us what you are looking for..."
              rows={5}
              className="rounded-2xl border border-white/10 bg-neutral-900 px-5 py-4 text-white outline-none focus:border-red-600"
            />

            <button
              type="submit"
              className="rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700"
            >
              Submit Quote Request
            </button>
          </form>
        </div>
      </section>


      {/* Footer */}
<footer className="border-t border-red-600/20 bg-zinc-950 px-6 py-14">
  <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-start">
    <div>
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 p-1">
          <Image
            src="/images/logo.png"
            alt="Aegis Auto Film logo"
            width={44}
            height={44}
            className="object-contain"
          />
        </div>

        <div>
          <p className="text-lg font-bold">Aegis Auto Film</p>
          <div className="mt-1 h-[2px] w-16 rounded-full bg-red-600" />
        </div>
      </div>

      <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-400">
        Mobile paint protection film, ceramic coating, and pre-cut PPF kit
        service in Calgary and surrounding areas.
      </p>
    </div>

    <div className="md:justify-self-end">
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
        Contact
      </h3>

      <div className="mt-5 flex flex-col gap-4 text-sm text-neutral-400">
        {/* Phone */}
        <a
          href="tel:4038150249"
          aria-label="Call Aegis Auto Film"
          className="group flex items-center gap-3 transition hover:text-red-500"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-neutral-900 text-neutral-300 transition group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.61a2 2 0 0 1-.45 2.11L8 9.69a16 16 0 0 0 6.31 6.31l1.25-1.25a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.61.59A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>

          <span>403-815-0249</span>
        </a>

        {/* Email */}
        <a
          href="mailto:sales@aegisautofilm.com"
          aria-label="Email Aegis Auto Film"
          className="group flex items-center gap-3 transition hover:text-red-500"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-neutral-900 text-neutral-300 transition group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-10 6L2 7" />
            </svg>
          </span>

          <span>sales@aegisautofilm.com</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/aegisautofilm/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Aegis Auto Film on Instagram"
          className="group flex items-center gap-3 transition hover:text-red-500"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-neutral-900 text-neutral-300 transition group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <path d="M17.5 6.5h.01" />
            </svg>
          </span>

          <span>Aegis Auto Film</span>
        </a>
      </div>
    </div>
  </div>

  <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
    <p>© 2026 Aegis Auto Film LTD. All rights reserved.</p>

    <p>Calgary, Alberta • PPF Service</p>
  </div>
</footer>
    </main>
  );
}