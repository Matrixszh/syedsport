"use client";

import { FormEvent, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";

type ContactFormValues = {
  name: string;
  number: string;
  email: string;
  reason: string;
};

const initialValues: ContactFormValues = {
  name: "",
  number: "",
  email: "",
  reason: "",
};

export default function ContactEmailForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusTone, setStatusTone] = useState<"idle" | "success" | "error">("idle");

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

  const isConfigured = useMemo(
    () => Boolean(serviceId && templateId && publicKey),
    [publicKey, serviceId, templateId],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isConfigured) {
      setStatusTone("error");
      setStatusMessage(
        "Add your EmailJS public env vars to enable form delivery.",
      );
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);
    setStatusTone("idle");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: values.name,
          phone_number: values.number,
          reply_to: values.email,
          sender_email: values.email,
          contact_reason: values.reason,
          message: values.reason,
        },
        {
          publicKey,
        },
      );

      setValues(initialValues);
      setStatusTone("success");
      setStatusMessage("Message sent successfully. We will get back to you soon.");
    } catch {
      setStatusTone("error");
      setStatusMessage("Something went wrong while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full border border-white/10 bg-black/35 p-4 backdrop-blur-[2px] sm:p-6 lg:p-8"
    >
      <div className="grid gap-4 sm:gap-5">
        <label className="grid gap-2 text-[9px] font-medium uppercase tracking-[0.26em] text-white/52 sm:text-[10px] sm:tracking-[0.28em]">
          Name
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            inputMode="text"
            value={values.name}
            onChange={(event) =>
              setValues((current) => ({ ...current, name: event.target.value }))
            }
            className="h-11 rounded-[10px] border border-white/12 bg-white/[0.03] px-3.5 text-[14px] normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#EF4444] sm:h-12 sm:px-4 sm:rounded-none"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2 text-[9px] font-medium uppercase tracking-[0.26em] text-white/52 sm:text-[10px] sm:tracking-[0.28em]">
          Number
          <input
            type="tel"
            name="number"
            required
            autoComplete="tel"
            inputMode="tel"
            value={values.number}
            onChange={(event) =>
              setValues((current) => ({ ...current, number: event.target.value }))
            }
            className="h-11 rounded-[10px] border border-white/12 bg-white/[0.03] px-3.5 text-[14px] normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#EF4444] sm:h-12 sm:px-4 sm:rounded-none"
            placeholder="Your phone number"
          />
        </label>

        <label className="grid gap-2 text-[9px] font-medium uppercase tracking-[0.26em] text-white/52 sm:text-[10px] sm:tracking-[0.28em]">
          Email
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={(event) =>
              setValues((current) => ({ ...current, email: event.target.value }))
            }
            className="h-11 rounded-[10px] border border-white/12 bg-white/[0.03] px-3.5 text-[14px] normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#EF4444] sm:h-12 sm:px-4 sm:rounded-none"
            placeholder="Your email"
          />
        </label>

        <label className="grid gap-2 text-[9px] font-medium uppercase tracking-[0.26em] text-white/52 sm:text-[10px] sm:tracking-[0.28em]">
          Reason To Contact
          <textarea
            name="reason"
            required
            rows={6}
            value={values.reason}
            onChange={(event) =>
              setValues((current) => ({ ...current, reason: event.target.value }))
            }
            className="min-h-[150px] resize-vertical rounded-[10px] border border-white/12 bg-white/[0.03] px-3.5 py-3.5 text-[14px] normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#EF4444] sm:min-h-[160px] sm:px-4 sm:py-4 sm:rounded-none"
            placeholder="Tell us what you need."
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col items-center gap-4 sm:mt-6 sm:items-start">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-w-[220px] h-11 items-center justify-center border border-[#EF4444] bg-[#EF4444] px-5 text-[10px] font-semibold uppercase tracking-[0.26em] text-white transition-colors hover:bg-[#ef4444]/90 active:scale-[0.995] disabled:cursor-not-allowed disabled:opacity-70 sm:min-w-[240px] sm:h-12 sm:px-6 sm:tracking-[0.28em]"
        >
          {isSubmitting ? "Sending..." : "Submit Inquiry"}
        </button>

        {statusMessage ? (
          <p
            className={`w-full text-center text-[12px] leading-6 sm:text-left ${
              statusTone === "success" ? "text-[#f1f1f1]/72" : "text-[#ff8c8c]"
            }`}
          >
            {statusMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
