import React from "react";

function Contact() {
  return (
    <main className="page">
      <section className="hero hero-centered">
        <div className="container narrow">
          <h1>Work with Noah</h1>
          <p className="lead">
            Tell me a bit about your situation, timing, and budget. I&apos;ll get
            back to you personally.
          </p>

          {/* PURE HTML FORM → POSTS TO FORMSUBMIT */}
          <form
            action="https://formsubmit.co/noah@rbhaley.com"
            method="POST"
          >
            {/* FormSubmit options */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New lead from LivingSanDiegoRealty.com"
            />
            <input type="hidden" name="_template" value="table" />

            <div className="form-row">
              <label>
                Full name
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Jane Doe"
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Phone
                <input
                  type="tel"
                  name="phone"
                  placeholder="(555) 555-5555"
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                What are you looking to do?
                <select name="goal">
                  <option value="sell">Sell a property</option>
                  <option value="buy">Buy a property</option>
                  <option value="invest">Invest / multi-unit</option>
                  <option value="trust-estate">Trust / estate sale</option>
                  <option value="other">Something else</option>
                </select>
              </label>
            </div>

            <div className="form-row">
              <label>
                Neighborhoods or areas you&apos;re focused on
                <input
                  type="text"
                  name="areas"
                  placeholder="North Park, Linda Vista, Oceanside…"
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Message
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Give me a quick snapshot of your situation, timeline, and price range."
                />
              </label>
            </div>

            <button type="submit" className="primary-btn">
              Send message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
