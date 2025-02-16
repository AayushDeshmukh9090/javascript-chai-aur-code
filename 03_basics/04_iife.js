//Immediately Invoked Function Expressions (IIFE): executes only once , execute immediately and do not require explicit calls,are not reusable like normal functions
//                                         they cannot declare any global variables.

//when to use: 1. When you need a function only once.
/// 2. When you want to avoid polluting the global scope.
// 3. When you need to execute async code immediately (like fetching data).

(function(){
    console.log("this executes only once!!")
})();

(function hello(){
    //named IIFE
    console.log("this executed only once2!!!")
})()