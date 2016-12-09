/**
 * String concatting en templating
 * 
 * ES6 adds a templating literal syntax that helps with creating multiline 
 * strings by using backticks and embedded expressions.
 * 
 * http://exploringjs.com/es6/ch_template-literals.html
 */
 
var person = { name: 'Marcel', age: '28' };
//Old school way
var str = 'Hello ' + person.name + ', \n' +
         'you are ' + person.age + ' years old';
log(str);


////--> Rewrite the string to a template literal and use embedded syntax expressions
////--> to insert the person properties.
