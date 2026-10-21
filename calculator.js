// function of add
function add(a, b) {
    return a + b;
}

// function of subtract

function subtract(a, b) {
    return a - b;
}

// function of multiply

function multiply(a, b) {
    return a * b;
}

// function of divide
function divide(a, b) {
    if (b === 0) {
        return "Error: cannot divide by zero";
    }

    return a / b;
}
// function of modulus

function modulus(a, b) {
    return a % b;
}
// function of power

function power(a, b) {
    return a ** b;
}

function computeTotal(price, qty, vatRate) {
    let subtotal = price * qty;
    let total = subtotal * (1 + vatRate);

    return Number(total.toFixed(2));
}

console.log("=== MY CALCULATOR ===");

console.log("12 + 8 =", add(12, 8));
console.log("12 - 8 =", subtract(12, 8));
console.log("12 * 8 =", multiply(12, 8));
console.log("12 / 8 =", divide(12, 8));
console.log("17 % 5 =", modulus(17, 5));
console.log("2 ** 10 =", power(2, 10));
