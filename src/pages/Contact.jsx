import React from "react";

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
        Let’s talk real estate.
      </h1>
      <p className="text-neutral-400 mb-10 max-w-2xl">
        Share a bit about your timeline, budget, and goals. I’ll reply
        personally and we’ll decide whether it makes sense to jump on a call.
      </p>

      {/* 👇 Netlify-powered form */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="space-y-6"
      >
        {/* Required hidden fields so Netlify knows this form exists */}
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              Phone (optional)
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              Are you buying, selling, or both?
            </label>
            <select
              name="interest"
              className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option>Buying</option>
              <option>Selling</option>
              <option>Buying &amp; selling</option>
              <option>Just exploring options</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">
            How can I help?
          </label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center rounded-xl border border-emerald-500 bg-emerald-500 px-5 py-2.5 text-sm font-medium text-black hover:bg-emerald-400 transition"
        >
          Send message
        </button>
      </form>
    </section>
  );
}
