// Task 1: Calculating the Area of a Circle
function calculateArea(r) {
    return Math.PI * r * r;
}
console.log(`The area of a circle with radius 5 is ${calculateArea(5).toFixed(2)}.`);

// Task 2: Simulating Dice Rolls
function roll(sides = 6) {
    return Math.floor(Math.random() * sides) + 1;
}
console.log("Rolling a 6-sided dice:", roll());
console.log("Rolling a 20-sided dice:", roll(20));

// Task 3: Converting Celsius to Fahrenheit
function convert(temp, scale = "C") {
    if (scale === "C") {
        return `${(temp * 9/5 + 32).toFixed(1)} F`;
    } else if (scale === "F") {
        return `${((temp - 32) * 5/9).toFixed(1)} C`;
    }
}
console.log("Converting 0C to Fahrenheit:", convert(0, "C"));
console.log("Converting 122F to Celsius:", convert(122, "F"));

// Task 4: Checking if All Numbers Are Less Than 50
function isUnder50(...nums) {
    return nums.every(num => num < 50);
}
console.log("All numbers under 50:", isUnder50(1, 2, 3, 5, 4, 65));

// Task 5: Summing Numbers
function sum(...nums) {
    return nums.reduce((acc, num) => acc + num, 0);
}
console.log("Sum of numbers:", sum(1, 2, 3));

// Task 6: Checking Multiples of 3
function isMultipleOfThree(num) {
    return num % 3 === 0;
}
console.log("Is 9 a multiple of 3:", isMultipleOfThree(9));

// Task 7: Applying Discounts
function applyDiscount(total, discount = 0) {
    return total - (total * (discount / 100));
}
console.log("Discounted price:", applyDiscount(100, 10));
console.log("No discount applied:", applyDiscount(100));

// Task 8: Converting Seconds to Readable Time
function formatTime(seconds) {
    let days = Math.floor(seconds / 86400);
    seconds %= 86400;
    let hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    let minutes = Math.round(seconds / 60);
    
    let parts = [];
    if (days > 0) parts.push(`${days} Day${days > 1 ? 's' : ''}`);
    if (hours > 0) parts.push(`${hours} Hour${hours > 1 ? 's' : ''}`);
    if (minutes > 0) parts.push(`${minutes} Minute${minutes > 1 ? 's' : ''}`);
    
    return parts.join(", ");
}
console.log("Formatted time:", formatTime(90061));
console.log("Formatted time:", formatTime(60));
console.log("Formatted time:", formatTime(7265));
