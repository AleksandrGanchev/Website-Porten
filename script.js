let a = "Hello world!"; // можно перебивать
console.log(a);

const b ="123"; // нельзя перебивать
console.log(b);

var c; // устарело

// let getUser,
//     getUserId; // Variable Declaration (Декларация)

// let getUser = 6; //Variable Assigment (Инициализация) 


//Data type 

let numberType = 5; 
let stringType = "World"; // строки
let booleanType = false; // false or true
let nullTypeType = null; // null "пустота" typeof = object!
let undefinedType = undefined; // undefined 
let objectType = {}; 

console.log(typeof numberType);
console.log(typeof stringType);
console.log(typeof booleanType);
console.log(typeof nullTypeType);
console.log(typeof undefinedType);
console.log(typeof objectType);

//BigInt, Symbols не используются 
// Все типы данных примитивные , кроме объекта!!

//Infinity - бесконечность 1/0
//NaN - ошибка строка/строка 

// Type conversion (преобразование типов)

let num = Number('1');

console.log(num);


let str = String(1);

console.log(str);


let boll = Boolean('0'); //true

console.log(boll);

let bollF = Boolean(0); //false

console.log(bollF);

//Comparison of different types (Операторы сравнения)
// <,>,<=,>=,==,===

//Condition branching условные ветвление 
//if, else, else if 

let a = 9;

if (a != 8) {
    console.log('a==0');
} else if (a == 1) {
    console.log('a=1');
} else {
    console.log('dsfsdfsd');
}

//&& (и) || (или)

