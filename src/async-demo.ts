import { createPaymentIntent } from "./fakes/fake-stripe.js";

console.time('not simulteniously 2 sec expected');
console.log(await createPaymentIntent(1100));
console.log(await createPaymentIntent(2000));
console.timeEnd('not simulteniously 2 sec expected');

console.time('simulteniously 1 sec expected');
const [pi1, pi2] = await Promise.all([
    createPaymentIntent(1500),
    createPaymentIntent(2500),
])
console.log(pi1, pi2)
console.timeEnd('simulteniously 1 sec expected');

console.time('simulteniously allSettled 1 sec expected');
const result = await Promise.allSettled([
    createPaymentIntent(1000),
    createPaymentIntent(-5)
])
console.log(result);
console.timeEnd('simulteniously allSettled 1 sec expected');