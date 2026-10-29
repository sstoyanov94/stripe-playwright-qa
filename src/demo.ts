import type {PayIn} from "./models/payment.js";
import { canRefund } from "./domain/refund-rules.js";

const payIn: PayIn = {
    id: 'pi_001',
    amount: 1000,
    currency: 'usd',
    status: 'succeeded',
    createdAt: 1700000000,
    refundedAmount: 400,
}

const failedPayIn: PayIn = {...payIn, status:'failed'};

type RefundCase = {
    name: string;
    payIn: PayIn;
    amount: number;
    expected: boolean;
};

const cases: RefundCase[] = [
    {name:'refund of exact remaining amount', payIn: payIn, amount: 600, expected: true},
    {name:'refund of exceed remaining amount by 1', payIn: payIn, amount: 601, expected: false},
    {name:'refund of below remaining amount', payIn: payIn, amount: 599, expected: true},
    {name:'refund of zero amount', payIn: payIn, amount: 0, expected: false},
    {name:'refund of negative amount', payIn: payIn, amount: -1, expected: false},
    {name:'refund of positive amount 1 (boundary value)', payIn: payIn, amount: 1, expected: true},
    {name:'refund of amount with decimal point', payIn: payIn, amount: 550.50, expected: false},
    {name:'refund of NaN amount', payIn: payIn, amount: NaN, expected: false},
    {name:'refund of failed pay in', payIn: failedPayIn, amount: 60, expected: false},
];

for (const c of cases) {
    const actual = canRefund(c.payIn, c.amount);
    const result = actual === c.expected ? 'PASS' : 'FAIL';
    console.log(`${result}: ${c.name} (expected ${c.expected}, got ${actual})`);
    
}