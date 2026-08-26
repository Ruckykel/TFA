"use client";
import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { ContactForm } from "./ContactForm";

type ContactModalContextType = {
    openContactModal: () => void;
    closeContactModal: () => void;
};

const ContactModalContext = createContext<ContactModalContextType>({
    openContactModal: () => { },
    closeContactModal: () => { },
});

export const useContactModal = () => useContext(ContactModalContext);

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openContactModal = useCallback(() => setIsOpen(true), []);
    const closeContactModal = useCallback(() => setIsOpen(false), []);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Close on Escape
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [isOpen]);

    return (
        <ContactModalContext.Provider value={{ openContactModal, closeContactModal }}>
            {children}

            {/* Modal overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Contact Form"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-[fadeIn_200ms_ease-out]"
                        onClick={closeContactModal}
                    />

                    {/* Modal content */}
                    <div className="relative z-10 w-full max-w-lg animate-[modalIn_300ms_ease-out]">
                        {/* Close button */}
                        <button
                            onClick={closeContactModal}
                            className="mb-3 ml-auto flex items-center gap-2 rounded-full border border-border bg-elevated backdrop-blur-md px-4 py-2 text-sm font-medium text-muted hover:bg-elevated hover:border-[#fa6903]/40 transition-all group"
                            aria-label="Close contact form"
                        >
                            <span>Close</span>
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                className="transition-transform group-hover:rotate-90"
                            >
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Form card with glassmorphism */}
                        <div className="rounded-2xl border border-border bg-bg shadow-elevated overflow-hidden">
                            {/* Accent gradient top bar */}
                            <div className="h-1 w-full bg-gradient-to-r from-[#fa6903] via-[#6366F1] to-[#fa6903]" />

                            <div className="p-6 md:p-8">
                                <div className="text-center mb-6">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#fa6903]/10 border border-[#fa6903]/20 mb-3">
                                        <svg
                                            className="w-5 h-5 text-[#fa6903]"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <rect x="2" y="4" width="20" height="16" rx="2" />
                                            <polyline points="22,4 12,13 2,4" />
                                        </svg>
                                    </div>
                                    <h2 className="text-xl font-extrabold text-text">Get in Touch</h2>
                                    <p className="mt-1 text-sm text-muted">
                                        We&apos;ll get back to you within 24 hours.
                                    </p>
                                </div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </ContactModalContext.Provider>
    );
}
