export const contactTitle = {
  pt: "Entre em Contato",
  en: "Contact Us"
};

export const formLabels = {
  pt: {
    name: "Nome:",
    email: "E-mail:",
    subject: "Assunto:",
    message: "Mensagem:",
    send: "Enviar"
  },
  en: {
    name: "Name:",
    email: "E-mail:",
    subject: "Subject:",
    message: "Message:",
    send: "Submit"
  }
};

export const formValidationErrors = {
  pt: {
    nameRequired: "Nome é obrigatório",
    emailRequired: "Email é obrigatório",
    emailInvalid: "Email inválido",
    subjectRequired: "Assunto é obrigatório",
    messageRequired: "Mensagem é obrigatória"
  },
  en: {
    nameRequired: "Name is required",
    emailRequired: "Email is required",
    emailInvalid: "Invalid email",
    subjectRequired: "Subject is required",
    messageRequired: "Message is required"
  }
};

export const formPlaceholders = {
  pt: {
    name: "Seu Nome",
    email: "seu@email.com",
    subject: "Assunto",
    message: "Sua mensagem aqui..."
  },
  en: {
    name: "Your Name",
    email: "your@email.com",
    subject: "Subject",
    message: "Your message here..."
  }
};

export const followUs = {
  pt: {
    title: "Nos Acompanhe",
    description: "Pequenas ações, impacto real. Nos siga para fazer parte dessa jornada."
  },
  en: {
    title: "Follow Us",
    description: "Small steps. Real impact. Follow us and be part of this journey."
  }
};

export const whatsappConfig = {
  phoneNumber: "5511999999999",
  apiUrl: "https://api.whatsapp.com/send"
};

export const whatsappMessage = {
  pt: (name: string, subject: string, message: string, email: string) =>
    `Oi, sou ${name}. Quero falar sobre ${subject}:\n\n${message}\n\nMeu email é: ${email}`,
  en: (name: string, subject: string, message: string, email: string) =>
    `Hi, I'm ${name}. I want to talk about ${subject}:\n\n${message}\n\nMy email is: ${email}`
};

export const socialLinks = {
  instagram: "https://instagram.com/tamanduadigital",
  facebook: "https://facebook.com/tamanduadigital",
  youtube: "https://youtube.com/tamanduadigital"
};
