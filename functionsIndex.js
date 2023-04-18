var x = 1;
fun1();
fun2();
console.log(x);


function fun1(){
    var x = 10;
    console.log(x);
}

function fun2(){
    var x = 200;
    console.log(x);
}

//Whats happening here:

//first all veriables get assigned with undefined and function points to its code in body by default.
//when code runs now var x will get its value 1.
//then fun1, fun2 will be invoked then x will get console log.
//all this things happend for each function like for fun1 first x inside it get undefined and when code runs it gets its value 10.
//execution context gets created for each functions.