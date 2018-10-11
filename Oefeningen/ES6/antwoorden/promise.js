/**
 * JavaScript developers used to have the problem of needing 
 * to call callback function in callback function in callback function, etc.
 * Also revered to as 'the callback hell'.
 * To solve this problem, promises where called into live!
 * 
 * https://scotch.io/tutorials/javascript-promises-for-dummies
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */


/** This function adds one to the value and when its done,
  it invokes a callback function that must also be supplied as an argument. **/
  function addOneAsyncCallback(value, callback) {
    const plusOne = value + 1;
    
    setTimeout(function() {
      callback(plusOne);  
    }, 2000);
  }
  
  addOneAsyncCallback(1, console.log);
  
  
  
  /** Instead of using a callback, use a promise to do the same as addOneAsyncCallback */
  function addOneAsyncPromise(value) {
    const plusOne = value + 1;
    
    // -->> Wrap the setTimeout with a new Promise (see link) 
    // -->> store the new Promise object in a const 'promise'.
    const promise = new Promise( function(resolve, reject) { 
      setTimeout(function() {
          // -->> invoke the resolve function with plusOne as parameter.
        resolve(plusOne);
      }, 2000);
    });
    
    //return the const promise;
    return promise;
  }
  
  // -->> Call the addOneAsyncPromise function
  // -->> and call the .then function on the promise it returns.
  // -->> console.log the return number plusone
  addOneAsyncPromise(1).then(console.log);