import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          Let’s talk real estate
        </h1>
        <p className="text-slate-300 mb-10 max-w-xl">
          Tell me a bit about what you’re looking to do in San Diego and I’ll
          get back to you personally.
        </p>

        {/* 🔥 This is the important part for Netlify */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="space-y-6 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg"
        >
          {/* Required hidden fields for Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-200"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-lg bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-200"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-slate-200"
            >
              Phone (optional)
            </label>
            <input
              id="phone"
              name="phone"
              className="w-full rounded-lg bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-200"
            >
              How can I help?
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-lg bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-colors"
          >
            Send message
          </button>

          <p className="text-xs text-slate-400">
            This form is protected by Netlify Forms. You&apos;ll get a personal
            reply from me, not an automated bot.
          </p>
        </form>
      </div>
    </main>
  );
}
