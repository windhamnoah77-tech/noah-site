import React, { useEffect, useMemo, useState } from "react";

/**
 * Noah Real Estate – Timeless, Minimal Site
 * Single-page React app with hash-based routing, SEO (JSON-LD),
 * lead capture, IDX/MLS placeholder, blog, affiliates, service areas,
 * and sitemap / robots.txt helpers.
 */

// ---- Utilities --------------------------------------------------------------
const routes = [
  { path: "#home", label: "Home" },
  { path: "#listings", label: "Listings" },
  { path: "#process", label: "Process" },
  { path: "#blog", label: "Insights" },
  { path: "#service-areas", label: "Service Areas" },
  { path: "#contact", label: "Contact" },
];

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash || "#home");
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || "#home");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  return hash;
}

const uid = (p = "id") => `${p}_${Math.random().toString(36).slice(2, 8)}`;

// ---- SEO & Structured Data --------------------------------------------------
function useSEO() {
  useEffect(() => {
    const title =
      "Noah Windham | Real Estate Agent – Living San Diego Realty";
    const desc =
      "Curated listings, trust & estate sales, and investor-focused strategy across San Diego, the Bay Area, and Los Angeles.";
    const image =
      "https://dummyimage.com/1200x630/ffffff/000000&text=Noah+Real+Estate";

    document.title = title;
    const setMeta = (name, content, attr = "name") => {
      let el = document.querySelector(`meta[${attr}='${name}']`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", desc);
    setMeta("og:title", title, "property");
    setMeta("og:description", desc, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:image", image, "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", desc);
    setMeta("twitter:image", image);

    const websiteLd = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Living San Diego Realty | Noah Windham",
      url: window.location.origin,
    };

    const agentLd = {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      name: "Noah Windham",
      brand: "Living San Diego Realty",
      areaServed: ["San Diego, CA", "Bay Area, CA", "Los Angeles, CA"],
      url: window.location.href,
      image,
      telephone: "+1-707-305-6499",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Diego",
        addressRegion: "CA",
        addressCountry: "US",
      },
    };

    const breadcrumbLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: routes.map((r, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: r.label,
        item: `${window.location.origin}/${r.path}`,
      })),
    };

    const ensureLd = (id, obj) => {
      let el = document.getElementById(id);
      if (!el) {
        el = document.createElement("script");
        el.type = "application/ld+json";
        el.id = id;
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(obj);
    };

    ensureLd("ld-website", websiteLd);
    ensureLd("ld-agent", agentLd);
    ensureLd("ld-breadcrumbs", breadcrumbLd);
  }, []);
}

