import React from "react";

export default function Home() {
  return (
    <main className="page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-main">
          <div className="hero-tag">San Diego · Trust & Estate Sales · Investors</div>
          <h1 className="hero-title">Living San Diego Realty</h1>
          <p className="hero-subtitle">
            Curated listings, trust &amp; estate sales, and investor-focused strategy –
            designed for sellers and serious buyers who treat real estate like a business.
          </p>

          <div className="hero-actions">
            <a href="#consult" className="btn btn-primary">
              Book a strategy call
            </a>
            <a href="#listings" className="btn btn-ghost">
              View featured listings
            </a>
          </div>

          <div className="hero-meta">
            <span>Trust &amp; estate experience</span>
            <span>Off-market &amp; investor inventory</span>
            <span>Based in San Diego</span>
          </div>
        </div>

        <div className="hero-card">
          <h3>Seller snapshot</h3>
          <p>
            Want to know what your property could sell for to an investor vs. on the open
            market? I’ll walk you through both – numbers first, no fluff.
          </p>
          <ul className="hero-list">
            <li>30–60 day sale timelines</li>
            <li>As-is options for trust &amp; estate properties</li>
            <li>Rent-ready vs. value-add pricing</li>
          </ul>
          <a href="#consult" className="hero-link">
            Start with a quick call →
          </a>
        </div>
      </section>

      {/* Value props */}
      <section className="section">
        <div className="section-header">
          <h2>Built for sellers, trustees, and investors</h2>
          <p>
            Whether you&apos;re unwinding an estate, repositioning a rental, or placing
            capital for long-term hold, you need clean numbers, clear options, and a calm
            operator.
          </p>
        </div>

        <div className="grid-3">
          <article className="card">
            <h3>Trust &amp; estate sales</h3>
            <p>
              Coordination with attorneys, CPAs, and beneficiaries. Clear timelines, clear
              communication, and help keeping everyone on the same page.
            </p>
          </article>

          <article className="card">
            <h3>Investor-grade analysis</h3>
            <p>
              Rents, taxes, rehab, hold vs. sell – broken down like a pro forma, not a
              brochure. You&apos;ll see the real levers, not just the glossy photos.
            </p>
          </article>

          <article className="card">
            <h3>San Diego focus</h3>
            <p>
              From North Park and Normal Heights to coastal pockets and emerging
              sub-markets – real numbers, local context, and what actually trades.
            </p>
          </article>
        </div>
      </section>

      {/* Featured listings (static demo) */}
      <section className="section" id="listings">
        <div className="section-header">
          <h2>Sample featured inventory</h2>
          <p>
            Real addresses will live here once we hook in your live listings or IDX. For
            now, this shows how your investor-friendly cards will look.
          </p>
        </div>

        <div className="card-grid">
          <article className="listing-card">
            <div className="listing-pill">Trust / Estate</div>
            <h3>Detached home · North Park</h3>
            <p className="listing-meta">3 bed · 2 bath · 1,400 sq ft</p>
            <p className="listing-copy">
              Classic craftsman on a walkable street. Ideal as a light rehab or long-term
              rental hold.
            </p>
            <ul className="listing-stats">
              <li>Pro-forma rent: $4,200/mo</li>
              <li>Est. rehab: $35,000</li>
              <li>Projected cap rate: 5.3%</li>
            </ul>
          </article>

          <article className="listing-card">
            <div className="listing-pill listing-pill-alt">Value-add</div>
            <h3>Duplex · Normal Heights</h3>
            <p className="listing-meta">2 × 2 bed units · alley access</p>
            <p className="listing-copy">
              Undermarket rents with ADU potential. Perfect for the investor who wants
              forced appreciation.
            </p>
            <ul className="listing-stats">
              <li>Current rent: $3,000/mo</li>
              <li>Market rent: ~$4,600/mo</li>
              <li>Upside via ADU + carport</li>
            </ul>
          </article>

          <article className="listing-card">
            <div className="listing-pill">Turn-key</div>
            <h3>Condo · Mission Valley</h3>
            <p className="listing-meta">2 bed · 2 bath · parking + amenities</p>
            <p className="listing-copy">
              Low-maintenance condo ideal for a first-time investor or 1031 buyer wanting
              simple management.
            </p>
            <ul className="listing-stats">
              <li>HOA reviewed for investors</li>
              <li>Projected cash-on-cash: 6–7%</li>
              <li>Strong long-term rental demand</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Lead/consult section */}
      <section className="section section-alt" id="consult">
        <div className="section-split">
          <div>
            <h2>Run the numbers before you move a muscle.</h2>
            <p>
              I&apos;ll help you compare selling to an investor vs. listing on the open
              market – or holding and repositioning. We&apos;ll start with what you care
              about: net proceeds, timelines, and headache level.
            </p>
            <ul className="bullet-list">
              <li>15–20 minute call or Zoom</li>
              <li>No pressure, no spam</li>
              <li>Designed for trustees, sellers, and serious buyers</li>
            </ul>
          </div>

          <form
            className="lead-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form wired later – for now, just text or email Noah 🙂");
            }}
          >
            <h3>Request a strategy call</h3>
            <label>
              Name
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" required />
            </label>
            <label>
              Property / situation
              <textarea
                rows="3"
                placeholder="Trust sale, rental, 1031, or purchase goals…"
              />
            </label>
            <button type="submit" className="btn btn-primary btn-full">
              Submit inquiry
            </button>
            <p className="form-footnote">
              Prefer direct? Call, text, or email – this form is just for convenience.
            </p>
          </form>
        </div>
      </section>

      {/* Service areas */}
      <section className="section">
        <h2>Primary service areas</h2>
        <p className="section-sub">
          San Diego County focus with a particular soft spot for walkable neighborhoods,
          small multifamily, and trust &amp; estate assets that need a steady hand.
        </p>

        <div className="chip-row">
          <span className="chip">North Park</span>
          <span className="chip">Normal Heights</span>
          <span className="chip">University Heights</span>
          <span className="chip">Mission Valley</span>
          <span className="chip">Clairemont</span>
          <span className="chip">Coastal sub-markets</span>
          <span className="chip">Small multifamily</span>
          <span className="chip">Trust &amp; estate sales</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div>© {new Date().getFullYear()} Noah Real Estate · Living San Diego Realty</div>
        <div className="footer-meta">
          <span>DRE # (add here)</span>
          <span>San Diego, CA</span>
        </div>
      </footer>
    </main>
  );
}
