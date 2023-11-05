let bar;
// this has an asynchronous signature, but calls callback synchronously
function someAsyncApiCall(callback) {
  setTimeout(callback, 0);
  setTimeout(() => console.log('Baraa'), 0);
  setTimeout(() => console.log('Mirghani'), 0);
}
// the callback is called before `someAsyncApiCall` completes.
someAsyncApiCall(() => {
  // since someAsyncApiCall hasn't completed, bar hasn't been assigned any value
  console.log('bar', bar); // undefined
});
bar = 1;
