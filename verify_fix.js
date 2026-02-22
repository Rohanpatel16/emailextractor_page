/**
 * Verification Script for Email Cleaning Logic
 * This script tests the regex and replacement logic implemented in extractor.js
 */

const testCases = [
    { input: "-anu.yadav@lyftr.in", expected: "anu.yadav@lyftr.in" },
    { input: "aamir.makda@choiceindia.com.", expected: "aamir.makda@choiceindia.com" },
    { input: "ehk.gujarat@subahotels.com...", expected: "ehk.gujarat@subahotels.com" },
    { input: "somankabetal@urbancompany.com.", expected: "somankabetal@urbancompany.com" },
    { input: "---test@example.com---", expected: "test@example.com" },
    { input: "...dot@test.co.in...", expected: "dot@test.co.in" },
    { input: "  spaces@test.com  ", expected: "spaces@test.com" }
];

function processExtraction(text) {
    // Logic from extractor.js
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
    const matches = text.match(emailRegex) || [];

    return matches.map(email => {
        // Remove ANY number of leading/trailing dots, hyphens, or spaces
        return email.toLowerCase().trim().replace(/^[.-]+|[.-]+$/g, '');
    }).filter(email => {
        // Basic validation: must have @ and at least one dot in domain part, and not end with a dot
        const parts = email.split('@');
        return parts.length === 2 &&
            parts[1].includes('.') &&
            !email.endsWith('.') &&
            email.length > 5;
    });
}

console.log("Running Extraction Logic Tests...\n");

let passed = 0;
testCases.forEach(({ input, expected }, index) => {
    const result = processExtraction(input)[0]; // We expect one match per input
    const isMatch = result === expected;

    if (isMatch) {
        console.log(`✅ [PASS] Test ${index + 1}: "${input}" -> "${result}"`);
        passed++;
    } else {
        console.log(`❌ [FAIL] Test ${index + 1}:`);
        console.log(`   Input:    "${input}"`);
        console.log(`   Expected: "${expected}"`);
        console.log(`   Actual:   "${result}"`);
    }
});

console.log(`\nResults: ${passed}/${testCases.length} tests passed.`);

if (passed === testCases.length) {
    console.log("\nCONCLUSION: The cleaning logic is working perfectly! 🚀");
    process.exit(0);
} else {
    console.log("\nCONCLUSION: One or more tests failed. Logic needs refinement.");
    process.exit(1);
}
