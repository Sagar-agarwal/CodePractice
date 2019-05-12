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
2;
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

// Shorthand Character classes
re = /\w/; // (\w) Word characters - alphanumeric or _
re = /\w+/; // (\w+) One or more Word characters - alphanumeric or _
re = /\W/; // (\W) Non work characters - anything but alphanumeric or _
re = /\d/; // (\d) Any digit 1 time
re = /\d+/; // (\d+) Any digit 1 or more times
re = /\D/; // (\D) Any non digit char
re = /\s/; // (\s) White space
re = /\S/; // (\S) White space
re = /hell\b/i; // (\b) word boundary

// Assertions
re = /x(?=y)/; // Match only if x is followed by y
re = /x(?!y)/; // Match only if x is followed by anything but y

// Practice
re = /(<[A-Za-z0-9]{3,4}>)*/g;

// Match string
const str = "<foo> <bar> new </bar> </foo>";

// Results
const result = re.exec(str);
console.log(result);

reTest(re, str);
