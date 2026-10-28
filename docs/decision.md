## Union types instead of enums for statuses and currencies

**Why:** Stripe returns statuses and currencies as plain strings in JSON.
A union accepts them directly, without casting.

**Trade-off:** A union doesn't exist at runtime, so it can't be iterated.
I define the values once in an `as const` array and derive the type from it,
which gives both a runtime list for parameterized tests and a type

## ESM instead of CommonJS

**Why:** ESM is the standard; Playwright and modern libraries support it.
CJS is mostly for legacy projects.

**Trade-off:** Relative imports need an explicit `.js` extension
(e.g. `./payment.js`), even though the source file is `.ts`