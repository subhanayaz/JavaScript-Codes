var a = 10;
var b = 5;

// output a = 5, b = 10

var c = b;
    b = a;
    a = c;
    console.log("The A value is " + a );
    console.log("The B value is " + b );