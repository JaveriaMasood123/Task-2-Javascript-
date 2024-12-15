//   chapter # 14 ,15
//   ARRAY

// QUESTION # 1
// let name_student=[];

// // QUESTION # 2
// let name_object=new Array();

// // QUESTION # 3
// let cars=["fortuner","civic","corolla"];

// // QUESTION # 4
// let number=[1,2,3,4,5,6];

// // QUESTION # 5
// let boolean=[true,false];

// // QUESTION # 6
// let mixed_array=[20,"fortuner",true];

// QUESTION # 7
// let qualification= ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// document.write("<h2>Qualifications:</h2>")
// document.write("<ol>");
// document.write("<li>" + qualification[0]+ "</li>");
// document.write("<li>" + qualification[1]+ "</li>");
// document.write("<li>" + qualification[2]+ "</li>");
// document.write("<li>" + qualification[3]+ "</li>");
// document.write("<li>" + qualification[4]+ "</li>");
// document.write("<li>" + qualification[5]+ "</li>");
// document.write("<li>" + qualification[6]+ "</li>");
// document.write("<li>" + qualification[7]+ "</li>");


// QUESTION # 8
// let students_name=["Javeria","Fatima","Abeera"];
// let marks=[480,380,400];
// let total_marks=500;
// let percantage1= (marks[0]/total_marks)*100;
// let percantage2= (marks[1]/total_marks)*100;
// let percantage3= (marks[2]/total_marks)*100;

// document.write("Scored of " + students_name[0] + " is " + marks[0] +". " + "percentage : " + percantage1 + "% <br>")

// document.write("Scored of " + students_name[1] + " is " + marks[1] +". " + "percentage : " + percantage2 + "%  <br>")

// document.write("Scored of " + students_name[2] + " is " + marks[2] +". " + "percentage : " + percantage3 + "%  <br>")

// QUESTION # 9
// let color=["Red","Purple","Black","Purple"];
// document.write(color, "<br>");
// part a:
// let color_addbeg=prompt("Enter color to add at the beginning;");
// color.unshift(color_addbeg)
// document.write(color , "<br>" );
// part b:
// let color_addend=prompt("Enter color to add at the end;");
// color.push(color_addend)
// document.write(color , "<br>");
// part c:
// color.unshift("orange", "white");
// document.write(color , "<br>" );
//part d:
// color.shift();
// document.write(color , "<br>" );
//part e:
// color.pop();
// document.write(color , "<br>" );
//part f:
// let specific_index=prompt("Enter a index to add a color");
// let specific_color=prompt("Enter a color");
// color.splice(specific_index, 0 ,specific_color )
// document. write(color , "<br>")
// part g:
//let specific_delete=prompt("Enter a index to delete a color");
// let count_delete=prompt("Enter a number of colors to delete");
// color.splice(specific_delete ,count_delete)
// document. write(color , "<br>")

//Question # 10 

// let studentScores = [320, 230, 480, 120];
// document.write(" Scores Of  Students: ",studentScores,"<br>");
// let orderScores=studentScores.sort((a, b) => a - b);
// document.write(" Ordered Scores Of  Students: ",orderScores + "<br>");

// Question # 11

// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// let selectedCities = cities.slice(2, 4);
// document.write("<h2> Cities List:</h2>");
// document.write(cities+ "<br>");
// document.write("<h2>Selected Cities list:</h2>");
// document.write(selectedCities + "<br>");

// Question # 12.

// let arr = ["This", "is", "my", "cat"];
// let joinedString = arr.join(" ");
// document.write("<h2>Array:</h2>");
// document.write(arr + "<br>");
// document.write("<h2>String:</h2>");
// document.write(joinedString + "<br>");



// Question # 13. 

// let queue = [];

// queue.push("Keyboard");
// queue.push("Motherboard");
// queue.push("Monitor");
// queue.push("Printer");

// document.write("<h2>FIFO Array (Queue):</h2> <br>")
// document.write("Devices :  ",queue,"<br>"); 
// let firstout = queue.shift(); 
// document.write("First Out :  " , queue,"<br>");
// let secondout = queue.shift(); 
// document.write("Second Out :  " , queue,"<br>"); 
// let thirdout = queue.shift(); 
// document.write("Third Out :  " , queue,"<br>"); 



// // Question # 14.

// let stack = [];

// stack.push("Keyboard");
// stack.push("Monitor");
// stack.push("Printer");
// stack.push("Mouse");
// document.write("<h2>LIFO Array (Stack):</h2>");
// document.write("Devices :   " , stack,"<br>");
// let lastIn = stack.pop(); 
// document.write("LastIn :   " , stack,"<br>");
// let secondLastIn = stack.pop(); 
// document.write("secondLastIn  :  " , stack,"<br>");
// let thirdLastIn = stack.pop(); 
// document.write("ThirdLastIn  :   " ,stack,"<br>"); 

// Question # 15.

// let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<h2>Phone Manufacturers:</h2>");
// document.write("<select>");
// document.write("<option>" + phoneManufacturers[0] + "</option>");
// document.write("<option>" + phoneManufacturers[1] + "</option>");
// document.write("<option>" + phoneManufacturers[2] + "</option>");
// document.write("<option>" + phoneManufacturers[3] + "</option>");
// document.write("<option>" + phoneManufacturers[4] + "</option>");
// document.write("<option>" + phoneManufacturers[5] + "</option>");
// document.write("</select>");
