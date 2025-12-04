import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-neutral-900">
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Work with Noah
        </h1>
        <p className="text-lg text-neutral-700 mb-10 max-w-xl">
          Tell me a bit about your situation—timeline, goals, and what you own
          or want to buy. I’ll respond personally.
        </p>

        {/* Plain Netlify form — no JS magic */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/"  // Netlify will still record the submission
          className="bg-white/80 border border-neutral-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6"
        >
          {/* Required hidden inputs for Netlify */}
          <input type="hidden" name="form-name" value="contact" />

          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-800 mb-1">
                Name
              </label>
              <input
                className="w-full border border-neutral-300 rounded-xl px-3 py-2 text-base bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900/80 focus:border-neutral-900"
                type="text"
                name="name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-800 mb-1">
                Email
              </label>
              <input
                className="w-full border border-neutral-300 rounded-xl px-3 py-2 text-base bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900/80 focus:border-neutral-900"
                type="email"
                name="email"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-800 mb-1">
              Phone (optional)
            </label>
            <input
              className="w-full border border-neutral-300 rounded-xl px-3 py-2 text-base bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900/80 focus:border-neutral-900"
              type="tel"
              name="phone"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-800 mb-1">
              How can I help?
            </label>
            <textarea
              className="w-full border border-neutral-300 rounded-xl px-3 py-2 text-base bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900/80 focus:border-neutral-900 min-h-[140px]"
              name="message"
              required
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium bg-neutral-900 text-white hover:bg-black transition"
          >
            Send message
          </button>
        </form>
      </section>
    </main>
  );
}
