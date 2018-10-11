/**
 * - (nearly) everything in JavaScript is an Object
 * - An Object is a hashmap with key value pairs
 *  - the key of an Object is always a string
 *  - the value can be anything, including strings, number, booleans, functions, arrays or objects
 * 
 * - JavaScript has 'type converting' (==) and strict comparison operators (===)
 * - Everything in JavaScript has an inherent Boolean value, generally known as truthy or falsy.
 * - JavaScript can be used to direcly manipulate the Document Object Model
 * 
 * 
 * Always use the strict (===) operator unless you have a reason to type convert (==)
 * 
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web
 * https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
 * https://www.sitepoint.com/javascript-truthy-falsy/
 */

///object, variable and function declarations
object1 = { };                          //create a new global empty object
function(){ }                           //decalre an anonymous function
function name(){ }                      //declare a new named function
var object2 = { };                      //assign an object to a (locally scoped) variable
var f = function(){ }                   //assign a function to a variable
var arr = [];                           //create a new array

//JavaScript data types
'string';                               //string
100;                                    //number
undefined;                              //undefined
null;                                   //null
false;                                  //boolean
obj = {};                               //object



/// - (nearly) everything in JavaScript is an Object
var o = {prop : 'hallo'};               // object literal syntax
var array = [1, 2, 3];                  // array literal syntax
function func() { }                     // function declaration
var funcie = function() { };            // function expression

//below comparisons are all true
o.prop === 'hallo';                     // dot notation
o['prop'] === 'hallo';                  // array/hashmap subscript notation
array[0] === 1;                         // array member reference by index
typeof array.forEach === 'function';    // dot notation (array is object, forEach is an method of that object)
typeof array['forEach'] === 'function'; // array/hashmap subscript notation
func.name === 'func';                   // dot notation, function is also an object
funcie['name'] === 'funcie';            // array/hashmap subscript notation

/// - JavaScript has 'type converting' (==) and strict comparison operators (===)
//The equality (==) operator converts the operands if they are not of the same type, then applies strict comparison.

//Below comparisons are all true
1   ==  1;
'1' ==  1;
1   == '1';
''  == false;                           // empty string converts to false
0   == false;                           // only the number 0 converts to false
0   == '';                              // both converted to boolean before compared
null == undefined;

//Below comparisons are all false
0 == undefined;
null !== undefined;

var object1 = {"value":"key"};
var object2 = {"value":"key"}; 
object1 == object2;                     // compared by internal reference


///The identity / strict equality operator (===) returns true if the operands are strictly equal with no type conversion.

//below comparisons are all true
1 === 1;
null === null;
'text' === 'text';
func === func;                          // compared by internal reference
typeof null === 'object';               // null is also an object
isNaN(NaN) === true;                    // NaN means 'Not a Number' and indicates that a value is not a legal number

var object3 = {"value": "key"};
object3 === object3;

//below comparisons are all false
1 === '1';
'' === false;
NaN === NaN;                            // NaN does not equal anything, including NaN.


// - Everything in JavaScript has an inherent Boolean value, generally known as truthy or falsy.

// The following values are always Falsy:
false;
0;                                      // number zero
'';                                     // (empty string)
null;                                   // null is an object but is falsy.
undefined;
NaN;

//so:
var zero = 0;
if(zero) {// Truthy/Falsy check
  //this will not be executed
}

// All other values are always Truthy, so:
var o = {};
if(o) {
  //this wil be executed
}










