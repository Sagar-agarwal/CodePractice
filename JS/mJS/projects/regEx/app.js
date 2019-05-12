function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matched the ${re.source}`);
    } else {
        console.log(`${str} did NOT matched the ${re.source}`);
    }
}

// Reg Ex
let re = /hello/;
re = /hello/i;

// Meta character
re = /^h/i; // (^) Must Starts with
re = /d!$/i; // ($) Must ends with
re = /^hello$/i; // (^ $) must begin and end with hello
re = /^h.llo/i; // (.) single wild character
re = /h*llo/i; // (*) Wild card for 0 or more character

re = /gra?e?y/i; // (?) optional character
re = /gra?e?\?/i; // (\) Escape Character - before the character to escape

// Brackets [] - character sets
re = /gr[ae]y/i; // (char) Must be mentioned character
re = /[GF]ray/; //
re = /[^GF]ray/; // ([^ ]) Match anything but mentioned characters
re = /[A-Z]ray/; // (upper case range) Match any upper case character
re = /[a-z]ray/; // (lower case range) Match any lower case character
re = /[A-Za-z]ray/; // (case range) Match any case character
re = /[0-9]ray/; // (digit range) March any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // ({digit}) Must match as mentioned number of char - after char
re = /Hel{2, 4}o/i; // ({min, max}) Must match as mentioned range of char - after char
re = /Hel{2,}o/i; // ({min,}) Must match atleast as mentioned number of char - after char

// Parenthesis - () - Grouping
re = /([0-9]x){3}/i; // (()) groups a combination to be processed together

// Match string
const str = "hello World! gray 5x8x5x";

// Results
const result = re.exec(str);
console.log(result);

reTest(re, str);
