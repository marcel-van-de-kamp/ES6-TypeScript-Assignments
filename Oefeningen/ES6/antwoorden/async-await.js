/**
 * Asynchronous JavaScript can be written synchronously using the async and await api.
 * The async and await api is a special syntax for working with Promises, which makes it easier to read and use.
 * 
 * https://javascript.info/async-await
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 * https://developer.mozilla.org/en-US/docs/Web/API/Response#Methods
 */

function addOneAsyncPromise(value) {
    const fetchPromise = fetch('https://api.github.com/users/mpoelstra');
    const jsonPromise = fetchPromise.then(function (response) {
        return response.json();
    });

    const promise = jsonPromise.then(function (data) {
        return data.bio;
    });

    return promise;
}

addOneAsyncPromise(1).then(console.log);


/** re-write the above function using async and await syntax. */
// -->> add the async keyword.
async function getMarkBioAsyncAwait() {
    // -->> invoke the native fetch function to get Mark his github profile and store the result in a const 'response'.
    // -->> use the await keyword to turn the asynchronous call into synchronous code.
    const response = await fetch('https://api.github.com/users/mpoelstra');
    // -->> invoke the json  function on the data variable and store the result in a const 'data'. 
    // -->> The json function is also asynchronous and returns a promise, so use the await keyword again.
    const data = await response.json();
    // -->>  finally, we can access the properties on the data object. return 'data.bio'.
    return data.bio;

}
  // -->> Call the getMarkBioAsyncAwait function
  // -->> and call the .then function on the promise it returns.
  // -->> console.log the result
