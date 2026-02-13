//1 

// Replace ? With Arithmetic Operators
console.log(10 * 20 + 15 % 3 + 190 + 10 - 400) // 0


//2

let num = 3;

// Solution One
console.log(num + num) // 6

// Solution Two
console.log(num + (true + true + true)) // 6

// Soultion Three
console.log(num * (true + true)) // 6

// Soultion Four
console.log(++num + (true + true)) // 6

// Solution Five
console.log(--num * (num - true)) // 6

// Solution Six
console.log(num = num * (true + true)) // 6

//3 

let Num = "10";

// Solution One
console.log(+Num + +Num) // 20

// Solution Two
console.log(Number(Num) + Number(Num)) // 20

// Solution Three
console.log(+Num * (true + true)) // 20

// Solution Four
console.log((+Num * +Num) / +Num + +Num) // 20


//4 

let points = 10;

points = ++points +(true+true)

console.log(points) // 13

points = --points - (true + true) - (true+ true)

console.log(points) // 8;




console.log("////////////////////////////////////////////////////////////////////")


//task 23---->26

//1


console.log(10**5) // 100000
console.log(Math.pow(10,5)) // 100000
console.log(Math.round(99_999.99)) // 100000
console.log(Math.floor(100_000.8)) // 100000
console.log(2 * 5e4); // 100000
console.log(parseInt("100000")) // 100000
console.log(Math.trunc(100000.988)) // 100000
console.log(Math.ceil(99999.1)) // 100000
console.log(Number("100000")) // 100000
console.log(1e5) // 100000

console.log("//////////////")

//2
console.log((Number.MIN_SAFE_INTEGER) * -1); // 9007199254740991

//3
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16

console.log("//////////////")

//4
let myVar = "100.56789 Views"

console.log(parseInt(myVar)) // 100
console.log(Number(parseFloat(myVar).toFixed(2))) // 100.57

console.log("//////////////")

//5
let NUM = 10;

console.log(Number.isInteger(NUM) + Number.isInteger(NUM)) // 2

console.log("//////////////")

//6
let flt = 10.4;

console.log(Math.floor(flt)) // 10
console.log(Math.round(flt)) // 10
console.log(Math.trunc(flt)) // 10
console.log(parseInt(flt)) // 10
console.log(Number(flt.toFixed(0))) // 10

console.log("//////////////")

//7
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4

console.log("////////////////////////////////")

//task 27---->30

//1
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName[0].toLowerCase().repeat(3)); // eee

//2

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.includes(letterE.toLowerCase())); // True
console.log(word.includes(letterO.toLowerCase())); // True


