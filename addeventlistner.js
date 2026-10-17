const greeting = document.getElementById("greeting");
const welcomeBtn = document.getElementById("welcomeBtn");
welcomeBtn.addEventListener("click",function()
{ if (greeting.textContent === "Good Morning")
  { greeting.textContent ="Welcome to my website";}
else{greeting.textContent ="Good Morning";}
});

const statusText = document.getElementById("statusText");
const change = document.getElementById("changeColor");
change.addEventListener("click",function ()
{statusText.style.color = "red" ;});

const secretText = document.getElementById("secretText");
const hideBtn = document.getElementById("hideBtn");
hideBtn.addEventListener("click", function()
{if (secretText.style.display ==="none")
   {secretText.style.display ="block";}
      else{secretText.style.display = "none";}
   });

   const menuTitle = document.getElementById("menuTitle");
   const menuBtn = document.getElementById("menuBtn");

   menuBtn.addEventListener("click", function ()
{menuTitle.classList.toggle("active");});

const keyStatus = document.getElementById("keyStatus");

function  calculateAge(b) {
   return 2026-b;
}
let age =calculateAge(2005 
);
console.log(age);
function greet(name = "fuad") {
   return  "Hello" + name;
}
console.log(greet());

let price = 5000;
let quantity = 3;

function calculateTotal() {
   return price * quantity;

}
  console.log(calculateTotal ());

  function greet(name = "Guest") {
  return "Hello " + name;}
  console.log(greet());
  
  function ram() {
   console.log("show more of this");}
ram(calculateAge);

function gun( ) 
{console.log("Eight people were killed");
}

   
let prices = [1000, 2500, 5000,3000];
 prices.forEach( (price) =>
  {console.log ("PRICE : " + price);}
 );
 console.log(price);

 let numbers = [5,10,15,20];

 let food = numbers.map((number)=>{return number * 2;});
 console.log(food);

 let ages = [12,18,25,15,30,17,17,21];

 let ne = ages.filter((aging)=> {return aging >= 18;});
 console.log(ne);

 let scores = [45 , 52, 38 , 91,67];

 let rod = scores.some((rods)=>{ 
   return rods >= 90;});
   console.log(rod);

   let password = [8,12,10,15,6];
let pass= password.every((passwords) =>{ return password >= 8 ;});
console.log(pass);
 
const goods = [5000,12000,3000,8000];
let cost = goods.reduce((sum ,product)=>
{return sum + product;} ,0);
console.log(cost);

const cart = [{name: "Shirt" , price:1500},
   {name: "Shoe" , price: 30000},
   {name: "Cap" , price:5000 } 
 ];

let carts = cart.reduce((sum, all) => {return sum + all.price;},
0);
console.log(carts);

const numba = [5,2,5,7,5,9,1];
 let count = numba.reduce((total,number) => {
   if (number === 5) {
      return total + 1;}
 return total;
},0);
console.log(count);

const students = [{name:"Fuad", scores: 75},
   {name:"john", scores: 42},
   {name:"Tobi", scores: 61},
   {name:"Ali", scores: 38},
{name:"David", scores: 90}];

let ran = students.reduce((sum,product) =>
{ return sum + product.scores; },0);

console.log(ran);

let student = [{name:"Fuad", scores: 85},
   {name:"Musa", scores: 42},
   {name:"Tobi", scores: 73},
   {name:"Ali", scores: 38},
];

let respond = (studentResult)=>
{let study = studentResult.filter((studies) => {
   return studies.scores>=50;});
   let sent = study.map((passed) =>
   {return passed.name;});
return sent;
}

