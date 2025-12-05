import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">
          Contact Living San Diego Realty
        </h2>
        <p className="text-sm mb-8">
          Tell me a little about your goals, timeline, and any properties
          you&apos;re considering. I&apos;ll get back to you as soon as possible.
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="space-y-4"
        >
          {/* Netlify form-name hook */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot */}
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div>
            <label className="block text-sm mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm mb-1" htmlFor="phone">
              Phone (optional)
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm mb-1" htmlFor="message">
              How can I help?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium rounded-md border border-black"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
