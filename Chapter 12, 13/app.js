//  CHAPTER: 12 , 13
// IF ELSE $ ELSE IF STATEMENTS

// Question# 1
// let input= prompt("enter a value");
// const charCode= input.charCodeAt(0);
// if( charCode >= 48 && charCode <=57 ){
//     document.write("This is a number ")
// }
// else if(charCode >= 65 && charCode <=90){
//     document.write("This is uppercase letter  ")
// }
// else if(charCode >= 97 && charCode <=122){
//     document.write("This is lowercase letter  ")
// }
// else{
//     document.write("This is a special character")
// }

 //Question # 2
// let num1=prompt("enter first number");
// let num2=prompt("enter second number");
// if(num1>num2){
//     document.write("The larger number is ",num1);
// }
// else if(num2>num1){
//     document.write("The larger number is ",num2);
// }
// else{
//         document.write("Both number are equal");
// }

//Question # 3
// let number=prompt("Enter a number")
// if(number>0){
//     document.write("Number is positive");
// }
// else if(number<0){
//     document.write("Number is negative");
// }
// else if(number==0){
//     document.write("Number is equal zero");
// }
// else{
//     document.write("invalid");
// }

//Question # 4
// let vowel=prompt("Enter a string");
// if(vowel=="a" || vowel=="e" || vowel=="i" || vowel=="o" || vowel=="u" || vowel=="A" || vowel=="E" || vowel=="I" || vowel=="O" || vowel=="U"){
//     document.write("True");
// } 
// else{
//     document.write("False");
// }

//Or
// let vowel=prompt("Enter a string");
// vowel = vowel. toLowerCase();
// if(vowel=="a" || vowel=="e" || vowel=="i" || vowel=="o" || vowel=="u"){
//     document.write("True");
// } 
// else{
//     document.write("False");
// }

//Question # 5
// let password="246810";
// let user=prompt("Enter your password");
// if(!user){
//     document.write("please enter your password");
// }
// else if(user==password){
//     document.write("Correct! the password you entered matches the orignial password");
// }
// else{
//     document.write("Incorrect password");
// }

//Question # 6
// var greeting;
// var hour=13;
// if(hour<18){
//     greeting="Good day";
// }
// else{
//     greeting="Good evening";
// }
// document.write(greeting);


//Question # 7
// let time=parseInt(prompt("Enter time in 24 hr format:"));
// if(time >=0 && time < 1200){
//     document.write("Good morning");
// }
// else if(time >=1200 && time < 1700){
//     document.write("Good afternoon");
// }
// else if(time >=1700 && time < 2100){
//     document.write("Good evening");
// }
// else if(time >=2100 && time <= 2359){
//     document.write("Good night");
// }
// else{
//     document.write("Invalid time");
// }
