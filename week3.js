// Task 1: Reversing a Number
function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}
console.log("Reversed number:", reverseNumber(15243));

// Task 2: Alphabetizing Letters in a String
function alphabetize(str) {
    return str.split('').sort().join('');
}
console.log("Alphabetized string:", alphabetize('keyincollege'));

// Task 3: Getting a File Extension
function getFileExtension(filename) {
    return filename.split('.').pop();
}
console.log("File extension:", getFileExtension('document.pdf'));

// Task 4: Formatting the Current Date
function getCurrentDate() {
    let date = new Date();
    let mm = (date.getMonth() + 1).toString().padStart(2, '0');
    let dd = date.getDate().toString().padStart(2, '0');
    let yyyy = date.getFullYear();
    return {
        "mm-dd-yyyy": `${mm}-${dd}-${yyyy}`,
        "mm/dd/yyyy": `${mm}/${dd}/${yyyy}`,
        "dd-mm-yyyy": `${dd}-${mm}-${yyyy}`,
        "dd/mm/yyyy": `${dd}/${mm}/${yyyy}`
    };
}
console.log("Formatted date:", getCurrentDate());

// Task 5: Capitalizing the First Letter
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log("Capitalized string:", capitalize('keyin'));

// Task 6: Checking for a Period
function checkPeriod(str) {
    return str.includes('.') ? "Contains period" : "No period";
}
console.log("Period check:", checkPeriod('hello.world'));

// Task 7: Adding a Suffix to Numbers
function putSuffix(num) {
    if (!num) return "";
    let suffixes = ["th", "st", "nd", "rd"];
    let v = num % 100;
    return num + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}
console.log("Number with suffix:", putSuffix(22));
