import React from "react";

function Contact() {
  return (
    <section className="py-16 bg-slate-900 text-slate-100">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          Let’s Talk About Your Next Move
        </h1>
        <p className="text-slate-300 mb-8 max-w-2xl">
          Share a few details and I’ll reach out personally to schedule a call
          and put a plan together.
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="grid gap-6 bg-slate-800/60 border border-slate-700 rounded-2xl p-6 md:p-8"
        >
          {/* Netlify needs this hidden input */}
          <input type="hidden" name="form-name" value="contact" />
          {/* Honeypot field (hidden from humans) */}
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human:
              <input name="bot-field" />
            </label>
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-200">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-200">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-200">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                className="bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-200">
                Timeline
              </label>
              <select
                name="timeline"
                className="bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
              >
                <option value="">Select one</option>
                <option>0–3 months</option>
                <option>3–6 months</option>
                <option>6–12 months</option>
                <option>Just exploring options</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-200">
              How can I help?
            </label>
            <textarea
              name="message"
              rows="4"
              className="bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold bg-emerald-400 text-slate-900 hover:bg-emerald-300 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
