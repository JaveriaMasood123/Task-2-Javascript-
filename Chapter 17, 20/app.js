// Chapter # 17, 20
// Array & Loop

// Question #1
// let empty_array=[[],[],[]];

// Question #2
// let matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// document.write(matrix[0] ,"<br>");
// document.write(matrix[1] ,"<br>");
// document.write(matrix[2] ,"<br>");

// Question #3
// for (let i = 1; i <= 10; i++) {
//   document.write(i ,"<br>");
// }

// Question #4
// let table_Number = prompt("Enter a number to show multiplication table:");
// let table_Length = prompt("Enter length multiplication table:");
// document.write("Multiplication Table of : ", table_Number,"<br>","Lenght : ",table_Length ,"<br>");
// for (let i = 1; i <= table_Length; i++) {
//   document.write(table_Number + " X " + i + " = " + table_Number*i +"<br>");
// }

// // Question #5
// let fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
// document.write(fruits, "<br>");
// document.write("Element at Index 0 is  : ",fruits[0] ,"<br>");
// document.write("Element at Index 1 is  : ",fruits[1] ,"<br>");
// document.write("Element at Index 2 is  : ",fruits[2] ,"<br>");
// document.write("Element at Index 3 is  : ",fruits[3] ,"<br>");
// document.write("Element at Index 4 is  : ",fruits[4] ,"<br>");

// Question #6
//part a
// document.write("Counting","<br>");
// for(let i=1; i<=15; i++){
//     document.write(i,",");
// }
// document.write("<br>")
//part b
// document.write("Reverse counting","<br>");
// for(let i=10; i>=1; i--){
//     document.write(i,",");
// // }
// document.write("<br>")
//part c
// document.write("Even","<br>");
// for(let i=0; i<=20; i++){
//     if(i%2==0)
//     document.write(i,",");
// }
// document.write("<br>")
//part d
// document.write("Odd","<br>");
// for(let i=1; i<=20; i++){
//     if(!(i%2==0))
//     document.write(i,",");
// }
// document.write("<br>")

// //part e:
// document.write("Series","<br>");
// for(let i=1; i<=20; i++){
//     if(i%2==0)
//     document.write(i,"K,");
// }
// document.write("<br>")

//   Question #7

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let searchItem = prompt("Welcome to ABC Bakrey.What do wnat to order sir/ma'am?");
// let found = A=searchItem.toLowerCase();
// if (found) {
//  document.write(searchItem ,"  is available in index ", A.length , "  in our Bakrey.");
// } else {
//  document.write("We are Sorry. ",searchItem,"   is not available in our Bakrey.");
// }

//   Question #8
// let A=[24,53,78,91,12]
// document.write("Array items: ",A, "<br>")
// let largest = Math.max(...A);
// document.write("The largest number is:", largest);

//   Question #9
// let A=[24,53,78,91,12]
// document.write("Array items: ",A, "<br>")
// let smallest = Math.min(...A);
// document.write("The smallest number is:", smallest);

//   Question #10
// for(i=1; i<=100; i++){
//     if(i%5==0){
//         document.write(i,",")
//     }
// }
