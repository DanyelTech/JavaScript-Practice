// 2020-10-09
// Author: Danny


// At the time I was following a course by Mosh Hamedani. I was copying and learning code here.
// Basically all the code here you can find in one of his JS courses.

//Objects 

// let person = {

//     name: 'Mosh',
//     age:30
// };

//Dot notation
// person.name = 'John';

//Bracket Notation 
// let selection = 'name';
// person[selection] = 'Mary';

// console.log(person.name);


//Arrays 

// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 'green';
// console.log(selectedColors);


//Functions


//Performing a task
// function greet(name, lastName) {
//     console.log('hello' + name + '' + lastName);
// }


// Calculatiing a value
// function square(number ) {
//     return number * number;
// }
// let number = square(2);
// console.log(square(2));



// greet('John');
// greet('Mary');



// Arithmatic operators

// let x = 10;
// let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

//Increment (++)
// console.log(x++);
// console.log(x);

// //Decrement (--)
// console.log(--x);

//Assignment operators


// let a = 10;

// a = a +5; 
// a += 5;

// a = a * 3;
// a*= 3;


// Comparasion operators

// let x = 1;

//Relational

// console.log(x > 0);
// console.log(x >= 1);
// console.log(x < 1);
// console.log(x <= 1);

//Equality
// console.log(x === 1);

//Strict Equality (Type + Value)
// console.log(1 === 1);
// console.log('1' === 1);

//Lose Equality
// console.log(1 == 1);
// console.log('1' == 1);

// Ternary Operators

//If a customer has more the 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

// let points = 1000;
// let type = points > 100 ? 'gold' : 'silver';

// console.log(type);


//Logical Operators

//Logical AND (&&)
//Returns TURE if both operands are TRUE
// console.log(true && true);
// console.log(false && true);
// Logical OR (||)
//Returns TRUE if one of the operands is TRUE
//Not (!)


// let highIncome = false;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;
// let almostEligibleForLoan = highIncome || goodCreditScore;

// //NOT (makes opposite)
// let applicationRefused =!eligibleForLoan

// console.log(eligibleForLoan);
// console.log(almostEligibleForLoan);
// console.log('Application Refused', applicationRefused);

//Operator Precedence


// let b = (2 + 3) * 4;

// console.log(b);

//Quiz

// let a = 'red';
// let b = 'blue';

// console.log(a);
// console.log(b);

// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);

//hour 
// If hour is between 6am and 12pm: Good morning!
// If hour is between 6am and 12pm: Good afternoon!
// Otherwise: Good evening!

//Switch case


// let role = 'moderator' ;

// switch (role) {
//     case 'guest':
//          console.log('Guest Us')
//          break;

//          case 'moderator':
//              console.log('Moderator User');
//              break;

//              default:
//                  console.log('Unkown User');
// }

// if (role === 'guest') console.log('Guest');
// else if (rold === 'moderator') console.log('Moderator');
// else console.log('Unknown User')


//For loop

// for (let i = 1; i <= 5; i++) {
//  if ( i % 2 !== 0) console.log(i);
// }



// While loop

// let i = 0;
// while (i <= 5) {
//     if ( i % 2 !== 0) console.log(i);
//     i++;
// }

// // Do-While
// let i = 0;
// do{
//     if (i % 2 !== 0) console.log(i);
//     i++;
// } while (i <= 5);


//Infinite loops


// let i = 0;
// while (i < 5) {
//     console.log(i);
//      //i++;
// }

// while (true) {
//  }

//  let x = 0;
//  do {
// // x++;
//  } while (x < 5);

//  for (let i = 0; i > 0; i++);


// for-in 
// const person = {
//     name: 'Mosh',
//     age: 30
// };

// for (let key in person)
//  console.log(key, person[key]);

//  const colors = ['red', 'green', 'blue'];

//  for (let index in colors)
//   console.log(index, colors [index]);


//for-of
//   for (let color of colors)
//   console.log(color);


// Break and Continue

// let i = 0;
// while ( i <= 10) {
//   // if (i === 5) break;
// if (i % 2 === 0) {
//   i++;
//   continue;
// }
//   console.log(i);
//   i++;
// }


//Fibonacci Sequence test

//Need to add the previous number with the current number




//Rest operator