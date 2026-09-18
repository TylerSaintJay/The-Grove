// utils/whatsapp.ts

// Replace with target WhatsApp Business line when provided (e.g. 27XXXXXXXXX)
const WHATSAPP_NUMBER = '27720000000'; 

export type DeliveryMethod = 'uber' | 'courier';

export interface OrderItem {
  name: string;
  price: number;
  quantity?: number;
  strain?: string;
}

export const generateWhatsAppLink = (
  productName: string,
  price: number,
  deliveryMethod: DeliveryMethod = 'uber',
  strain: string = 'White Widow • AAA'
): string => {
  const deliveryText =
    deliveryMethod === 'uber'
      ? 'Same-Day Metro Express (Uber Connect — JHB Only • Calculated upon live pin drop)'
      : price >= 600
      ? 'Nationwide Overnight (The Courier Guy • FREE for orders R600+)'
      : 'Nationwide Overnight (The Courier Guy • R95 Flat Rate)';

  const lines = [
    'Hello Grove Concierge,',
    '',
    'I would like to claim an allocation for:',
    `• *Product:* ${productName} (R${price})`,
    `• *Strain Batch:* ${strain} [LOT SECTION: 001]`,
    `• *Fulfillment:* ${deliveryText}`,
    '',
    'Please provide Instant EFT / eWallet settlement details to lock in my allocation from LOT 001.',
  ];

  const message = lines.join('\n');
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};
