/**
 * String concatting en templating
 * 
 * ES6 adds a templating literal syntax that helps with creating multiline 
 * strings by using backticks and embedded expressions.
 * 
 * 
 */
 
var person = { name: 'Marcel', age: '28' };
var str = 'Hello ' + person.name + ', \n' +
         'you are ' + person.age + ' years old';
log(str);


////--> Rewrite the string to a template literal and use embedded syntax expressions
////--> to insert the person properties.
var template = `Hello ${person.name},
                you are ${person.age} years old`;
log(template);