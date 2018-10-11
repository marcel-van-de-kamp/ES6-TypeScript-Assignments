/**
 * In its simplest form, a decorator is simply a way of wrapping one piece of code with another — literally “decorating” it. 
 * Decorators use a special syntax in JavaScript, whereby they are prefixed with an @ symbol and placed immediately before the code being decorated.
 * https://www.sitepoint.com/javascript-decorators-what-they-are/
 */


function add(x, y) {
    return x + y;
}

function log(wrapped) {
    return function () {
        console.log(`input: ${[...arguments]}`);
        const result = wrapped.apply(this, arguments);
        console.log(`output: ${result}`);

        return result;
    }
}

add = log(add);
add(1, 2); 