import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { profile } from "../data.js";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "../emailConfig.js";

const initialForm = { name: "", email: "", message: "" };
const isEmailJsConfigured = Boolean(
  EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY
);

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    if (!isEmailJsConfigured) {
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      setForm(initialForm);
      return;
    }

    try {
      setStatus("sending");
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: profile.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="What are you looking to build?"
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "success" && (
        <p className="form-status form-status-success" role="status">
          {isEmailJsConfigured
            ? "Message sent — thanks for reaching out!"
            : "Opening your email client to send this…"}
        </p>
      )}
      {status === "error" && (
        <p className="form-status form-status-error" role="alert">
          Something went wrong — please email {profile.email} directly.
        </p>
      )}
    </form>
  );
}
