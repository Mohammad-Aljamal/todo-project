"use stretch"

let userName = prompt("Enter the user name:");
let gender = prompt("Enter the user grnder (male/female):","male/female");
let age = parseInt( prompt("Enter your age:"));

if(age <= 0)
{
    alert("your age should be more than ZERO");
    prompt("Enter your age:")
}


if (gender == "male"){
    userName = "Mr " + userName;
} 
else if (gender == "female"){
    userName = "Ms " + userName;

}




let wlecomeMassege = confirm("Do you want to see the welcoming massege?");

if (wlecomeMassege){
    alert("Welcome " + userName);

}