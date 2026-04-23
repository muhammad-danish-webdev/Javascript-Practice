// const inputValue = document.querySelector(".input-value").value;
// console.log(inputValue);
// ##############################
// ##############################
// ##############################
//  Danish Code
// ##############################
// ##############################
// const jsBox = Math.floor(Math.random() * 10);
// console.log(jsBox);
// let promptValue;
// promptValue = prompt("Enter Your Number");

// if (jsBox !== promptValue) {
//   console.log("you Entered Wrong Number");
// } else {
//   promptValue = prompt("Enter Your Number");

//   promptValue = Number.parseInt(promptValue);
//   console.log("Your Enter Good Number");
// }
// ##############################
// ##############################
// ##############################
//  Danish Code
// ##############################
// ##############################

// ##############################
// ##############################
// ##############################
//  Gemini Code
// ##############################
// ##############################
// const jsBox = Math.floor(Math.random() * 10);
// console.log("Secret Number: " + jsBox); // For testing

// let promptValue;

// // while loop tab tak chalega jab tak values match nahi kartin
// // while loop will run until the values match
// while (true) {
//   promptValue = prompt("Enter Your Number");
//   promptValue = Number.parseInt(promptValue); // Convert string to number

//   if (promptValue === jsBox) {
//     console.log("Yes, you entered a good number!");
//     break; // Match hone par loop khatam (Stop the loop when matched)
//   } else {
//     console.log("You entered the wrong number. Try again!");
//   }
// }
// ##############################
// ##############################
// ##############################
//  Gemini Code
// ##############################
// ##############################

// Example: A function that requires a password of at least 8 characters

// Misaal: Ek function jisay kam az kam 8 characters ka password chahiye
// function checkPassword(pass) {
//   if (pass.length < 8) {
//     // We use warn because the app won't crash, but it's a security risk
//     // Hum warn is liye use kar rahe hain kyunke app band nahi hogi, par ye khatra hai
//     console.warn("Warning: Password is too short! This is not secure.");
//   } else {
//     console.log("Password is strong.");
//   }
// }
// Result in console: You will see a Yellow background message
// Console mein nateeja: Aapko peele (yellow) background wala message dikhega
// checkPassword("123");
// console.info("this is info");

// alert("enter the value of a");
// const a = prompt("enter the value");

// document.write(a);

// let userInput = prompt("Enter Your Age");
// let age = Number.parseInt(userInput);

// while (true) {
//   if (age < 15 && age > 10) {
//     alert("you are ever child. You can not drive the car");
//     break;
//   }
//   if (age < 22 && age > 15) {
//     alert("you should practice for this . You can not drive the car");
//     break;
//   }
//   if (age < 30 && age > 22) {
//     alert("you can drive carefully");
//     break;
//   }
//   if (age < 40 && age > 30) {
//     alert("you can drive easily");
//     break;
//   } else {
//     alert("this is not for you");
//     break;
//   }
// }
