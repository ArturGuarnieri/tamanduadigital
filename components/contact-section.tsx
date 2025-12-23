"use client";

import * as React from "react";
import { useLanguage } from "@/contexts/language-context";
import {
  contactTitle,
  formLabels,
  formPlaceholders,
  formValidationErrors,
  followUs,
  socialLinks,
  whatsappConfig,
  whatsappMessage,
} from "@/content/contact";
import { Instagram, Facebook, Youtube } from "lucide-react";

function ContactForm() {
  const { language } = useLanguage();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const labels = formLabels[language];
  const placeholders = formPlaceholders[language];
  const validationErrors = formValidationErrors[language];
  const follow = followUs[language];

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = validationErrors.nameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = validationErrors.emailRequired;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = validationErrors.emailInvalid;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = validationErrors.subjectRequired;
    }

    if (!formData.message.trim()) {
      newErrors.message = validationErrors.messageRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const whatsappMsg = whatsappMessage[language](
      formData.name,
      formData.subject,
      formData.message,
      formData.email
    );

    const encodedMessage = encodeURIComponent(whatsappMsg);
    const whatsappLink = `${whatsappConfig.apiUrl}?phone=${whatsappConfig.phoneNumber}&text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappLink, "_blank");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold mb-3 text-[var(--color-primary-orange)]">
              {labels.name}
            </label>
            <input
              type="text"
              name="name"
              placeholder={placeholders.name}
              value={formData.name}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-600 dark:placeholder:text-gray-400 rounded-full border-0 outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
            />
            {errors.name && (
              <p className="text-red-500 dark:text-red-400 text-sm mt-2">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-3 text-[var(--color-primary-orange)]">
              {labels.email}
            </label>
            <input
              type="email"
              name="email"
              placeholder={placeholders.email}
              value={formData.email}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-600 dark:placeholder:text-gray-400 rounded-full border-0 outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
            />
            {errors.email && (
              <p className="text-red-500 dark:text-red-400 text-sm mt-2">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-3 text-[var(--color-primary-orange)]">
              {labels.subject}
            </label>
            <input
              type="text"
              name="subject"
              placeholder={placeholders.subject}
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-600 dark:placeholder:text-gray-400 rounded-full border-0 outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
            />
            {errors.subject && (
              <p className="text-red-500 dark:text-red-400 text-sm mt-2">
                {errors.subject}
              </p>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-3 text-[var(--color-primary-orange)]">
              {labels.message}
            </label>
            <textarea
              name="message"
              placeholder={placeholders.message}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-600 dark:placeholder:text-gray-400 rounded-3xl border-0 outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all resize-none"
              rows={6}
            />
            {errors.message && (
              <p className="text-red-500 dark:text-red-400 text-sm mt-2">
                {errors.message}
              </p>
            )}
          </div>

          <div className="flex justify-center pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-12 py-3 text-white font-bold text-lg rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-[var(--color-primary-orange)] hover:opacity-90"
            >
              {labels.send}
            </button>
          </div>
        </form>
      </div>

      <div className="lg:col-span-1">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-[var(--color-primary-blue)]">
          {follow.title}
        </h3>

        <div className="space-y-4">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 w-full justify-center bg-[var(--color-primary-orange)]"
          >
            <Instagram size={24} />
            <span>@tamanduadigital</span>
          </a>

          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 w-full justify-center bg-[var(--color-primary-orange)]"
          >
            <Facebook size={24} />
            <span>@tamanduadigital</span>
          </a>

          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 w-full justify-center bg-[var(--color-primary-orange)]"
          >
            <Youtube size={24} />
            <span>@tamanduadigital</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function ContactSection() {
  const { language } = useLanguage();

  return (
    <section id="contact-us" className="w-full mt-12 md:mt-16">
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[var(--color-primary-blue)]">
          {contactTitle[language]}
        </h2>
      </div>
      <ContactForm />
    </section>
  );
}
