function squareroot()
{
    var squareroot=prompt("Please enter a number for squareroot");
    var square=Math.sqrt(squareroot)
    console.log("The square root of the number "+ squareroot +" is " + square +"." );
}
squareroot();
function cuberoot(){
    var cuberoot=prompt("Please enter a number for cuberoot");
    var cube=Math.cbrt(cuberoot);
    console.log("The cuberoot of the number "+ cuberoot +" is "+ cube  +".");
}
cuberoot();
function square(){
    var square=prompt("Please enter a number for square");
    var number=square*square
    console.log("The square of the number " + square  + " is " + number + ".");
}
square();
function cube()
{
     var cube=prompt("Please enter a number for cube");
     var answer=cube*cube*cube;
     console.log("The cube of the number "+ cube +" is " + answer  + ".");
}
cube();