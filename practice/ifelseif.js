var area = "triangle";
var pi = 3.142, l = 5, b = 4, r = 3;
if (area == "circle") {
    console.log("The area of circle is : " + (pi * r ** 2));
}
else if (area == "triangle") {
    console.log("The area of triangle is : " + (l * b) / 2);
}
else if (area == "rectangle") {
    console.log("The area of square is : " + (l * b));
}
else {
    console.log("Please enter valid data")
}