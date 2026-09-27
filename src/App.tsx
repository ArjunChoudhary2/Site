import { useState } from "react";

const navItems = [
  "Meditation",
  "Patriji",
  "PMC",
  "Videos",
  "Articles",
  "Explore",
  "Contact",
];

const exploreCards = [
  { title: "About the PSSM", image: "img-000.jpg" },
  { title: "Frequently Asked Questions", image: "img-001.jpg" },
  { title: "Anapanasati Meditation", image: "img-003.jpg" },
  { title: "About Patriji", image: "img-007.jpg" },
  { title: "Pyramid Energy", image: "img-008.jpg" },
  { title: "Patriji's Concepts", image: "img-012.jpg" },
];

const books = [
  { name: "Yogananda", image: "img-026.jpg" },
  { name: "Lobsang Rampa", image: "img-040.jpg" },
  { name: "Brian Weiss", image: "img-035.jpg" },
  { name: "Louise Hay", image: "img-038.jpg" },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-20 text-white">
      <div className="mx-auto flex max-w-[1760px] items-center justify-between px-3 py-5 sm:px-4">
        <a href="#top" className="flex items-center" aria-label="PMC World home">
          <img
            src="/assets/pmc-world-logo.png"
            alt="PMC World"
            className="h-16 w-16 object-contain"
          />
        </a>
        <nav className="hidden items-center gap-7 text-[13px] font-semibold lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item} className="transition hover:text-amber-300" href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <button className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold backdrop-blur">
            Join the Movement
          </button>
          <button className="rounded-full bg-amber-400 px-4 py-2 text-xs font-extrabold text-black">
            Donate
          </button>
        </div>
        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-white/25 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="text-xl">{open ? "×" : "☰"}</span>
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" className="mx-4 rounded-2xl bg-neutral-950/95 p-5 shadow-2xl lg:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              className="block border-b border-white/10 py-3 text-sm font-semibold"
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function App() {
  return (
    <main id="top" className="overflow-hidden bg-white text-[#17191a]">
      <section className="relative bg-[#1c2120] pb-16 pt-28 text-center text-white sm:pb-24 sm:pt-36">
        <Header />
        <div className="relative z-10 mx-auto max-w-4xl px-5">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
            Awaken. Meditate. Transform.
          </p>
          <h1 className="text-4xl font-black leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Awaken your
            <br />
            inner master
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
            Join the Global PSSM movement and transform your life through Pyramid Meditation with
            guidance from meditation masters and spiritual scientists.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="#meditation" className="rounded-full bg-white px-6 py-3 text-sm font-extrabold text-black">
              Join the Movement
            </a>
            <a
              href="#explore"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-extrabold text-white"
            >
              Learn Meditation
            </a>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-5xl px-4">
          <img
            src="/assets/img-004.jpg"
            alt="Free 21-day meditation challenge with Patriji"
            className="w-full rounded-2xl shadow-2xl shadow-black/40"
          />
        </div>
      </section>

      <section id="explore" className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1760px] px-3 sm:px-4">
          <h2 className="max-w-xl text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
            Do you have a hunger to increase the quality of your life?
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-3">
            {exploreCards.map((card) => (
              <a
                href="#pmc"
                key={card.title}
                className="group relative aspect-[1.18] overflow-hidden rounded-lg bg-neutral-900"
              >
                <img
                  src={`/assets/${card.image}`}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" />
                <span className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-base font-black uppercase leading-none text-white sm:text-2xl">
                  {card.title} <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="meditation" className="bg-[#111314] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-[1760px] px-3 sm:px-4">
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl">Why Meditation?</h2>
          <div className="mt-10 grid items-center gap-10 md:grid-cols-[1.35fr_1fr]">
            <img
              src="/assets/img-014.jpg"
              alt="A person meditating inside a glowing pyramid"
              className="aspect-[1.25] h-full w-full rounded-2xl object-cover"
            />
            <div>
              <p className="text-sm leading-6 text-white/60">
                Experience clarity, joy, and spiritual evolution through daily meditation.
              </p>
              <h3 className="mt-4 text-4xl font-black leading-none tracking-[-0.04em]">
                Why
                <br />
                Meditation?
              </h3>
              <p className="mt-5 max-w-md leading-7 text-white/70">
                Awaken the mind, heal the body, and connect with your true self. Meditation is a
                simple, natural path to balance and inner mastery.
              </p>
              <a href="#be-a-meditator" className="mt-7 inline-flex rounded-full bg-amber-400 px-5 py-3 text-sm font-black text-black">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="pmc" className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1760px] items-center gap-12 px-3 sm:px-4 md:grid-cols-2">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-amber-500">Pyramid Meditation Channel</p>
            <h2 className="mt-3 text-5xl font-black tracking-[-0.05em] sm:text-6xl">PMC World</h2>
            <h3 className="mt-8 text-2xl font-semibold italic">Transforming Lives Through Meditation</h3>
            <p className="mt-5 leading-7 text-neutral-600">
              PMC is the media wing of the Pyramid Spiritual Societies Movement (PSSM), founded by
              Brahmarshi Pitamaha Patriji — a global, non-profit and non-religious spiritual
              organization dedicated to transforming humanity through Anapanasati Meditation,
              Pyramid Power, and Vegetarianism, all free of cost.
            </p>
            <p className="mt-4 leading-7 text-neutral-600">
              PMC World channel was inaugurated on November 11, 2024, on the birth anniversary of
              our beloved master, friend, Guru Brahmarshi Pitamaha Patriji.
            </p>
            <button className="mt-7 rounded-full bg-neutral-950 px-6 py-3 text-sm font-black text-white">Discover PMC</button>
          </div>
          <div className="relative mx-auto max-w-lg">
            <img
              src="/assets/img-020.jpg"
              alt="Patriji in red robes"
              className="relative z-10 mx-auto max-h-[620px] object-contain"
            />
            <img
              src="/assets/img-019.jpg"
              alt="Patriji speaking to a gathering"
              className="absolute right-0 top-16 w-3/5 rounded-[2rem] border-8 border-white object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#111314] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-[1760px] px-3 sm:px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-400">Real stories</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-5xl">
                Transformative Testimonials from Senior Masters
              </h2>
            </div>
            <button aria-label="Next testimonials" className="h-12 w-12 rounded-full border border-white/25 text-2xl">→</button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["Health", "img-016.jpg", "Meditation supports a calmer mind and a healthier, more balanced life."],
              ["Students", "img-015.jpg", "Meditation offers profound benefits for memory, focus, confidence, and much more."],
              ["Inner peace", "img-011.jpg", "Wisdom from senior masters for living with greater awareness and joy."],
            ].map(([title, image, copy]) => (
              <article key={title} className="overflow-hidden rounded-2xl bg-white text-black">
                <img src={`/assets/${image}`} alt="" className="aspect-[4/3] w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-600">{title}</p>
                  <p className="mt-3 text-xl font-bold leading-snug">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-20 text-white sm:py-28">
        <img src="/assets/img-023.jpg" alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-black/70" />
        <div className="mx-auto grid max-w-[1760px] gap-12 px-3 sm:px-4 md:grid-cols-2">
          <div className="flex items-center gap-6">
            <img src="/assets/img-011.jpg" alt="Patriji" className="h-48 w-40 rounded-2xl object-cover" />
            <h2 className="text-4xl font-black sm:text-5xl">Pillars for PSSM</h2>
          </div>
          <ul className="divide-y divide-white/20 text-xl font-bold">
            {[
              "Anapanasati meditation",
              "Benefits of meditation",
              "18 guiding principles",
              "Science of meditation",
              "Mind & meditation",
              "Health & meditation",
              "Events & workshops",
              "Patriji quotes",
            ].map((item) => (
              <li key={item} className="flex justify-between py-3">
                {item} <ArrowIcon />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#fdbb24] py-14 sm:py-20">
        <div className="mx-auto grid max-w-[1760px] items-center gap-8 px-3 sm:px-4 md:grid-cols-2">
          <img src="/assets/img-026.jpg" alt="Paramahansa Yogananda" className="max-h-[390px] w-full object-contain object-left" />
          <blockquote className="text-3xl font-black leading-tight sm:text-5xl">
            “Live quietly in the moment and see the beauty of all before you. The future will take care of itself.”
            <footer className="mt-6 text-base font-semibold italic">— Paramahansa Yogananda</footer>
          </blockquote>
        </div>
      </section>

      <section id="be-a-meditator" className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1760px] px-3 text-center sm:px-4">
          <h2 className="text-5xl font-black tracking-[-0.05em] sm:text-7xl">
            BE A <span className="text-amber-400">MEDITATOR</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-neutral-600">
            PMC is a spiritual and meditation-focused media channel established in 2018 by
            Brahmarshi Subhash Patriji, the founder of the Pyramid Spiritual Societies Movement.
          </p>
          <div className="mt-12 grid items-center gap-8 rounded-[2rem] bg-neutral-100 p-6 text-left md:grid-cols-2 md:p-12">
            <img src="/assets/img-044.jpg" alt="Patriji meditating" className="max-h-[520px] w-full object-contain" />
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-600">Quick 15 minutes</p>
              <h3 className="mt-3 text-4xl font-black leading-none sm:text-5xl">Guided Meditation with Patriji</h3>
              <p className="mt-5 text-lg text-neutral-600">Transform your day through breath, stillness, and awareness.</p>
              <button className="mt-7 rounded-full bg-black px-6 py-3 text-sm font-black text-white">Watch guided meditation</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111314] py-20 text-white">
        <div className="mx-auto grid max-w-[1760px] items-center gap-10 px-3 sm:px-4 md:grid-cols-2">
          <div>
            <h2 className="text-5xl font-black text-amber-400 sm:text-6xl">Be a volunteer</h2>
            <img src="/assets/img-032.jpg" alt="Young people meditating" className="mt-8 rounded-2xl" />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-amber-400">Upgrade your mind. Elevate your life.</p>
            <h3 className="mt-4 text-4xl font-black">Become 1% Better Every Day</h3>
            <p className="mt-6 leading-7 text-white/65">
              PMC World opens up meaningful ways to serve and become a valued member of a thriving
              community. Volunteer your knowledge, creativity, and time to help share meditation
              with the world.
            </p>
            <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="volunteer-email">Email address</label>
              <input
                id="volunteer-email"
                type="email"
                placeholder="Enter your email address"
                className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/5 px-5 py-3 outline-none focus:border-amber-400"
              />
              <button className="rounded-full bg-amber-400 px-7 py-3 font-black text-black">Volunteer</button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-amber-400 py-16">
        <div className="mx-auto max-w-[1760px] px-3 sm:px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-5xl font-black tracking-[-0.05em] sm:text-7xl">SWADHYAY YOG</h2>
              <p className="mt-3 text-xl font-bold italic">“Books are undeniably a swift shortcut to Enlightenment” — Linda Goodman</p>
            </div>
            <span className="text-sm font-black uppercase tracking-[0.2em]">Recommended by Patriji</span>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {books.map((book) => (
              <article key={book.name} className="relative overflow-hidden rounded-xl bg-black">
                <img src={`/assets/${book.image}`} alt="" className="aspect-[1.35] h-full w-full object-cover opacity-80" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-black text-white">{book.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1760px] px-3 sm:px-4">
          <div className="grid items-center gap-12 md:grid-cols-[0.75fr_1.25fr]">
            <div className="relative mx-auto">
              <div className="absolute inset-4 rounded-[3rem] bg-neutral-950" />
              <img src="/assets/img-049.jpg" alt="Podcast playing on a smartphone" className="relative max-h-[510px] rounded-[3rem] shadow-2xl" />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-500">Listen. Learn. Awaken.</p>
              <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">The Pyramid Spiritual Societies Podcast</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
                The Pyramid Spiritual Societies Podcast brings you transformative wisdom from
                Brahmarshi Patriji — guiding seekers across the world into the power of meditation,
                music, and spiritual science.
              </p>
              <img src="/assets/img-057.jpg" alt="Listen on Apple Podcasts, Spotify, Amazon Music, and YouTube" className="mt-7 w-full max-w-xl" />
            </div>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {[1, 2].map((column) => (
              <div key={column} className="rounded-2xl bg-neutral-50 p-5 shadow-sm">
                {[1, 2, 3].map((episode) => (
                  <button key={episode} className="flex w-full items-center gap-4 border-b border-neutral-200 py-4 text-left last:border-0">
                    <img src="/assets/img-050.jpg" alt="" className="h-14 w-20 rounded-lg object-cover" />
                    <span className="flex-1">
                      <small className="block text-[10px] uppercase tracking-wider text-neutral-500">Reflections with Patriji</small>
                      <strong>Topic Name</strong>
                    </span>
                    <span className="text-xs font-black">▶ Listen</span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1760px] items-center gap-12 px-3 sm:px-4 md:grid-cols-2">
          <img src="/assets/img-061.jpg" alt="Pyramid Dhyan Jagat magazine cover" className="mx-auto w-full max-w-sm shadow-2xl" />
          <div>
            <p className="inline-block bg-amber-400 px-3 py-1 text-sm font-black">1,50,000+ COPIES SOLD, 5+ LANGUAGES</p>
            <h2 className="mt-6 text-5xl font-black leading-none tracking-[-0.05em]">
              <span className="text-amber-500">PYRAMID</span> DHYAN JAGAT
            </h2>
            <h3 className="mt-3 text-2xl font-semibold italic">Magazine</h3>
            <p className="mt-7 text-lg leading-8 text-neutral-600">
              Your spiritual insight delivered every two months. A bi-monthly Hindi magazine
              dedicated to the science of meditation, pyramid energy research, vegetarian wisdom,
              and teachings of Indian gurus.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full border border-black px-6 py-3 font-black">Join the Movement</button>
              <button className="rounded-full bg-black px-6 py-3 font-black text-white">Get Your Copy Today</button>
            </div>
          </div>
        </div>
      </section>

      <section id="videos" className="bg-[#111314] py-20 text-white">
        <div className="mx-auto max-w-[1760px] px-3 sm:px-4">
          <h2 className="max-w-4xl text-4xl font-black tracking-[-0.04em] text-pink-500 sm:text-6xl">
            Masters videos about meditation
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {["pyramid meditation", "full moon meditation"].map((title, index) => (
              <article key={title} className="group relative aspect-video overflow-hidden rounded-2xl">
                <img src="/assets/img-064.jpg" alt="" className="h-full w-full object-cover transition group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-x-6 bottom-6">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">Master video {index + 1}</p>
                  <h3 className="mt-2 text-3xl font-black">{title}</h3>
                  <button className="mt-5 rounded-full bg-white px-5 py-2 text-xs font-black text-black">Learn more</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-[#0d0f10] py-16 text-white/70">
      <div className="mx-auto grid max-w-[1760px] gap-12 px-3 sm:grid-cols-2 sm:px-4 lg:grid-cols-4">
        <div>
          <h2 className="text-2xl font-black text-white">PMC World</h2>
          <p className="mt-4 text-sm leading-6">Meditate. Transform. Awaken your inner master.</p>
        </div>
        <div>
          <h3 className="font-black text-white">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#meditation">Meditation</a></li>
            <li><a href="#pmc">About PMC</a></li>
            <li><a href="#videos">Master Videos</a></li>
            <li><a href="#explore">PSSM</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-black text-white">Contact Us</h3>
          <p className="mt-4 text-sm leading-6">Hyderabad, Telangana, India<br />+91 80080 12345<br />contact@pmcworld.org</p>
        </div>
        <div>
          <h3 className="font-black text-white">Subscribe</h3>
          <p className="mt-4 text-sm">Join millions of seekers around the world.</p>
          <button className="mt-5 rounded-full border border-white/30 px-5 py-2 text-sm font-black text-white">Subscribe now</button>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-[1760px] border-t border-white/10 px-3 pt-8 text-xs sm:px-4">
        © 2026 PMC World. All rights reserved.
      </div>
    </footer>
  );
}

export default App;
