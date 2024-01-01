//a Regular Expression (RegEx) is an object that describes a
//sequence of characters used for defining a search pattern. 


// any five letter string starting with a and ending with s.
//* /^a...s$/

// creating regular expression have two ways
//  1. cost regularExp = /abc/;
//  2. const regularExp = new RegExp('abc');

const regex = new RegExp(/^a...s$/);
console.log(regex.test('alias')); 
console.log(regex.exec('a...s')); 
 

//!-------------------------------------

// MetaCharacters
//  are characters that are interpreted in a special way by a RegEx engine. Here's a list of metacharacters:
// [] . ^ $ * + ? {} () \ |


// [] - Square brackets
// [abc] will match if the string you are trying to match contains any of the a, b or c.
// [a-e] is the same as [abcde].
// [1-4] is the same as [1234].
// [0-39] is the same as [01239].

// [^abc] means any character except a or b or c.

//!---------------------------------

// . - Period
// A period matches any single character (except newline '\n').

//!-------------------------------

// ^ - Caret
// The caret symbol ^ is used to check if a string starts with a certain character.

//-------
    //  abc	1 match
// ^ab 
    // acb	No match (starts with a but not followed by b)

//!----------------------------------------

// $ - Dollar
// The dollar symbol $ is used to check if a string ends with a certain character.

//!-------------------------------------------

// * - Star
// The star symbol * matches zero or more occurrences of the pattern left to it.

//!---------------------------------------------

// + -> Plus
// The plus symbol + matches one or more occurrences of the pattern left to it.

//!-------------------------------------

// ? -> Question Mark
// The question mark symbol ? matches zero or one occurrence
// of the pattern left to it.

//!-------------------------------------------------------

// {} - Braces
// Consider this code: {n,m}. This means at least n, 
// and at most m repetitions of the pattern left to it.

//!--------------------------------------------------------/

// | - Alternation
// Vertical bar | is used for alternation (or operator).

//!---------------------------------------------------

// () - Group
// Parentheses () is used to group sub-patterns. 
// For example, (a|b|c)xz match any string that matches either a or b or c followed by xz

//!----------------------------------------------------///////

// \ - Backslash
// Backslash \ is used to escape various characters including all metacharacters.

// \$a match if a string contains $ followed by a.
// Here, $ is not interpreted by a RegEx engine in a special way.

// If you are unsure if a character has special meaning or not,
// you can put \ in front of it. This makes sure the character is not treated in a special way.

//!------------------------------------------------------------------


