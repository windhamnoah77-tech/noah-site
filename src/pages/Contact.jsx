import React from "react";

const Contact = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="max-w-3xl mx-auto px-4 py-20">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          Start the Conversation
        </h1>
        <p className="text-slate-300 mb-8 max-w-xl">
          Tell me a bit about your plans in San Diego – selling, buying, or
          investing. I&rsquo;ll get back to you personally.
        </p>

        {/* This form posts directly to Netlify */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="space-y-6 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8"
        >
          {/* Netlify needs this hidden input to match the form name */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot field (spam trap) */}
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone (optional)
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              What are you looking to do?
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-2.5 text-sm font-medium text-slate-900 hover:bg-emerald-300 transition"
          >
            Send message
          </button>

          <p className="text-xs text-slate-500">
            This form is securely handled by Netlify. Your details go directly
            to my inbox.
          </p>
        </form>
      </section>
    </main>
  );
};

export default Contact;
