import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cybertruck PPF Calgary | Aegis Auto Film",
  description:
    "Mobile Tesla Cybertruck paint protection film service in Calgary. Protect stainless steel panels from road debris, scratches, winter grime, and daily driving damage.",
};

const coverageOptions = [
  {
    title: "High-Impact Protection",
    desc: "Ideal for front-end impact zones, lower panels, and high-contact areas exposed to road debris.",
  },
  {
    title: "Full Body PPF",
    desc: "A complete protection solution for owners who want maximum coverage across the Cybertruck exterior.",
  },
  {
    title: "Custom Cut Solutions",
    desc: "Designed for owners who need specific panel protection or customized coverage based on usage.",
  },
];

const reasons = [
  "Large flat panels are more exposed to road debris and surface scratches.",
  "Calgary roads, gravel, snow, and winter grime can quickly mark high-contact areas.",
  "PPF helps reduce maintenance stress and makes the vehicle easier to clean.",
  "Custom coverage can protect the areas that matter most for your driving style.",
];

export default function CybertruckPPFPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-red-600/20 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 p-1 shadow-lg">
              <Image
                src="/images/logo.png"
                alt="Aegis Auto Film logo"
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
          </Link>

          <nav className="hidden gap-8 text-sm text-neutral-300 md:flex">
            <Link href="/" className="transition hover:text-red-500">
              Home
            </Link>
            <a href="#coverage" className="transition hover:text-red-500">
              Coverage
            </a>
            <a href="#quote" className="transition hover:text-red-500">
              Quote
            </a>
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
            src="/images/Cybertruck.jpeg"
            alt="Tesla Cybertruck PPF installation in Calgary"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-20">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-red-500">
            Cybertruck PPF Calgary
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Tesla Cybertruck
            <span className="text-red-500"> Paint Protection Film</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            Mobile Cybertruck PPF service in Calgary for owners who want
            practical protection against road debris, scratches, winter grime,
            and daily driving wear.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#quote"
              className="rounded-full bg-red-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-red-700"
            >
              Request Cybertruck Quote
            </a>

            <a
              href="tel:4038150249"
              className="rounded-full border border-white/20 px-6 py-3 text-center font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Why Cybertruck Needs PPF */}
      <section className="border-t border-red-600/20 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-4 h-1 w-16 rounded-full bg-red-600" />

            <h2 className="text-4xl font-bold">
              Why Cybertruck Owners Choose PPF
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-400">
              The Cybertruck has a bold exterior, large visible panels, and a
              unique presence on the road. Paint protection film helps reduce
              the risk of visible wear from gravel, debris, road salt, and daily
              use around Calgary.
            </p>

            <p className="mt-4 text-lg leading-8 text-neutral-400">
              Whether you want selected high-impact areas protected or full body
              coverage, Aegis Auto Film can help plan a practical package around
              how you actually drive your Cybertruck.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
            <div className="relative h-96">
              <Image
                src="/images/Cybertruck.jpeg"
                alt="Cybertruck paint protection film project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 h-1 w-16 rounded-full bg-red-600" />

          <h2 className="text-4xl font-bold">
            Built For Calgary Driving Conditions
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="rounded-3xl border border-white/10 bg-neutral-900 p-6"
              >
                <p className="text-neutral-300">✓ {reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section
        id="coverage"
        className="border-t border-red-600/20 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 h-1 w-16 rounded-full bg-red-600" />

          <h2 className="text-4xl font-bold">Cybertruck PPF Coverage Options</h2>

          <p className="mt-4 max-w-3xl text-neutral-400">
            Every Cybertruck owner uses their vehicle differently. We can
            recommend coverage based on driving habits, budget, and the areas
            most likely to see wear.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {coverageOptions.map((option) => (
              <div
                key={option.title}
                className="rounded-3xl border border-white/10 bg-neutral-900 p-6 transition hover:border-red-600"
              >
                <h3 className="text-2xl font-semibold">{option.title}</h3>
                <p className="mt-4 leading-7 text-neutral-400">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Service */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-red-600" />

          <h2 className="text-4xl font-bold">Mobile PPF Service in Calgary</h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Aegis Auto Film currently focuses on mobile PPF service in Calgary
            and surrounding areas. Tell us your location, vehicle details, and
            the type of coverage you want, and we will help you plan the next
            step.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section
        id="quote"
        className="border-t border-red-600/20 px-6 py-24"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 h-1 w-16 rounded-full bg-red-600" />

          <h2 className="text-4xl font-bold">Request A Cybertruck PPF Quote</h2>

          <p className="mt-4 text-neutral-400">
            Send us your Cybertruck details and the protection package you are
            interested in.
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

            <select
              name="coverage"
              className="rounded-2xl border border-white/10 bg-neutral-900 px-5 py-4 text-white outline-none focus:border-red-600"
            >
              <option>Cybertruck High-Impact PPF</option>
              <option>Cybertruck Full Body PPF</option>
              <option>Cybertruck Custom PPF Coverage</option>
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
              Submit Cybertruck Quote Request
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-red-600/20 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold">
            Protect Your Cybertruck Before The Damage Happens
          </h2>

          <p className="mt-6 text-neutral-400">
            Mobile Cybertruck PPF service available in Calgary and surrounding
            areas.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:4038150249"
              className="rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700"
            >
              Call Now
            </a>

            <Link
              href="/"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-600/20 bg-zinc-950 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold">Aegis Auto Film</p>
            <p className="mt-2 text-sm text-neutral-500">
              Calgary, Alberta • Mobile PPF Installation
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-neutral-400 md:text-right">
            <a href="tel:4038150249" className="hover:text-red-500">
              403-815-0249
            </a>
            <a
              href="mailto:sales@aegisautofilm.com"
              className="hover:text-red-500"
            >
              sales@aegisautofilm.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}