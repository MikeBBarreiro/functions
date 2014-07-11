var prompt = require('sync-prompt').prompt;
/*
function increment (x){
  x++
  return x;
  }
//calling function
var z = increment(3);
console.log(z);
z = increment(7);
console.log(z);
z = increment(9);
console.log(z);
z = increment(12);
console.log(z);
//////////Suqar feet////////////
function square (j){
  j *= j;
    return j;
}

var k = square(8);
console.log(k);
k = square(10);
console.log(k);




function area ( x,y ) {
  var z = x*y;
  return z;
  //or return x * y;//
}

var a = area(10,15);
  console.log("Area of the room is " + a + " square feet");

/////////Using the are function with a new function/////////////

function volume (length, width, height){
  return area(length, width) * height;
}

var a = volume (15,15,20);
console.log('The volume of the suqare is ', a);

////////////HotMess////////////////////


var z

z = area ( square(increment(3) + increment(4) ), square(2));
console.log(z);

/////////////No Argument///////////////////////


function sayHello(){
console.log('Hello');
}
sayHello( );

////////////Make upper///////


function  makeupper(x){
  return x.toUpperCase();
}
console.log(makeupper('hello'));

//  another make upper example  //

function makeUpper(string){
  return string.toUpperCase();
}

var z;

z = makeUpper('hello');
console.log(z);



////   can drink  ////


function canDrink(a){
 ///or//  return ( a >= 21 )   ///
  if ( a >= 21){
 return true;
 }else {
   return false;
}
}
var age
age = canDrink(17);
console.log(age);

///// Letter Grade /////
*/

var options = prompt('What is your Grade? ');

function letterGrade( grade ){
  if ( grade >= 90){
  return 'Grade: A';
}else if (grade >= 80){
   return 'Grade: B';
}else if (grade >= 70 ){
    return 'Grade: C';
}else if (grade >=  60){
    return 'Grade: D';
}else {
(grade <= 59)
    return 'Grade: F';
}
}


var z;
z = letterGrade(options);

console.log(z);

/*
//////Add Tax/////

function addTax(cost, percentage){
 return cost + (cost * (percentage / 100));
}

var T

T = addTax(100, 10);

console.log( T );


////// Array's /////

numbs = [3, 4, 5];

starting = 0;

function sum (array ){
 for ( i = 0; i < array.length; i++){
  starting += array[i];

}
return starting;
}

var t =sum(numbs);

console.log(t);



//////  factorial (NOT DONE)  /////

function factorial(n) {
  var product = 1;

  for(var i = 2; i<= n; i++){
    product *= i;
  }
  return product;

}
var z
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

*/
//////Random Numbers (not done)//////

function rollDie( ){
return Math.floor(Math.random() * 6) + 1;
}

var z;

  for(var i = 0; i < 10; i++){
  z = rollDie( );
}



///////////isPair///////////



function isPair(roll1, roll2){
  return  roll1 === roll2;
  }
  var z

    for(var i = 0; i < 10; i++){
  z = rollDie();
  console.log('roll: ', z);

}

///////countPair2///////


function countPairs(x){
  var count = 0;

  for( var i = 0; i < x; i++) {
    if (isPair(rollDie(),rollDie()));{
      count++;
  }
  }
  return count;
}
z = countPairs(10000);
console.log(z);

