"use strict";
function slugify(title) {
  const words = title.split(" ");
  return words.join("-").toLowerCase();
}
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

/*
//TABLICE
const planets = ['Earth', 'Mars', 'Venus']; // tablica ciągów
const numbers = [1, 2, 3, 4, 5]; // tablica liczb
const mixed = ['apple', 10, true]; // tablica z elementami różnych typów

const planets = ['Earth', 'Mars', 'Venus'];
console.log(planets[0]); // 'Earth'
console.log(planets[1]); // 'Mars'
console.log(planets[2]); // 'Venus'

const planets = ['Earth', 'Mars', 'Venus'];
const firstElement = planets[0];
console.log(firstElement); // 'Earth'

const planets = ['Earth', 'Mars', 'Venus'];
console.log(planets[3]); // undefined
console.log(planets[999]); // undefined

const planets = ['Earth', 'Mars', 'Venus', 'Uranus'];
planets[0] = 'Jupiter';
planets[2] = 'Neptune';
console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']

const planets = ['Earth', 'Mars', 'Venus'];
console.log(planets.length); // 3

const planets = ['Earth', 'Mars', 'Venus'];

if(planets.length >= 3) {
	console.log("3 or more elements");
} else {
	console.log("3 or less elements");
}

//OSTATNI ELEMENT TABLICY
const planets = ["Earth", "Mars", "Venus"];
const lastElementIndex = planets.length - 1;
console.log(planets[lastElementIndex]); // "Venus"


let a = 5;

let b = a;
console.log(a); // 5
console.log(b); // 5
// Przypisanie przez wartość, w pamięci zostanie utworzona
// kolejna komórka, do której zostanie skopiowana wartość 5

// Zmieńmy wartość a
a = 10;
console.log(a); // 10
console.log(b); // 5 Wartość b nie uległa zmianie, ponieważ jest to oddzielna kopia.

const a = ["Mango", "Poly"];
const b = a;
console.log(a); // ["Mango", "Poly"]
console.log(b); // ["Mango", "Poly"]

a[1] = "Jacob";
console.log(a); // ["Mango", "Jacob"]
console.log(b); // ["Mango", "Jacob"]

b[0] = "Ajax";
console.log(a); // ["Ajax", "Jacob"]
console.log(b); // ["Ajax", "Jacob"]

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arr1 === arr2); // false
console.log([] === []); // false

const array = [1, true, "Poly"];
console.log(String(array));// "1,true,Poly"
console.log(array + "5"); // "1,true,Poly5"

console.log(Number([])); // 0
console.log(Number([1])); // 1
console.log(Number([1, 2, 3])); // NaN

const emptyArray = [];
const nonEmptyArray = [1, 2, 3];


console.log(Boolean(emptyArray)); // true
console.log(Boolean(nonEmptyArray)); // true
if(emptyArray) {
	console.log("if is in progress")
} else {
	console.log("else is not performed")
}
if(nonEmptyArray) {
	console.log("if is in progress")
} else {
	console.log("else is not performed")
}

//METODY TABLICOWE
const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing'
console.log(words.join(" ")); // 'JavaScript is amazing'
console.log(words.join("-")); // 'JavaScript-is-amazing'

function transformString(string) {
	const words = string.split("_");
	return words.join("-");
}
transformString("user_age"); // "user-age"
transformString("price_per_droid"); // "price-per-droid"


const name = "Mango";
const letters = name.split("");
console.log(letters); // ["M", "a", "n", "g", "o"]

const message = "JavaScript essentials";
const words = message.split(" ");
console.log(words); // ["JavaScript", "essentials"]

const slug = "amazing-french-recipes";
const slugParts = slug.split("-");
console.log(slugParts); // ["amazing", "french", "recipes"]


const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
console.log(planets.slice(1, 3)); // ['Mars', 'Venus']

//Jeśli wartość begin jest ujemna, a end nie zostanie określona,
skopiowane zostaną ostatnie elementy begin (tj. tyle elementów od końca, ile określono w parametrze begin):
const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets.slice(-2)); // ["Jupiter", "Saturn"]


const firstArray = ["Mercury", "Venus"];
const secondArray = ["Mars", "Jupiter"];
const result = firstArray.concat(secondArray);

console.log(firstArray); // ["Mercury", "Venus"];
console.log(secondArray); // ["Mars", "Jupiter"];
console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];

//Kolejność łączenia!!!
const firstArray = ["Mercury", "Venus"];
const secondArray = ["Mars", "Jupiter"];
const thirdArray = ["Saturn", "Neptune"];

console.log(firstArray.concat(secondArray, thirdArray)); 
// ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Neptune'];

console.log(firstArray.concat(thirdArray, secondArray)); 
// ['Mercury', 'Venus', 'Saturn', 'Neptune', 'Mars', 'Jupiter', ];


const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1


const planets = ["Earth", "Mars", "Venus"];

planets.push("Jupiter");
console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

planets.push("Saturn", "Neptune");
console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]

const tags = [];

for(let i = 0; i < 3; i += 1) {
	tags.push(`tag-${i}`);
}
console.log(tags); // ["tag-0", "tag-1", "tag-2"]


//ITERACJE PO TABLICY
const planets = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}




*/