// ---- Sitemap / robots helpers ----------------------------------------------
function buildSitemapXml(base, hashes) {
  const urls = hashes.map((h) => `${base}/${h}`);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (u) =>
        `  <url>\n    <loc>${u}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`
    )
    .join("\n")}\n</urlset>`;
}

function buildRobotsTxt(base) {
  return `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml`;
}

function hasIframeMarkup(str) {
  return typeof str === "string" && str.includes("<iframe");
}

function downloadText(text, filename) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function generateSitemap() {
  const base = window.location.origin || "https://example.com";
  const hashes = [
    "#home",
    "#listings",
    "#process",
    "#blog",
    "#service-areas",
    "#contact",
  ];
  const body = buildSitemapXml(base, hashes);
  downloadText(body, "sitemap.xml");
}

function generateRobots() {
  const robots = buildRobotsTxt(window.location.origin || "https://example.com");
  downloadText(robots, "robots.txt");
}

// ---- Layout components ------------------------------------------------------
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/60 bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-baseline gap-2">
          <span className="font-serif text-lg tracking-wide">
            Living San Diego Realty
          </span>
          <span className="text-xs text-neutral-500 uppercase tracking-[0.18em]">
            Noah&nbsp;Windham
          </span>
        </a>

        <nav className="hidden md:flex gap-6 text-sm">
          {routes.map((r) => (
            <a
              key={r.path}
              href={r.path}
              className="text-neutral-700 hover:text-black"
            >
              {r.label}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            aria-label="Menu"
            className="p-2 rounded-full border border-neutral-300"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200/60 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2 text-sm">
            {routes.map((r) => (
              <a
                key={r.path}
                href={r.path}
                onClick={() => setOpen(false)}
                className="py-2 border-b last:border-0 text-neutral-800"
              >
                {r.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ onOpenLead }) {
  return (
    <section id="home" className="page-section">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="pill">Curated listings · Trust & Estate · Investors · Buyers</span>
          <h1 className="mt-5 text-4xl md:text-5xl leading-tight">
            Timeless representation for sellers and serious buyers.
          </h1>
          <p className="mt-4 text-neutral-600 max-w-prose">
            I help owners, families, and investors move assets cleanly—whether
            that’s a trust or estate sale in San Diego, Bay Area, Los Angeles or an off-market opportunity
            . Clear numbers, disciplined negotiation, and marketing
            that belongs in a magazine.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              onClick={onOpenLead}
              className="px-5 py-3 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition"
            >
              Request pricing consult
            </button>
            <a
              href="#listings"
              className="px-5 py-3 rounded-2xl border border-neutral-300 text-neutral-800 hover:border-black"
            >
              View active listings
            </a>
          </div>

          <div className="mt-5 text-xs text-neutral-500 space-y-1">
            <div>Noah WindhamCA CA DRE #02227646 • R B Haley Inc CA DRE #01843189.</div>
            <div>San Diego base · Bay Area & Los Angeles by request.</div>
          </div>
        </div>

        <div className="card p-6 md:p-8 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
          <div className="text-xs uppercase tracking-[0.2em] text-neutral-300">
            Case Study · Trust Sale
          </div>
          <div className="mt-3 font-serif text-2xl">
            North Park craftsman, multiple heirs, deferred maintenance.
          </div>
          <p className="mt-3 text-sm text-neutral-200">
            Prepped, priced, and launched in 12 days. 9 offers, 16% over list,
            clean terms, and a 30-day close. Heirs got clarity, not chaos.
          </p>
          <div className="mt-5 grid grid-cols-3 gap-3 text-xs">
            <div>
              <div className="text-neutral-300">Offers</div>
              <div className="text-base font-semibold">9</div>
            </div>
            <div>
              <div className="text-neutral-300">Over list</div>
              <div className="text-base font-semibold">+16%</div>
            </div>
            <div>
              <div className="text-neutral-300">Days to close</div>
              <div className="text-base font-semibold">30</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueProps() {
  const items = [
    {
      h: "Pricing with teeth.",
      p: "Tight valuations anchored in comps, absorption, and buyer psychology—not wishful thinking.",
    },
    {
      h: "Editorial-grade marketing.",
      p: "Photographers, film, copy, and distribution that make your property feel like a feature, not a flyer.",
    },
    {
      h: "Clean, quiet execution.",
      p: "Clear timelines, tidy contingencies, and direct communication. Less noise, stronger leverage.",
    },
  ];
  return (
    <section className="page-section pt-0">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((x) => (
          <div key={x.h} className="card p-6">
            <div className="font-serif text-lg">{x.h}</div>
            <p className="mt-2 text-sm text-neutral-600">{x.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Listings() {
  const [idxUrl, setIdxUrl] = useState("");
  const [mlsEmbed, setMlsEmbed] = useState("");
  const [mlsId, setMlsId] = useState("");

  return (
    <section id="listings" className="page-section">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl">Featured & active listings</h2>
          <p className="mt-2 text-neutral-600 max-w-prose">
            Plug in your brokerage IDX or a custom MLS iframe. Until then, use
            this as a live demo when you’re in front of a seller or buyer.
          </p>
        </div>
        <span className="hidden md:inline-flex pill">
          IDX ready — paste and go
        </span>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-neutral-700">
              IDX / MLS iframe URL
            </label>
            <input
              value={idxUrl}
              onChange={(e) => setIdxUrl(e.target.value)}
              placeholder="https://your-idx-provider.com/widget?agent=NOAH"
              className="mt-1 w-full border rounded-xl px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-700">
              Full iframe embed
            </label>
            <textarea
              value={mlsEmbed}
              onChange={(e) => setMlsEmbed(e.target.value)}
              placeholder="<iframe src='https://...'></iframe>"
              className="mt-1 w-full border rounded-xl px-3 py-2 h-32 text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-700">
              Quick MLS lookup (demo only)
            </label>
            <div className="mt-1 flex gap-2">
              <input
                value={mlsId}
                onChange={(e) => setMlsId(e.target.value)}
                placeholder="MLS ID e.g. 240012345"
                className="flex-1 border rounded-xl px-3 py-2 text-sm"
              />
              <button
                onClick={() =>
                  alert(`Here you’d fetch MLS data for ${mlsId} via your API.`)
                }
                className="px-4 py-2 border rounded-xl text-sm"
              >
                Preview
              </button>
            </div>
          </div>

          <p className="text-xs text-neutral-500">
            When you’re ready, swap this section for your provider’s official
            embed or a custom listings component.
          </p>
        </div>

        <div className="card p-3 bg-neutral-50 flex items-center justify-center min-h-[320px]">
          {hasIframeMarkup(mlsEmbed) ? (
            <div
              className="w-full h-[360px]"
              dangerouslySetInnerHTML={{ __html: mlsEmbed }}
            />
          ) : idxUrl ? (
            <iframe
              title="IDX Listings"
              src={idxUrl}
              className="w-full h-[360px] rounded-xl border-none"
            />
          ) : (
            <div className="text-center text-neutral-500 px-6">
              <div className="font-serif text-lg">
                Your live IDX feed will sit here.
              </div>
              <p className="mt-2 text-sm">
                Until then, this can double as a pitch board: walk clients
                through how you market and filter property.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      title: "01 · Discovery & positioning",
      text: "Goals, timing, constraints, and the real “why” behind the move. Then we decide whether we’re selling, holding, or quietly testing the market.",
    },
    {
      title: "02 · Prep, pricing, and launch",
      text: "Prep list, light improvements, media, and a pricing strategy that makes sense. Then we launch with intention—not just toss it on the MLS.",
    },
    {
      title: "03 · Negotiation & closing",
      text: "We manage offers, contingencies, inspections, and timelines so you don’t have to. Clean terms, no surprises, and a file that would make your attorney happy.",
    },
  ];

  return (
    <section id="process" className="page-section bg-neutral-50">
      <div className="card p-8 md:p-10">
        <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
          <div className="max-w-md">
            <span className="pill">How we work together</span>
            <h2 className="mt-4 text-3xl">A clean three-step process.</h2>
            <p className="mt-3 text-neutral-600">
              This is the conversation framework I walk every seller and
              investor through. It keeps everyone grounded, even when the deal
              isn’t simple.
            </p>
          </div>

          <div className="grid gap-5 flex-1">
            {steps.map((s) => (
              <div key={s.title} className="border-l-2 border-neutral-200 pl-4">
                <div className="text-xs font-semibold text-neutral-500 uppercase">
                  {s.title}
                </div>
                <p className="mt-1 text-sm text-neutral-700">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Blog() {
  const [posts, setPosts] = useState(() => [
    {
      id: uid("p"),
      title: "San Diego Q4 Seller’s Playbook",
      date: "2025-11-01",
      excerpt:
        "What I look at before advising a client to list in Q4 versus waiting for spring.",
      slug: "sd-q4-sellers",
    },
    {
      id: uid("p"),
      title: "Cap rates vs. quality of earnings",
      date: "2025-10-18",
      excerpt:
        "Most small investors chase yield. The better ones chase durability.",
      slug: "cap-rates-qoe",
    },
  ]);

  useEffect(() => {
    posts.forEach((post, idx) => {
      const id = `ld-post-${idx}`;
      let el = document.getElementById(id);
      if (!el) {
        el = document.createElement("script");
        el.type = "application/ld+json";
        el.id = id;
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        datePublished: post.date,
        author: { "@type": "Person", name: "Noah Windham" },
        mainEntityOfPage: `${window.location.origin}/#blog/${post.slug}`,
      });
    });
  }, [posts]);

  return (
    <section id="blog" className="page-section">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl">Notes for clients & friends</h2>
          <p className="mt-2 text-neutral-600 max-w-prose">
            Short, practical pieces you can forward to a client, a CPA, or a
            family member dealing with a property decision.
          </p>
        </div>
        <button
          className="hidden md:inline-flex text-sm underline"
          onClick={() =>
            setPosts((p) => [
              {
                id: uid("p"),
                title: "New working draft",
                date: new Date().toISOString().slice(0, 10),
                excerpt: "Working notes…",
                slug: `draft-${Date.now()}`,
              },
              ...p,
            ])
          }
        >
          Add draft (demo)
        </button>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.id} className="card p-5">
            <div className="text-xs text-neutral-500">{post.date}</div>
            <h3 className="mt-1 font-serif text-lg">{post.title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{post.excerpt}</p>
            <a
              href={`#blog/${post.slug}`}
              className="mt-3 inline-block text-sm underline"
            >
              Read outline
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function ServiceAreas() {
  const areas = [
    {
      city: "San Diego",
      hoods: ["North Park", "Point Loma", "Mission Hills", "La Jolla"],
    },
    {
      city: "Bay Area",
      hoods: ["Palo Alto", "San Mateo", "Walnut Creek", "Oakland Hills"],
    },
    {
      city: "North LA",
      hoods: ["Sherman Oaks", "Studio City", "Encino", "Burbank"],
    },
  ];
  return (
    <section id="service-areas" className="page-section">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl">Where I work</h2>
          <p className="mt-2 text-neutral-600 max-w-prose">
            San Diego is home base, but I routinely collaborate with partners in
            the Bay and North LA for clients with portfolios across markets.
          </p>
        </div>
        <a href="#contact" className="hidden md:inline-flex text-sm underline">
          Ask about a specific neighborhood
        </a>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {areas.map((a) => (
          <div key={a.city} className="card p-5">
            <div className="font-serif text-lg">{a.city}</div>
            <ul className="mt-3 space-y-1 text-sm text-neutral-700">
              {a.hoods.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function LeadCapture({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Seller valuation",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Build payload for Netlify "contact" form
      const data = {
        "form-name": "contact",          // must match the form name Netlify knows
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.service,
        message: form.message,
        source: "LeadCapture modal",     // lets you see it came from the popup
      };

      await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data).toString(),
      });

      // Optional: keep your local backup too
      const leads = JSON.parse(localStorage.getItem("noah_leads") || "[]");
      leads.push({ ...data, ts: new Date().toISOString() });
      localStorage.setItem("noah_leads", JSON.stringify(leads));

      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="card w-full max-w-lg p-6">
        <div className="flex items-center justify-between">
          <div className="font-serif text-2xl">Work with Noah</div>
          <button onClick={onClose} className="p-2">
            ✕
          </button>
        </div>

        {status === "success" ? (
          <div className="mt-4 text-sm text-neutral-700">
            <div className="text-green-700">
              Got it. I’ll reach out shortly with next steps.
            </div>
            <p className="mt-2">
              If it’s urgent, email{" "}
              <a className="underline" href="mailto:Noah@rbhaley.com">
                Noah@rbhaley.com
              </a>{" "}
              or call{" "}
              <a className="underline" href="tel:+17073056499">
                (707) 305-6499
              </a>
              .
            </p>
            <button
              className="mt-4 px-4 py-2 border rounded-xl"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        ) : (
          <form className="mt-4 grid gap-3 text-sm" onSubmit={submit}>
            <div className="grid md:grid-cols-2 gap-3">
              <input
                required
                name="name"
                placeholder="Full name"
                className="border rounded-xl px-3 py-2"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                required
                name="email"
                type="email"
                placeholder="Email"
                className="border rounded-xl px-3 py-2"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <input
              name="phone"
              placeholder="Phone (optional)"
              className="border rounded-xl px-3 py-2"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <select
              name="service"
              className="border rounded-xl px-3 py-2"
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
            >
              <option>Seller valuation</option>
              <option>Buy-side discovery</option>
              <option>Investment strategy</option>
              <option>Development consult</option>
            </select>
            <textarea
              name="message"
              placeholder="Tell me about the property, timing, and any constraints."
              className="border rounded-xl px-3 py-2 h-28"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-5 py-2 rounded-xl border border-black bg-black text-white hover:bg-white hover:text-black transition"
              >
                {status === "loading" ? "Sending…" : "Request consult"}
              </button>
              <a
                className="text-xs underline"
                href={`mailto:Noah@rbhaley.com?subject=Consult%20Request&body=${encodeURIComponent(
                  JSON.stringify(form, null, 2)
                )}`}
              >
                or email details instead
              </a>
            </div>
            {status === "error" && (
              <div className="text-xs text-red-600">
                Something went wrong. Try again in a moment.
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault(); // 🔒 stop the browser from doing a normal POST+redirect
    setStatus("loading");

    const formEl = e.target;
    const formData = new FormData(formEl);

    // make sure Netlify knows which form this is
    formData.set("form-name", "contact");

    try {
      await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      setStatus("success");
      formEl.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="page-section">
      <div className="card p-6 md:p-8 grid md:grid-cols-2 gap-8 items-start">
        {/* Left side – copy & contact info */}
        <div>
          <span className="pill">Start the conversation</span>
          <h2 className="mt-4 text-3xl">Let’s map out your move.</h2>
          <p className="mt-3 text-neutral-600">
            Whether you’re a trustee, a first-time seller, or an investor
            thinking about repositioning a property, we’ll start with one clean
            call and a simple action plan.
          </p>
          <div className="mt-5 space-y-1 text-sm text-neutral-700">
            <div>
              Email:{" "}
              <a className="underline" href="mailto:Noah@rbhaley.com">
                Noah@rbhaley.com
              </a>
            </div>
            <div>
              Phone:{" "}
              <a className="underline" href="tel:+17073056499">
                (707) 305-6499
              </a>
            </div>
            <div>Based in San Diego · Work across CA by arrangement.</div>
          </div>
        </div>

        {/* Right side – Netlify form submitted via fetch */}
        <div className="rounded-2xl bg-neutral-50 p-6">
          <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            Schedule an intro call
          </div>
          <p className="mt-2 text-sm text-neutral-700">
            Share a few details and I&apos;ll follow up with times for a short
            discovery call.
          </p>

          <form
            name="contact"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="mt-4 space-y-3 text-sm"
          >
            {/* Netlify identifier */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot */}
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="grid md:grid-cols-2 gap-3">
              <input
                required
                name="name"
                placeholder="Full name"
                className="border rounded-xl px-3 py-2 w-full"
              />
              <input
                required
                name="email"
                type="email"
                placeholder="Email"
                className="border rounded-xl px-3 py-2 w-full"
              />
            </div>

            <input
              name="phone"
              placeholder="Phone (optional)"
              className="border rounded-xl px-3 py-2 w-full"
            />

            <textarea
              name="message"
              rows={4}
              placeholder="Tell me about the property, timing, and any constraints."
              className="border rounded-xl px-3 py-2 w-full"
              required
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-1 px-5 py-3 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition"
            >
              {status === "loading" ? "Sending…" : "Schedule an intro call"}
            </button>
          </form>

          {status === "success" && (
            <div className="mt-3 text-xs text-green-700">
              Got it. I’ll reach out shortly with next steps.
            </div>
          )}
          {status === "error" && (
            <div className="mt-3 text-xs text-red-700">
              Something went wrong. Please try again or email me directly.
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={generateSitemap}
              className="px-5 py-3 rounded-2xl border text-xs"
            >
              Download sitemap.xml
            </button>
            <button
              type="button"
              onClick={generateRobots}
              className="px-5 py-3 rounded-2xl border text-xs"
            >
              Download robots.txt
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  return ok ? (
    <div className="text-xs text-green-700 mt-2">
      You’re in. I send occasionally, not weekly spam.
    </div>
  ) : (
    <form
      className="flex gap-2 mt-2"
      onSubmit={(e) => {
        e.preventDefault();
        setOk(true);
      }}
    >
      <input
        required
        type="email"
        placeholder="you@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded-xl px-3 py-2 flex-1 text-sm"
      />
      <button className="px-4 py-2 border rounded-xl text-sm">Join</button>
    </form>
  );
}

function Footer({ onOpenLead }) {
  return (
    <footer className="border-t border-neutral-200/60 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-serif text-lg">Living San Diego Realty</div>
          <div className="text-neutral-600 mt-2">
            Noah Windham · CA DRE #02227646
          <div></div>  Brokered by R B Haley Inc · CA DRE #01843189
          </div>
          <div className="text-neutral-600">
            San Diego · Bay Area · Los Angeles
          </div>
          <button onClick={onOpenLead} className="mt-3 underline">
            Book a consult
          </button>
        </div>
        <div>
          <div className="font-medium">Site</div>
          <ul className="mt-2 space-y-1">
            {routes.map((r) => (
              <li key={r.path}>
                <a className="hover:underline" href={r.path}>
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-medium">Legal</div>
          <ul className="mt-2 space-y-1 text-neutral-600">
            <li>Equal Housing Opportunity.</li>
            <li>Information deemed reliable but not guaranteed.</li>
            <li>
              © {new Date().getFullYear()} Noah Windham. All rights reserved.
            </li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Brief updates</div>
          <p className="mt-2 text-xs text-neutral-600">
            Occasional notes on San Diego & CA property—no fluff, no mass drip
            campaign.
          </p>
          <NewsletterForm />
        </div>
      </div>
    </footer>
  );
}

// ---- Dev diagnostics (optional) --------------------------------------------
function useDevMode() {
  const [dev, setDev] = useState(false);
  useEffect(() => {
    try {
      const qp = new URLSearchParams(window.location.search);
      setDev(qp.get("dev") === "1");
    } catch {}
  }, []);
  return dev;
}

function runTests() {
  const results = [];
  const base = "https://example.com";
  const hashes = [
    "#home",
    "#listings",
    "#process",
    "#blog",
    "#service-areas",
    "#contact",
  ];
  const xml = buildSitemapXml(base, hashes);
  results.push({
    name: "sitemap contains <urlset>",
    pass: xml.includes("<urlset"),
    details: xml.slice(0, 60) + "…",
  });
  const urlCount = (xml.match(/<url>/g) || []).length;
  results.push({
    name: "sitemap url count matches",
    pass: urlCount === hashes.length,
    details: `found ${urlCount}, expected ${hashes.length}`,
  });
  const robots = buildRobotsTxt(base);
  results.push({
    name: "robots includes sitemap line",
    pass: robots.includes(`${base}/sitemap.xml`),
    details: robots,
  });
  return results;
}

function Diagnostics() {
  const tests = useMemo(() => runTests(), []);
  return (
    <section className="page-section">
      <div className="card p-6">
        <div className="font-serif text-lg mb-3">Dev diagnostics</div>
        <ul className="space-y-2 text-xs">
          {tests.map((t, i) => (
            <li
              key={i}
              className={t.pass ? "text-green-700" : "text-red-700"}
            >
              <span className="font-semibold">
                {t.pass ? "PASS" : "FAIL"}
              </span>{" "}
              — {t.name}
              {t.details && (
                <div className="text-neutral-600 mt-1">{t.details}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ---- Root component ---------------------------------------------------------
export default function RealEstateSite() {
  const hash = useHashRoute();
  useSEO();
  const dev = useDevMode();

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero onOpenLead={scrollToContact} />
        <ValueProps />
        <Listings />
        <Process />
        <Blog />
        <ServiceAreas />
        <Contact />
        {dev && <Diagnostics />}
      </main>
      <Footer onOpenLead={scrollToContact} />
      <button
        onClick={scrollToContact}
        className="fixed bottom-6 right-6 px-5 py-3 rounded-2xl border border-black bg-white shadow-sm hover:bg-black hover:text-white text-sm"
      >
        Work with Noah
      </button>
    </div>
  );
}
