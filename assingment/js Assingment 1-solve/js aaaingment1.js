//  1. What is the output of this snippet of code?

function foo() {
    x = 1;
    function x() { }
    var x = '2';
    return x;
}
alert( typeof foo() );
//outout- string


// 2. What is the output of this snippet of code?

function foo() {
    return x;
    x = 1;
    
    function x() { }
    
    var x = '2';
}
console.log( typeof foo() );
//outout-  function 



//3. What is the output of this snippet of code?

var x = 1;
function foo() {
    x = 10;
    return;
    function x() {}
}
foo();
console.log( x ); 
//outout-  1