console.log(respond(student));

 let products = [
   {name:"Shirt", price: 15000},
   {name:"Shoe", price: 30000},
   {name:"Cap", price: 5000},
   {name:"Trouser", price: 25000},
 ]

 let learn = function (getExpensive)
 {let cost = getExpensive.filter((kor) =>
{return kor.price >= 20000;});
let move = cost.map((like)=>
{return like.name + "- " + like.price;});
return move;
}
console.log(learn(products));


 let orders = [
   {name:"Shirt", price: 15000, quantity:2},
   {name:"Shoe", price: 30000,quantity:3},
   {name:"Cap", price: 5000, quantity:4}];
let order = orders.reduce((total,calculate) =>
{return total + calculate.price * calculate.quantity ;},0); 
console.log(order);


let produces = [
   {name:"Laptop", price: 15000, instock:true},
   {name:"Phone", price: 30000,instock:false},
   {name:"Headphones", price: 5000, instock:true},
   {name:"mouse", price: 30000,instock:true}  
];

let responsive = (availablel) =>
{let present = availablel.filter((avail)=>{return avail.instock === true;});

let seen = present.map((call)=>
{return call.name ;});
return seen;
}
console.log(responsive(produces));
  

let showNames = document.getElementById("showNames");
let names = document.getElementById("names");
let studentss = [ "Fuad" , "Tobi" ,"Ali"];
showNames.addEventListener("click", (raid)=>
{let raise = students.map((love)=>
{return love.toUppercase();});
names.textContent = raise.join(", ");});



let keyInput = document.getElementById("keyInput");
let keyResult = document.getElementById("keyResult");

keyInput.addEventListener("keydown",(event) =>
{keyResult.textContent = " You pressed:"+ event.key;});


let nameInput = document.getElementById("nameInput");
let nameResult = document.getElementById("nameResult");

nameInput.addEventListener("input",(event) =>
{nameResult.textContent =  event.target.value;});




let myForm = document.getElementById("myForm");
let result = document.getElementById("result");

myForm.addEventListener("submit",(event) =>
{preventDefault();
   result.textContent = "Form submitted!"
});




let box = document.getElementById("box");
let roop = document.getElementById("roop");

box.addEventListener("mouseover", (lol) =>
{roop.textContent = "Mouse is over the box";});

box.addEventListener("mouseout", (judge) =>
{roop.textContent ="Mouse left the box";}); 



let darkMode = document.getElementById("darkMode");
let status = document.getElementById("status");

darkMode.addEventListener("change", (event) => 
{if (event.target.checked) {
   status.textContent = "Dark mode is ON";}
else{status.textContent = "Dark mode is off";}});

let call = document.querySelector("body");
darkMode.addEventListener("click", function(move)
{call.classList.toggle ("gone");});

let nameIput = document.getElementById("nameIput");

nameIput.addEventListener("blur", () => {
   nameIput.style.color = "red";
});

window.addEventListener("scroll", ()=>
{console.log("you are scrolling");});


window.addEventListener("scroll", ()=>
{console.log(window.scrollY);}); 
 

function creatMessage (name) {
   let message = "Hello" + name ;
   return function () {
      console.log (message);
   };
}
let gree = creatMessage("FUAD");
gree();

function createScore(call){ 
   let son =  0;
return function ()
{console.log(son += 10 );};}

let playScore = createScore();
playScore(); 
playScore();
playScore();


function createMulyiplier  (see) 
{let create = 9;
   return  () => 
      {let men = 3;
         console.log( create*men);
      };}

      let man = createMulyiplier();
      man();

      function createBalance () 
      { let balance = 5000;
         return () => 
            {console.log(balance += 5000);};
      }

      let corn = createBalance();
      corn();
      corn();
      corn();

       const getUserButton = document.querySelector("#getUser");
       const userInfo = document.querySelector("#userInfo");

       getUserButton.addEventListener("click",getUser);

       async function getUser () {
         try{const response = await fetch("https//randomuser.me/api/");
            if (!response.ok) {
               throw new Error("Request failed");
            }
     const data = await response.json(); 
   userInfo.textContent = data.results[0].name.first; }
       catch(error){console.log(error.message);}}

   
       

   