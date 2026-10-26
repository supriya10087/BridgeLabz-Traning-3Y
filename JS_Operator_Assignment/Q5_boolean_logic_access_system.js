// Q5: Boolean Logic Access System

let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkAccess() {
    // Access is granted only when all three required conditions are true.
    const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    if (isSecure) {
        console.log("Secure");
    } else {
        console.log("Unsafe");
    }
}

console.log("Test 1: All conditions true");
checkAccess();

console.log("Test 2: Window open");
isWindowClosed = false;
checkAccess();

console.log("Test 3: Alarm off");
isWindowClosed = true;
isAlarmOn = false;
checkAccess();

// Restore values if you want to test another combination.
