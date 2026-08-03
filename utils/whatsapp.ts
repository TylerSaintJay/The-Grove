// utils/whatsapp.ts

const WHATSAPP_NUMBER = '000000000'; // Replace with actual WhatsApp Business number

export const generateWhatsAppLink = (item: string, delivery: string): string => {
  const message = `Hello Grove Concierge, I would like to lock in an allocation for ${item} from LOT 001. Please send Instant EFT details for fulfillment via ${delivery}.`;
  
  // Encode the message for a URL
  const encodedMessage = encodeURIComponent(message);
  
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};
