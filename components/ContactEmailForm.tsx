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
      className="w-full border border-white/10 bg-black/35 p-6 backdrop-blur-[2px] sm:p-8"
    >
      <div className="grid gap-5">
        <label className="grid gap-2 text-[10px] font-medium uppercase tracking-[0.28em] text-white/52">
          Name
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            value={values.name}
            onChange={(event) =>
              setValues((current) => ({ ...current, name: event.target.value }))
            }
            className="h-12 border border-white/12 bg-white/[0.03] px-4 text-[14px] normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#EF4444]"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2 text-[10px] font-medium uppercase tracking-[0.28em] text-white/52">
          Number
          <input
            type="tel"
            name="number"
            required
            autoComplete="tel"
            value={values.number}
            onChange={(event) =>
              setValues((current) => ({ ...current, number: event.target.value }))
            }
            className="h-12 border border-white/12 bg-white/[0.03] px-4 text-[14px] normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#EF4444]"
            placeholder="Your phone number"
          />
        </label>

        <label className="grid gap-2 text-[10px] font-medium uppercase tracking-[0.28em] text-white/52">
          Email
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={(event) =>
              setValues((current) => ({ ...current, email: event.target.value }))
            }
            className="h-12 border border-white/12 bg-white/[0.03] px-4 text-[14px] normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#EF4444]"
            placeholder="Your email"
          />
        </label>

        <label className="grid gap-2 text-[10px] font-medium uppercase tracking-[0.28em] text-white/52">
          Reason To Contact
          <textarea
            name="reason"
            required
            rows={6}
            value={values.reason}
            onChange={(event) =>
              setValues((current) => ({ ...current, reason: event.target.value }))
            }
            className="min-h-[160px] resize-none border border-white/12 bg-white/[0.03] px-4 py-4 text-[14px] normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#EF4444]"
            placeholder="Tell us what you need."
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-12 items-center justify-center border border-[#EF4444] bg-[#EF4444] px-6 text-[10px] font-medium uppercase tracking-[0.28em] text-white transition-colors hover:bg-[#ef4444]/90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Submit Inquiry"}
        </button>

        {statusMessage ? (
          <p
            className={`text-[12px] leading-6 ${
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
