"use client";
import React, { useState } from "react";
import { sendEnquiry } from "../lib/enquiry";
import { contactPage } from "../data/copy";

/**
 * Enquiry form written as a sentence the visitor completes, after the
 * Anakle reference. Each blank is a real labelled field; the sentence is
 * also sent as the message body so the email reads naturally. Blanks grow
 * with their content where the browser supports field-sizing, and fall back
 * to a fixed width elsewhere.
 */
const blank =
  "ml-2 inline-block min-w-0 border-0 border-b-2 border-black/25 bg-transparent px-1 py-0.5 align-baseline text-accent outline-none transition-colors placeholder:text-muted/50 focus:border-accent supports-[field-sizing:content]:w-auto supports-[field-sizing:content]:min-w-[6ch] [field-sizing:content]";

export function ContactSentenceForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    topic: "",
    email: "",
    details: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [key]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const sentence = `Hi, my name is ${form.name}${
      form.company ? ` from ${form.company}` : ""
    }. I'd like to talk about ${form.topic}. You can reach me at ${form.email}.`;
    const ok = await sendEnquiry({
      name: form.name,
      email: form.email,
      company: form.company,
      subject: `New enquiry: ${form.topic}`,
      message: form.details ? `${sentence}\n\n${form.details}` : sentence,
    });
    setStatus(ok ? "success" : "error");
    if (ok) setForm({ name: "", company: "", topic: "", email: "", details: "" });
  };

  if (status === "success") {
    return (
      <div className="py-6">
        <p className="font-serif-editorial text-3xl leading-snug md:text-4xl">
          Thank you. <em className="text-accent">We&apos;ll be in touch within 24 hours.</em>
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <p className="font-serif-editorial text-[clamp(1.6rem,3.2vw,2.75rem)] leading-[1.6] text-text">
        Hi, my name is
        <label className="sr-only" htmlFor="c-name">Your name</label>
        <input
          id="c-name"
          required
          value={form.name}
          onChange={set("name")}
          placeholder="your name"
          autoComplete="name"
          className={`${blank} mr-2 w-[9ch]`}
        />
        from
        <label className="sr-only" htmlFor="c-company">Company or organisation (optional)</label>
        <input
          id="c-company"
          value={form.company}
          onChange={set("company")}
          placeholder="company"
          autoComplete="organization"
          className={`${blank} w-[9ch]`}
        />
        . I&apos;d like to talk about
        <label className="sr-only" htmlFor="c-topic">What you&apos;d like to talk about</label>
        <select
          id="c-topic"
          required
          value={form.topic}
          onChange={set("topic")}
          className={`${blank} max-w-full cursor-pointer ${form.topic ? "" : "text-muted/50"}`}
        >
          <option value="" disabled>
            choose a service
          </option>
          {contactPage.topics.map((t) => (
            <option key={t} value={t} className="text-text">
              {t}
            </option>
          ))}
        </select>
        . You can reach me at
        <label className="sr-only" htmlFor="c-email">Your email</label>
        <input
          id="c-email"
          type="email"
          required
          value={form.email}
          onChange={set("email")}
          placeholder="your email"
          autoComplete="email"
          className={`${blank} w-[12ch]`}
        />
        .
      </p>

      <label htmlFor="c-details" className="mt-10 block text-[10px] uppercase tracking-[0.3em] text-muted">
        Anything else we should know? (optional)
      </label>
      <textarea
        id="c-details"
        rows={3}
        value={form.details}
        onChange={set("details")}
        placeholder="Timeline, budget, a link to your brief…"
        className="mt-3 w-full resize-y border-0 border-b-2 border-black/25 bg-transparent py-2 text-base outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
      />

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">
          Something went wrong. Please try again, or email us directly below.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group mt-8 inline-flex items-center gap-3 border-2 border-black bg-accent px-10 py-5 text-xs uppercase tracking-[0.2em] text-black transition-all hover:-translate-y-1 hover:bg-cream disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}
