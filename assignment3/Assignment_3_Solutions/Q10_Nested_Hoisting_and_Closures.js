"use strict";

// Q10 – Nested Hoisting and Closures
function outer() {
    console.log(count); // undefined: outer's var declaration is hoisted.
    var count = 5;

    function inner() {
        console.log(count); // undefined: inner has its own local var count.
        var count = 10;
    }

    inner();
}
outer();

// Output above: undefined, undefined.
// Each function call creates its own execution context and local variables.

// Arrow-function version: the arrow does not create its own `this` or `arguments`,
// but it still has its own local variables. The local `count` below is separate.
function outerWithArrow() {
    console.log(count); // undefined
    var count = 5;

    const inner = () => {
        console.log(count); // 5: no inner `var count`, so lexical lookup finds outer count.
    };

    inner();
}
outerWithArrow();

// Debugger tip: add breakpoints at both console.log lines, press F5, and inspect
// CALL STACK. While inside inner, the stack contains inner and outer; after return,
// only outer remains, then the global script.
