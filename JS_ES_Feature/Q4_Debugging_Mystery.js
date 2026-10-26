"use strict";

// Q4 – Debugging Mystery
function showMessage() {
    // Strict mode does not allow assignment to an undeclared variable.
    const greeting = "Welcome";
    console.log(greeting);
}
showMessage();

// VS Code debugger:
// 1. Click beside the console.log line to set a breakpoint.
// 2. Start Run and Debug (F5).
// 3. Add "greeting" to WATCH.
// 4. Check CALL STACK: showMessage is the active function, then the global script.
