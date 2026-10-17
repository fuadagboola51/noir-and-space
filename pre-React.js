const students = [
    {name: "Fuad", score: 78},
    {name: "Tunde", score: 45},
    {name: "Aisha", score: 89},
    {name: "Musa", score: 32},
    {name: "Zainab", score: 64},
];
function getGrade(score) 
{if (score >= 70) 
    {return "A";}
else if (score >= 50 ){return "c";}
else {return "F";};}
console.log(getGrade(67));
let select = students.map((student) =>
{ return "name:"+ student.name + " score: " + student.score + " Grade: " + getGrade(student.score) ;});
console.log(select);
const cart =[
{name: "Grilled Jollof", price:20000, quantity: 2},
{name: "Smoked Suya", price:70000, quantity: 1},
{name: "Grilled Jollof", price:12000, quantity: 3},
]

function getSubtotal (price,quantity) 
{return price * quantity;}

let think =  cart.reduce ((sum,calculate) => 
    {return sum + calculate.price*calculate.quantity ;},0);
console.log(think);

function getExpensive( expensive) 
{if ( expensive >= 20000)
    {return "Expensive";}
    return;}
let soo = cart.filter ((lol) =>
{if (lol.price >= 20000)
    { return lol.price + lol.quantity + getExpensive(lol.price);}
return;});
console.log(soo); 

const foods = [
    {name: "jollof Rice", stock: 10},
    {name: "Suya", stock: 0},
    {name: "Aracini", stock: 5},
    {name: "paste", stock: 0},
    {name: "Grilled Chicken", stock: 8}
];

function isAvaliable (foodItem) 
{if (foodItem > 0 ) 
    {return true;}
return;}

let avail = foods.filter((food) =>
{return isAvaliable(food.stock);});
console.log(avail);

let unavail = foods.filter((unava) =>
    {return unava.stock === 0 ;});
console.log(unavail);


let sumUp = foods.reduce((sum, calculate) => 
{ return sum + calculate.stock;},0);
console.log(sumUp);

let addBtn = document.getElementById ("addBtn");
let minusBtn = document.getElementById("minusBtn");
let display = document.getElementById("display");
let quantity = 1
let sumAll = document.getElementById("total");
let total =20000

function calculateTotal(total,quantity) 
{return total*quantity;}
addBtn.addEventListener ("click",() => 
    {  quantity++;
        display.textContent = quantity;
        sumAll.textContent ="₦"+ calculateTotal(quantity,total);
    
    });

    minusBtn.addEventListener ( "click",() => 
    {if (quantity > 1) 
        {quantity--;}
        display.textContent = quantity;
        sumAll.textContent ="₦"+ calculateTotal(quantity,total);

    });

let menu = document.getElementById("menu");
menu.innerHTML = "<p> Grilled jollof <br> Smoked Suya <br>Chicken Pasta</p>"; 



    const food = [
        {name: "Grilled Jollof", category:"Rice", price:20000},
        {name: "Grilled Jollof", category:"Rice", price:15000},
        {name: "Smoked suya", category:"Meat", price:70000},
        {name: "Chicken Pasta", category:"Pasta", price:18000},
        {name: "Beef Suya", category:"Meat", price:25000}
    ];
    let searchFood = document.getElementById("searchFood"); 
    let foodResult = document.getElementById("foodResult");

    function displayFoods (foodList) 
    {foodResult.innerHTML = "";
        if (foodList.length === 0) 
            {foodResult.textContent = "No food found.";
                return;
            }
     
     foodList.forEach((foodItem) => {
foodResult.innerHTML += `
<p>
 ${foodItem.name} - 
 ${foodItem.price}
 </p>
`;        
     });}



     searchFood.addEventListener("input", (event) =>
    {let searchValue = event.target.value.toLowerCase();
        let filteredFoods = food.filter((foodItem) => {
            return foodItem.name.toLowerCase().includes(searchValue);
        });
  displayFoods(filteredFoods);  });
  displayFoods(food);

  const foodie = [
    {id: 1, name:"Grilled Jollof", price:2000,quantity:1},
    {id: 1, name:"Smoked  Suya", price:7000,quantity:1},
    {id: 1, name:"Hollow Aracini", price:12000,quantity:1}
]; 
let container = document.getElementById("container");
let foodCart = document.createElement("div");
foodCart.innerHTML = `<div>name:Grilled Jollof <br>Price:2000 <br>quantity:1  
<br><button id = "increaseBtn">+</button> <span id="dispay">1</span> <button id ="decreaseBtn"> - </button>
<br><span id ="totally"> </span></div>


<div><br>name:Hollow Aracini<br>Price:12000 <br>quantity:1  
<br><button  id = "increaseBtnm">+</button> <span id="dispays">1</span> <button id ="decreaseBtnm"> - </button> 
<br><span id ="totallly"> </span>
</div>`

container.append(foodCart);

 let increaseBtn = document.getElementById("increaseBtn");
 let dispay = document.getElementById("dispay");
 let decreaseBtn = document.getElementById("decreaseBtn");
const totally = document.getElementById("totally");
const totallly = document.getElementById("totallly");


 let quantitya = 1
let amount = 2000
const amountr = 7000
const amounty = 12000
 let increaseBtnm = document.getElementById("increaseBtnm");
 let dispays = document.getElementById("dispays");

 let decreaseBtnm = document.getElementById("decreaseBtnm");

increaseBtn.addEventListener("click",() => 
    {quantitya++;
        dispay.textContent = quantitya;
   totally.textContent = getSubtotal(quantitya,amount); });

   decreaseBtn.addEventListener("click", () =>  
    {if (quantitya > 1) 
        {quantitya--;
            dispay.textContent = quantitya;
            totally.textContent = getSubtotal(quantitya,amount);
        };});
        
increaseBtnm.addEventListener("click",() => 
    {quantitya++;
        dispays.textContent = quantitya;
   totallly.textContent = getSubtotal(quantitya,amounty); })

   decreaseBtnm.addEventListener("click", () => 
    {if (quantitya > 1) 
        {quantitya--;
            dispays.textContent = quantitya;
            totallly.textContent = getSubtotal(quantitya,amounty);
        };});

        
        