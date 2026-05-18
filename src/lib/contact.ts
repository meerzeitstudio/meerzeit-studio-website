// Zentrale Kontaktdaten: hier einmalig anpassen
export const CONTACT = {
  email: "info@meerzeit.studio",
  // Telefon-/WhatsApp-Nummer (international, ohne Leerzeichen für wa.me)
  phoneDisplay: "+49 152 54975605",
  phoneE164: "4915254975605",
};

export const whatsappLink = (text = "Hallo Meerzeit Studio, ich habe eine Frage zu einer Event.") =>
  `https://wa.me/${CONTACT.phoneE164}?text=${encodeURIComponent(text)}`;
