export const PAYMENT_STATUSES = ['pending', 'succeeded', 'failed', 'refunded'] as const;
export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];

export const CURRENCIES= ['eur', 'usd', 'gbp'] as const;
export type Currency = (typeof CURRENCIES)[number];