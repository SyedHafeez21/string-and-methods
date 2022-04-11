
// string methods 21 to 25 //


// // Q 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.


// var firstName=prompt("Enter your Name");

// var lastName=prompt("Enter your 2nd Name");

// var fullName=firstName +" "+lastName;

// document.write( "Welcome " + fullName + " to my website " );



// // Q 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser


// var favMob=prompt("Enter your Favourite Phone model");

// var words= favMob.length ;

// document.write("My Favourite phone is <b>"+favMob+"</b>");

// document.write("<br> Length of String is "+"<b>"+ words +"</b>" );



// // Q 3. Write a program to find the index of letter “n” in the word
//  “Pakistani” and display the result in your browser


// var words= "Pakistani"

// var find=words.index Of("n")

// document.write ("String : <b>"+ words +"</b>");

// document.write ("<br> Index of 'n' : <b>"+ find +"</b>");



//  Q 4 Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.

// var hello="Hello World"

// var last= hello.lastIndexOf("l")

// document.write("String : <b>"+hello+"</b>") ;

// document.write("<br> Last index of 'l' : <b>"+ last +"</b>");



// // Q 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser


// var name ="Pakistani"

// var find=name.charAt(3)

// document.write("String : <b>"+name+"</b>");

// document.write(" Character at index <b>3</b> is : <b>"+find+"</b>");



// Q 6. Repeat Q1 using string concat() method.


// var firstName=prompt("Enter your Name") ;

// var lastName=prompt("Enter your 2nd Name") ;

// var fullName= firstName.concat(" " , lastName)

// document.write( "Welcome to my website : "+ fullName );



// Q 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.

// var city="Hyderabad" ;

// var replace= city.replace("Hyderabad" , "Islamabad")

// document.write("City : <b>"+city+"</b>") ;

// document.write(" After Replacement : <b>"+replace+"</b>") ;



// // Q 8. write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.`

// var message = "Ali and Sami are best friends. <br> They play cricket and football together.";

// var replace= message.replace(/and/ , "&")

// document.write("<b> First Message : </b>"+message) ;

// document.write( <b> Replacement : </b>"+replace) ;



// Q 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.

// var value="472"

// var type= type value ;

// document.write("Value: <b>"+value+"</b>") ;

// document.write(" Type: <b>"+type+"</b>") ;



// Q 10 Write a program that takes user input. Convert and 
// show the input in capital letters

// var userInput=prompt("Enter a text to Convert into uppercase it")

// var input= userInput.toupperCase()

// document.write("User Input : <b>"+userInput+"</b>");



// Q 11.  Write a program that takes user input. Convert and 
// show the input in title case

// var userInput=prompt("Enter a text to  Convert into titlecase it ")

// var userInput= userInput.totitleCase()

// var firstLetter= userInput.toUpperCase()

// var input = firstLetter + userInput.slice(1)

// document.write("User Input: <b>"+userInput+"</b>");

 

// Q 12.  Write a program that converts the variable num to 
// string.

// var number= 35.36

// var type= type number ;

// var num= num.toString()

// var noDot= num.replace(".", "")

// document.write("Value : <b>"+number+"</b>");

// document.write( Type: <b>"+type+"</b>");



// // Q 13 . You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability.


// var bakeItems= ["cake", "apple pie", "cookie" , "chips", "patties"]

// var want=prompt("Welcome to ABC bakery. What do you want to order sir")

// var ifAvailable=want.toLowerCase()
// var state= false
// for(i=0 ; i < bakeItems.length ; i++){
//     if(ifAvailable === bakeItems[i])
// { document.write(want + " is available at index " + i + " in Bakery")
//  state = true
//   break;}
// if(state=== false){
//     document.write(want +" is not available</b> in Bakery")}
// 











