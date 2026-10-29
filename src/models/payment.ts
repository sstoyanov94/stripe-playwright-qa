export const PAYMENT_STATUSES = ['pending', 'succeeded', 'failed'] as const;
export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];

export const CURRENCIES= ['eur', 'usd', 'gbp'] as const;
export type Currency = (typeof CURRENCIES)[number];

export interface PayIn{
    id: string,
    amount: number,
    currency: Currency,
    status: PaymentStatus,
    createdAt: number, //unix timestamp, seconds
    description?: string,
    refundedAmount: number
}

export const REFUND_STATUSES = ['pending', 'succeeded', 'failed'] as const;
export type RefundStatus = (typeof REFUND_STATUSES)[number];

export const REFUND_REASONS = ['duplicate', 'fraudulent', 'requested_by_customer'] as const;
export type RefundReason = (typeof REFUND_REASONS)[number];

export interface Refund {
    id: string,
    payInId: string,
    amount: number,
    status: RefundStatus,
    reason?: RefundReason
}