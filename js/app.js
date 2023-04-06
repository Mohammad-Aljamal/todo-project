'use strict';

let userName = prompt("Enter the user name:");
let gender = prompt("Enter the user grnder (male/female):", "male/female");
let age = parseInt(prompt("Enter your age:"));

if (age <= 0) {
  alert("your age should be more than ZERO");
  prompt("Enter your age:");
}

if (gender == "male") {
  userName = "Mr " + userName;
} else if (gender == "female") {
  userName = "Ms " + userName;
}

let wlecomeMassege = confirm("Do you want to see the welcoming massege?");

if (wlecomeMassege) {
  if (userName != null) {
    alert("Welcome " + userName);
  } else {
    alert("Welcome ");
  }
}

// -----------------------------------Lab 06-------------------------todo-js2-----------------


function output (input){
  if (input == "yes"){
    input = 'yes';
  }
  else if (input == 'no'){
    input = 'no';
  }
  else {
    input = "invalid";
  }

  return input;
}


let live = prompt("Do you live in Irbid (yes/no)?","yes/no");

let favMeal = prompt("Is the Mansaf your favorite food (yes/no)?","yes/no");

let favDrink = prompt("Is the coffee your favorite drink (yes/no)?","yes/no");

let arr = [output(live),output(favMeal),output(favDrink)];

for (let i=0; i<arr.length; i++){
  console.log(arr[i]);

}


