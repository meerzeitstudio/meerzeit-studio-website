// Zentrale Kontaktdaten – hier einmalig anpassen
export const CONTACT = {
  email: "hallo@meerzeit-studio.de",
  // Telefon-/WhatsApp-Nummer (international, ohne Leerzeichen für wa.me)
  phoneDisplay: "+49 151 234 567 89",
  phoneE164: "4915123456789",
};

export const whatsappLink = (text = "Hallo Meerzeit Studio, ich habe eine Frage zu einer Session.") =>
  `https://wa.me/${CONTACT.phoneE164}?text=${encodeURIComponent(text)}`;
