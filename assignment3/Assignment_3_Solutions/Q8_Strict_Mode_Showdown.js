"use strict";

// Q8 – Strict Mode Showdown
// In strict mode, duplicate parameter names are a SyntaxError.
// Assignment to undeclared `total` and deleting an unqualified identifier are also illegal.
// This file uses a corrected version so it can run successfully in strict mode.

function demo(a, b) {
    let total = 10;
    console.log(`a=${a}, b=${b}, total=${total}`);
    // `delete total` is not allowed for a local variable in strict mode.
    total = 0;
    console.log(`total after update=${total}`);
}
demo(5, 10);

// To compare without strict mode, copy the original function into a separate file
// without "use strict". In sloppy mode duplicate parameters may be accepted and
// assigning an undeclared name may create a global (depending on the environment).
// Avoid relying on that behavior; declare variables with let, const, or var.
