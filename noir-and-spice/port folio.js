
let orderDisplay = document.querySelector("#orderDisplay");



let hamburger = document.querySelector("#hamburger");
let quickMenu = document.querySelector(".quickMenu")
hamburger.addEventListener("click", function ()
{quickMenu.classList.toggle ("active");});

 let closeMenu = document.querySelector(".closeMenu");
closeMenu.addEventListener("click", function ()
{quickMenu.classList.remove("active");});

let fastMenu = document.querySelector(".fastMenu");
let rta = document.querySelector("#rta");

rta.addEventListener("click", function ()
{fastMenu.classList.toggle ("active");});

let closeMen = document.querySelector(".closeMen");
closeMen.addEventListener("click", function ()
{fastMenu.classList.remove("active");});

let mainCourse = document.querySelector("#mainCourse");
 let mainMenu = document.querySelector(".mainMenu");

 mainCourse.addEventListener("click", function()
{mainMenu.classList.toggle("active");});


let closeUp = document.querySelector(".closeUp");
closeUp.addEventListener("click", function ()
{mainMenu.classList.remove("active");});

let grill =document.querySelector("#grill");
let grillMenu = document.querySelector("#grillMenu");
grill.addEventListener("click", function ()
{grillMenu.classList.toggle("active");});


let closeOn = document.querySelector(".closeOn");
closeOn.addEventListener("click", function ()
{grillMenu.classList.remove("active");});


let tta =document.querySelector("#tta");
tta.addEventListener("click", function ()
{mainMenu.classList.add("active");});

let sides =document.querySelector("#sides");
let junks = document.querySelector("#junks")

sides.addEventListener("click", function  ()

{junks.classList.toggle("active");});

let closed = document.querySelector(".closed");
closed.addEventListener("click", function ()
{junks.classList.remove("active");});


let order = [];
let horse = document.querySelectorAll(".horse >div");
horse.forEach(function(card) {
    let mandem = card.querySelector(".mandem");

mandem.addEventListener("click", function (){
    let foodName = card.dataset.name;
    let foodPrice =Number(card.dataset.price);


let  existing = order.find(function(item)  {
    return item.name === foodName && item.Price === foodPrice;

});

if(existing) {existing.quantity++;} 
else{order.push({
    name: foodName,
     price:foodPrice,
    quantity:1
});}
    console.log(order);
showOrder(card);


});
});
 

function showOrder(card) {

let foodName = card.dataset.name;

let item = order.find(function(item)
{return item.name === foodName;});
console.log("SHOWING ORDER RUNNING");
console.log(item);

let oldOrder = card.querySelector(".orderBadge");
if (!oldOrder) {
    oldOrder = document.createElement("div");
    oldOrder.classList.add("orderBadge");
    card.appendChild(oldOrder);

}
oldOrder.innerHTML= `
<strong>${item.name} </strong>
<span>${item.price.toLocaleString()} </span>
<span>${item.quantity} </span>`;

}