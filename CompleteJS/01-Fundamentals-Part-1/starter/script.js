// let js = 'amazing';
// let firstName = 'Matilda';
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// let myFirstJob = 'Coder';
// let myCurrentJob = 'Teacher';
/*
*
 * Multi Line Comment
 * 
 */
// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof 'Vidit');
// console.log(typeof 45.6);
// let javaScriptIsFun = true;
// javaScriptIsFun = 'Yes';
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);
// console.log(typeof null);
// let age = 30;
// age = 31;
// const birthYear = 1991;
//Cannot Declare empty const variables

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2020;

// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2);
// console.log(ageJonas / 10);
// console.log(ageJonas ** 2);

// const firstName = 'Vidit';
// const lastName = 'Shah';

// console.log(firstName + ' ' + lastName);

// let x = 10 + 5;
// console.log(x);
// x += 10;
// console.log(x);
// x *= 4;
// console.log(x);
// x++;
// console.log(x);
// x--;
// x--;
// console.log(x);
// //Comparison Operator
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2018);
// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const avgAge = (ageJonas + ageSarah) / 2;
// console.log(avgAge);

//Challenge
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

//Strings

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;
// const jonas = `I'm ${firstName} a ${year - birthYear} years old  ${job}`;
// console.log(jonas);

// console.log(`just a regular string...`);
// console.log('String  with \n\n new lines');

// const age = 15;
// const legalAge = 18;
// const isOldEnough = age >= 18;
// if (isOldEnough) {
// 	console.log('Eligible for driving 🚗 ');
// } else {
// 	const yearsLeft = 18 - age;
// 	console.log('❌', yearsLeft);
// }

// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
// 	century = 20;
// } else {
// 	century = 21;
// }
// console.log(`Century ${century}`);
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number('Vidit'));
// console.log(typeof NaN);
// console.log(String(23));
//type coercion
/**
 * 5 Falsy Values 
 * 0
 * '' Empty String
 * undefined
 * null
 * NaN
 */

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(''));
// console.log(Boolean('Vidit'));
// console.log(Boolean({}));
// let height = 164;
// if (height) {
// 	console.log('Height is defined');
// } else {
// 	console.log('Height is not defined');
// }

//Loose Coer
const favourite = Number(prompt('Whats your Favourite Number?'));
console.log(typeof favourite);
