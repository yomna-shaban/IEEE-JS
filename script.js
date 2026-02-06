//1

// code two ---> work 
// code three ---> work

//2
document.write("<h1> Task 1 </h1>")
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "50px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";

//3
console.log("%c Elzero %c Web %c School ",
    "color:red ; font-size:40px" ,
    "color:green ;font-weight:bold ; font-size:40px" , 
    "color:white ;background-color:blue ; font-size:40px" )

//4
console.group("Group 1")
console.log("Message One")
console.log("Message Two")
console.group("Child Group")
console.log("Message One")
console.log("Message Two")
console.group("Grand Child Group")
console.log("Message One")
console.log("Message Two")
console.groupEnd()
console.groupEnd()
console.groupEnd()
console.group("Group 2")
console.log("Message One")
console.log("Message Two")    


//5
console.table(["Elzero", "sara" , "maha" , "mohamed"])

//6

// console.log("Iam In Console");
// document.write("Iam In Page");

/*
console.log("Iam In Console");
document.write("Iam In Page");
*/

//1

var NumberOne=10
var NumberTwo=20
console.log(NumberOne + "" +NumberTwo)
console.log(typeof(NumberOne + ""+NumberTwo))
console.log(`${NumberOne}${NumberTwo}`)
console.log(typeof(`${NumberOne}${NumberTwo}`))

console.log(NumberTwo + "\n" + NumberOne)
console.log(`${NumberTwo}
${NumberOne}`)

//2

console.log(elzero.innerHTML); 
console.log(typeof elzero); 

//3

console.log(" `I'm In \n \\\\ \n Love \\\\ \"\"\" \'\'\' \n \+\+ With \+\+ \n \\\"\"\"\\\"\"\" \n \"\"JavaScript\"\"\``")

//4
let a = 21;
let b = 20;  //_21_2021_2021_2021_20_

console.log(` _${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`); 
