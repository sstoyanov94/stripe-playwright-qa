## Union types instead of enums for statuses and currencies

**Why:** Stripe returns statuses and currencies as plain strings in JSON.
A union accepts them directly, without casting.

**Trade-off:** A union doesn't exist at runtime, so it can't be iterated.
I define the values once in an `as const` array and derive the type from it,
which gives both a runtime list for parameterized tests and a type