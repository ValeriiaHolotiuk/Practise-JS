// Task 1: Building a Domain Name
let label = "keyincollege";
let tld = "ca";
let domainName = label + "." + tld;
console.log("Domain Name:", domainName);

// Task 2: Checking a Trusted Domain
let isKeyin = domainName === "keyincollege.ca";
console.log("Is Keyin College Domain:", isKeyin);

// Task 3: Flagging Suspicious Domains
let isNotKeyin = !isKeyin;
console.log("Suspicious Domain Detected:", isNotKeyin);

// Task 4: Generating IP Addresses for Devices
let byte1 = Math.floor(Math.random() * 256);
let byte2 = Math.floor(Math.random() * 256);
let byte3 = Math.floor(Math.random() * 256);
let byte4 = Math.floor(Math.random() * 256);
let ipAddress = `${byte1}.${byte2}.${byte3}.${byte4}`;
console.log("Generated IP Address:", ipAddress);

// Task 5: Creating a Multiplication Table
let table = 12;
for (let i = 1; i <= 10; i++) {
    console.log(`${table} X ${i} = ${table * i}`);
}

// Task 6: Sorting Shipment Weights
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log("Even:", i);
    } else {
        console.log("Odd:", i);
    }
}

// Task 7: Summing Even Weights
let sumEven = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    }
}
console.log("Sum of Even Weights:", sumEven);

// Task 8: Identifying Perfect Fund Allocations
let allocation = 28;
let sumDivisors = 0;
for (let i = 1; i < allocation; i++) {
    if (allocation % i === 0) {
        sumDivisors += i;
    }
}
console.log(`${allocation} is a Perfect Allocation:`, sumDivisors === allocation);

// Task 9: Validating Product IDs
let productID = 31;
let isPrime = true;
if (productID < 2) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(productID); i++) {
        if (productID % i === 0) {
            isPrime = false;
            break;
        }
    }
}
console.log(`Product ID ${productID} is Prime:`, isPrime);