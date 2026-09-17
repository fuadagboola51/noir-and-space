
console.log(document.getElementById("ageInput"));



let btn = document.getElementById("btn");
let message =document.getElementById("message");
let named = document.getElementById("named");

btn.addEventListener("click",   function () {
    message.textContent = "Hello  "   +   named.value;
 });

 
 let numInput = document.getElementById("numInput");
 let calculate = document.getElementById("calculate");
 let result = document.getElementById("result");

 calculate.addEventListener("click", function ()
 {let number = Number(numInput.value);
    result.textContent = number *2;
 });


 let ageInput = document.getElementById("ageInput");
 let checkBtn =  document.getElementById("checkBtn");
 let results=  document.getElementById("results");


 checkBtn.addEventListener("click", function() {
   if ( ageInput.value === "") {results.textContent = "pls enter your age"; 

   } else{

   let age = Number(ageInput.value);

   if (age >= 100) {
      results.textContent= "Thats a long life!" ;
   }else if (age >=18) {
      results.textContent="You are an adult";
   }else{
      results.textContent="You are a minor";}
}});
let foods = [{names: "RICE", price:1200},
   {names: "BEANS", price:2000},
   {names: "BURGER", price:3400},
   {names: "EGG", price:800}];

   foods.forEach (function (day) {
      if (day.price >=2000) {console.log(day.names +" IS  EXPENSIVE" );
      }else {console.log(day.names + " IS CHEAP ");}
   }
);  

let food = [{names: "RICE", price:1200},
   {names: "BEANS", price:2000},
   {names: "BURGER", price:3400},
   {names: "EGG", price:800}];

   let add= food.map(function (tark) {
      return tark.price + 500;
      
   });
   console.log(add);
   let cheapFood =  food.map(function (hat)
{if (hat.price < 1500) {console.log(hat.names);}});



