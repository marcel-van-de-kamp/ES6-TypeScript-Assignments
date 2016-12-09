/**
 * ES6 brings a new object assignment syntax called 'destructering'.
 * 
 * The destructuring assignment syntax is a JavaScript expression that makes it
 * possible to extract data from arrays or objects into distinct variables.
 * 
 * Destructuring is a convenient way of extracting multiple values from data stored
 * in (possibly nested) objects and Arrays. It lets you extract multiple properties 
 * from an object via an object pattern. It can be used in locations that 
 * receive data, such as the left-hand side of an assignment. 
 * 
 * http://exploringjs.com/es6/ch_destructuring.html
 * http://www.2ality.com/2015/01/es6-destructuring.html
 */

//ES5 dealing with objects and nested properties
var person = {
  first: 'Marcel',
  last: 'van de Kamp',
  details: {
    city: 'Groningen',
    street: 'Europaweg',
    number: 31,
    postalCode: '9723 AS',
    geoLocation: [52.358778, 6.667136] //latitude, longitude
  }
};
var f = person.first,
    s = person.details.street + ' ' + person.details.number,
    lat = person.details.geoLocation[0],
    long = person.details.geoLocation[1]; 


////--> Use object destructering to make first and last available as 
////--> global vars 'firstname' and 'lastname' and print them with console.log


////--> Use array destructering to extract the lattitude and longitude from the array
////--> 'geoLocation' to the global vars 'longitude' and 'latitude' and print them with console.log


var address = { };
////--> Use object destructering to make the street and number available on a 
////--> the address object and print them with console.log. 

