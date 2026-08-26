"use client";
import React, { useState } from "react";

export function ContactForm({ embedded = false }: { embedded?: boolean }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE",
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject || "New Contact Form Submission",
                    message: formData.message,
                    from_name: "TFA Studios Website",
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    const wrapperClass = embedded
        ? "rounded-2xl border border-border bg-elevated p-6 md:p-8 scroll-mt-24"
        : "";

    if (status === "success") {
        return (
            <div id="contact-form" className={wrapperClass}>
                <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#fa6903]/20 mb-4">
                        <svg className="w-8 h-8 text-[#fa6903]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-extrabold text-[#fa6903]">Message Sent!</h3>
                    <p className="mt-2 text-muted">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                    <button
                        onClick={() => setStatus("idle")}
                        className="mt-4 text-sm text-[#fa6903] hover:underline"
                    >
                        Send another message
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div id="contact-form" className={wrapperClass}>
            {embedded && <h3 className="text-lg font-extrabold">Send Us a Message</h3>}
            <form onSubmit={handleSubmit} className={`${embedded ? "mt-6" : ""} space-y-4`}>
                <div>
                    <label className="sr-only">Full Name</label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full rounded-lg border border-border bg-elevated px-4 py-3 text-sm outline-none focus:border-[#fa6903] focus:ring-1 focus:ring-[#fa6903]/30 transition-colors placeholder:text-muted"
                        placeholder="Full Name"
                    />
                </div>
                <div>
                    <label className="sr-only">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full rounded-lg border border-border bg-elevated px-4 py-3 text-sm outline-none focus:border-[#fa6903] focus:ring-1 focus:ring-[#fa6903]/30 transition-colors placeholder:text-muted"
                        placeholder="Email Address"
                    />
                </div>
                <div>
                    <label className="sr-only">Subject / Service Type</label>
                    <select
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full rounded-lg border border-border bg-elevated px-4 py-3 text-sm outline-none focus:border-[#fa6903] focus:ring-1 focus:ring-[#fa6903]/30 transition-colors text-text"
                    >
                        <option value="">Subject / Service Type</option>
                        <option value="Video Production">Video Production</option>
                        <option value="Branding & Design">Branding & Design</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Event Coverage">Event Coverage</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label className="sr-only">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={embedded ? 5 : 4}
                        className="w-full rounded-lg border border-border bg-elevated px-4 py-3 text-sm outline-none focus:border-[#fa6903] focus:ring-1 focus:ring-[#fa6903]/30 transition-colors placeholder:text-muted"
                        placeholder="Message"
                    />
                </div>

                {status === "error" && (
                    <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                )}

                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#fa6903] px-5 py-3 text-sm font-semibold text-black hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    {status === "loading" ? (
                        <>
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                        </>
                    ) : (
                        "Send Message"
                    )}
                </button>
            </form>
        </div>
    );
}
