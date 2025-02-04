// 1. Filtering Words in an Array
function getHello(array) {
    return array.filter(word => /hello/i.test(word)).join(', ');
}

// 2. Replacing Numbers in a String
function replaceTen(str) {
    return str.replace(/10/g, 'Ten');
}

// 3. Cleaning Up Text Formatting
function cleanUp(str) {
    return str
        .replace(/([.!?])\s{2,}/g, '$1 ') // Replace double spaces after punctuation
        .replace(/"/g, "'") // Convert double quotes to single quotes
        .replace(/\(\s*(.*?)\s*\)/g, '($1)'); // Remove spaces inside parentheses
}

// 4. Validating and Formatting Canadian Postal Codes
function fixPostalCode(postalCode) {
    postalCode = postalCode.trim().toUpperCase();
    if (!/^[A-Z]\d[A-Z] \d[A-Z]\d$/.test(postalCode.replace(/(.{3})/, '$1 '))) {
        throw new Error("Invalid postal code format");
    }
    return postalCode.replace(/(.{3})/, '$1 ');
}

// 5. Mapping Postal Codes to Provinces
function toProvince(postalCode, useLongForm = false) {
    const provinceMap = {
        'A': ['NL', 'Newfoundland and Labrador'],
        'B': ['NS', 'Nova Scotia'],
        'C': ['PE', 'Prince Edward Island'],
        'E': ['NB', 'New Brunswick'],
        'G': ['QC', 'Quebec'],
        'H': ['QC', 'Quebec'],
        'J': ['QC', 'Quebec'],
        'K': ['ON', 'Ontario'],
        'L': ['ON', 'Ontario'],
        'M': ['ON', 'Ontario'],
        'N': ['ON', 'Ontario'],
        'P': ['ON', 'Ontario'],
        'R': ['MB', 'Manitoba'],
        'S': ['SK', 'Saskatchewan'],
        'T': ['AB', 'Alberta'],
        'V': ['BC', 'British Columbia'],
        'X': ['NT', 'Northwest Territories'],
        'Y': ['YT', 'Yukon']
    };
    postalCode = fixPostalCode(postalCode);
    const province = provinceMap[postalCode[0]];
    return province ? (useLongForm ? province[1] : province[0]) : null;
}

// 6. Checking the First Character
function checkFirstChar(str) {
    return /^[A-Z]/.test(str) ? "String's first character is uppercase" : "String's first character is not uppercase";
}

// 7. Validating Email Addresses
function validEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// 8. Trimming Strings Without .trim()
function myTrimFunction(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

// 9. Validating HTML Tags
function validateHTML(tag) {
    return /^<([a-z]+)>$/i.test(tag);
}
