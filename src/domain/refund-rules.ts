import type { PayIn } from "../models/payment.js";


export function canRefund(payIn: PayIn, amount: number): boolean 
{
 if (!Number.isInteger(amount)) return false;
 if (amount <= 0) return false;
 if (payIn.status !== 'succeeded') return false;
 if (amount > payIn.amount - payIn.refundedAmount)return false;
 return true;
}