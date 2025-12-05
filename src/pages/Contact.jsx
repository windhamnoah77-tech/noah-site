function ContactForm() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />

      {/* Honeypot */}
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <input
        type="text"
        name="name"
        placeholder="Name"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
      />

      <textarea
        name="message"
        placeholder="How can I help?"
        rows={4}
        required
      />

      {/* This is your “Contact Me” button */}
      <button type="submit">
        Send
      </button>
    </form>
  );
}
