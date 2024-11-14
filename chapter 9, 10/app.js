//    USER  INPUT & CONDITIONAL STATEMENT:
//    Assignment # 9-10


//   ANSWER#1
// let city=prompt("enter a city name");
// if(city=="Karachi"){
//     alert("Welcome to city of lights")
// }
//    else{
//     alert("Welcome to "+city);
//    }

//   ANSWER#2
// let gender=prompt("enter your gender");
// if(gender=="male"|| gender=="Male") {
//     alert("Good Morning Sir")
// }
// else if(gender=="female" ||  gender=="Female") {
//     alert("Good Morning Ma'am ");
// }
// else{
//     alert("invalid");
// }


//   ANSWER #3
// let  color=prompt("enter a traffic signal color");
// if (color=="red" || color=="Red") {
//     alert("Must stop");
//     }
// else if(color=="yellow" || color=="Yellow") {
//     alert("Ready to move");
//     }
// else if(color=="green" || color=="Green") {
//       alert ("move now");
//     }
// else{
//         alert("invalid color");
//     }        


//   ANSWER #4
// let fuel=prompt("enter the amount of remaining fuel in the car");
// if (fuel < 0.25 +"liters" ) {
//     alert("Please refill the fuel in your car");

// }    
// else{
//     alert("amount of fuel is sufficient");
    
// }


//   ANSWER # 5
// (a)
// var a=4;
// if(++a===5){
//     alert("given condition for variable  a is true");
// }     // output show the alert message

//(b)
// var a=82;
// if(b++===83){
//     alert("given condition for variable b is true");
// }  // alert message will not appear .

// (c)
// var c=12;
// if(c++===13){
//     alert("condition 1 is true");
// }   
// if(c===13){
//     alert("condition 2 is true");
// }  
// if(++c<14){
//     alert("condition 3 is true");
// }  
// if(c===14){
//     alert("condition 4 is true");   //output:condition 2 and 4 are true
// }  

 //(d)
// var materialCost=20000;
// var labourCost=2000;
// var totalCost=materialCost + labourCost;
// if (totalCost=== labourCost + materialCost) {
//     alert("the cost equals");  
// }    //output will show alert message.


//(e)
// if(true){
//     alert("true");  
// }
// if(false){
//     alert("false");
// }  // output will show the true message.


//(f)
// if("car" < "cat"){
//     alert("car is smaller than cat")
// }  // output will show the alert message


//   ANSWER # 6
// let subject1=parseInt(prompt(" enter the marks of first subject"));
// let subject2=parseInt(prompt(" enter the marks of second subject"));
// let subject3=parseInt(prompt(" enter the marks of third subject"));

// let  total_marks=300;
// let  obtained_marks=subject1+subject2+subject3;
// let  percentage = (obtained_marks/total_marks)*100
// document.write("<h1>MARKS SHEET </h1>")
// document.write("<h3>Total marks:300 </h3>");
// document.write("<h3>Marks  obtained: </h3>" , obtained_marks);
// document.write("<h3>Percentage : </h3>",percentage);

// if(percentage>=80){
//     document.write("<h3>Grade :A-one </h3>");
//     document.write("<h3>Remarks:Excellent </h3>");
// }
// else if (percentage>=70 && percentage<80) {
//     document.write("<h3>Grade :A</h3>");
//     document.write("<h3>Remarks:Good </h3>");
// }
// else if (percentage>=60 && percentage<70) {
//     document.write("<h3>Grade :B</h3>");
//     document.write("<h3>Remarks:You need to improve </h3>");
// }
// else  {
//     document.write("<h3>Fail</h3>");
//     document.write("<h3>Sorry </h3>");
// }

//   ANSWER # 7
// let secret_number=7;
// let guess_number=parseInt(prompt("guess the number between 1 to 10 "));
// if (secret_number==guess_number) {
//     alert("Bingo! Correct Answer")
// }
// else if (secret_number==guess_number + 1) {
//     alert("close enough to the correct answer!")
// }
// else{
//     alert("Wrong guess!")
// }


//   ANSWER # 8
// let number=parseInt(prompt("enter the number"));
// if (number%3==0) {
//     document.write("Number is divisible by 3");

// }
// else{
//     document.write("Number is not divisible by 3");
// }


//   ANSWER # 9
// let number=parseInt(prompt("enter the number"));
// if (number%2==0) {
//     document.write("Number is even");

// }
// else{
//     document.write("Number is odd");
// }


//   ANSWER # 10
// let temperature=parseInt(prompt("enter temperature of your area"));
// if (temperature>40) {
//     alert("It is too hot outside.");
//     }
//  else if (temperature>30) {
//     alert("The weather today is normal.");
// }
// else if (temperature>20) {
//     alert("Today weather is cold.");
// }
// else if (temperature>10) {
//     alert(" OMG! Today weather is so cool.");
// }


// ANSWER # 11
//  let firstnum=parseInt(prompt("enter a first number"));
//  let secondnum=parseInt(prompt("enter a second number"));
//  let operation=prompt("enter a operation:\n +\n - \n * \n % \n /");
// if (operation=="+") {
//     document.write(firstnum + secondnum );
// } 
// else if (operation=="-") {
//     document.write(firstnum - secondnum );
// }
// else if (operation=="*") {
//     document.write(firstnum * secondnum );
// }
// else if (operation=="/") {
//     document.write(firstnum / secondnum );
// }
// else if (operation=="%") {
//     document.write(firstnum % secondnum );
// }