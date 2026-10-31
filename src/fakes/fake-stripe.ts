import type { PayIn } from "../models/payment.js";

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

export async function createPaymentIntent(amount: number): Promise<PayIn> {
    await sleep(1000);
    if (amount <= 0){
        throw new Error ('invalid_amount');
    }
    return {amount, status: 'succeeded', refundedAmount: 0, id: `pi_${crypto.randomUUID()}`, currency: 'eur', createdAt: Math.floor(Date.now() / 1000)}
}