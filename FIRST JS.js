function getMessage () { 
    return "HELLO FUAD!"
}
let message = getMessage ();
console.log(message);


let furry ="World best";
console.log(furry);
function greet () {
return "HELLO FUAD" ;
}

/*let ragen = greet;
 console.log(kee);*/

 console.log("FUAD");

 console.log(48*6);

 let age = 20;
 age = 21
 console.log(age);


 function hello () {
    console.log("HELLO!!!");
 }
hello();

function greet (name) {
    console.log("HELLO" + name);
}

function multiply () {  
    return 5* 8;
}

let rest = multiply ();
console.log(rest);

function getAge () {
    return 21;
}
let reef = getAge ();
console.log(reef);

function isAdult (age)
{
if(age >= 18){
    console.log("Adult");
}
else { 
    console.log("Minor")
}
}

isAdult(16);


function checkAge (biig) {
    if(biig >= 20){
        return true ;
    }
    else 
        {
        return false;}
}
 console.log(checkAge(32));



 function regCheck(beg){
    if (beg>= 40){
        console.log("ADULT");
    }
 else  
    {
        console.log("youth")
    }
}

regCheck(25);


function greed(yer)
{
if(yer>180){
    return true;
}
else{return false;}
}
console.log(greed(32));

function subtract(a,b) {
    return 11-5;
}
console.log(subtract (11-5));

let rane = "OLAMILEKAN";

console.log(rane);

function damn ( bad) {
 return "running";
}
console.log(damn ());

function damn (bold)
{return "MY NAME IS " + bold;}


console.log(damn("FUAD"));

function addnumbers(q,u){
    return 5+7;
}
console.log(addnumbers(5,7))

function multiply(a,h) {
    return 3*7;

}
console.log(multiply(3,7));

function checkAge(age) {
    if (age >=18)
 return "You an adult";

    else return "You a minor";
}


console.log(checkAge(20));

console.log(checkAge(2));


function checkPassword(password)
{
    if (password ==="fuad1947")
    { return "ACCESS GRANTED";}

     else{return "WRONG PASSWORD";}
}

console.log(checkPassword("fuad1947"));
console.log(checkPassword("hello"));


function checkTemperature(temperature) {
    if (temperature > 30) {
        return "Its too hot ";
        
    }
else{ return "Its too cold";}
}

console.log(checkTemperature(35));
console.log(checkTemperature(20));



function doubleNumber(num) {
    let result;
if( num) {
    result = num *2;
}
return result; 
}

console.log(doubleNumber(9));
console.log(doubleNumber(10));


function checkScreen(score) {
let result;

if (score > 50) {result  = "pass";}
else {result ="fail";}
return result;
}

console.log(checkScreen(49));
console.log(checkScreen(78));



function checkMoney(Money) {
    if  ( Money>=1000) {
        console.log("YOU HAVE ENOUGH MONEY");

    }
else {console.log("YOU NEED MORE MONEY");}
}


checkMoney(1600);
checkMoney(900)

function calculateDiscount(price) {
    let finalPrice;
    if (price > 1000) {
        finalPrice = price -(100);

    }
else{finalPrice = price;}
 return finalPrice;
}
 

console.log(calculateDiscount(1765));
console.log(calculateDiscount(765));


 function login  (password, username) {
    if(password ==="fuad ",username ==="1234"){
        return  "login successful";
    }
 else{return "wrong password or password";}

}

console.log(login("fuad", "1234"));


let day = "saturday";

if (day === "saturday"  || day=== "sunday") {
    console.log("its the weekend")
}

function canDrive(age, hasLicense){
    if ( age >= 18 && hasLicense === true   ) {
return "you can drive";
    } 
else { return "you cannot drive";

}
} 
  console.log(canDrive (20, false));


  function canEnter(country) {
    if (country === "GHANA" || country==="NIGERIA")
        {return "welcome";}   
else{"not allowed";}  
}
console.log(canEnter("TOGO"));
console.log(canEnter("USA"));

function canBuy(age, money ){
    if ( age =18 && money >=1000 ) {

        return "YOU CAN BUY IT";
    }
else{return "YOU CANNOT BUY"  ;  }

}

console.log(canBuy(20, 1500));
console.log(canBuy(20, 500));
console.log(canBuy(26, 3500));

function checkDay(day) {

 if(day == "SATUDAY" ||  day == "SUNDAY")
 { return "WEEKEND";}
else {return "WEEKDAY" ;}  
}

console.log(checkDay ("MONDAY")); 
console.log(checkDay ("WEDNESDAY"));
console.log(checkDay("SUNDAY")) 

function enterClub(age, hasID,Isvip ) {

    if (age>= 18 && hasID===true || Isvip === true   ) {
         return "WELCOME";}

else { return "Access denied";   }}

console.log(enterClub(19,true,false))
console.log(enterClub(28,false,false))
console.log(enterClub(18,true,true))

function  chaeckAge(age) {
if (age >= 18) {return "Adult";}
else{return "Minor";}
}

console.log(checkAge(14));
console.log(checkAge(34));



function compareNumber( num){
    if (num > 100) {return "BIG" ;}
 if (num = 100)
{return "EXACTLY 100";}
 else{return "SMALL";}
}
console.log(compareNumber(567));
console.log(compareNumber(57));

 function checkUsername(username) {
if (username === "Fuad")
{return "Welcome";}
if (username !== "Fuad") {return "Unknown";}

 }

 console.log(checkUsername("Olamilekan"));
 console.log(checkUsername("Oluwapelumi"));
 console.log(checkUsername("Fuad"));

 function gradeStudent(score) {
    if (score >= 70) {return "A";}
    else if (score >=60   && score <69)
         { return "B";
    } else if(score >= 50 &&  score < 59)
    {return "C";
    } else
        {return "D";
    }
}
console.log(gradeStudent(67));
console.log(gradeStudent(7));
console.log(gradeStudent(87));


function checkWeather(temp) {
    if (temp > 30) {return "Very Hot";
    }else if (temp >= 20 && temp < 29) {return "Normal ";
    }else  {return "COLD";}
}

console.log(checkWeather(45));
console.log(checkWeather(5));
console.log(checkWeather(25));





function canWork(age , hasQuqlification){
    if (age >= 18 && hasQuqlification )
{return "You can work";}
else {return "You cannot work";}
}

console.log(canWork(12 , false));
console.log(canWork(19 , true));
console.log(canWork(22 , false));


function getFreeEntry(isStudent,isVip) {
    if (isStudent  && isVip)
        {return "Free entry";

        }else {return "Pay";}
}

console.log(getFreeEntry(false,true))
console.log(getFreeEntry(false,false))
console.log(getFreeEntry(true,true))
 
function canTravel(age , hasPassort ,isCitizen) {
    if(age >= 18 && hasPassort === true || isCitizen === true)
    {return "Allowed to travel";}
    else{return "Not allowed";}

}
console.log(canTravel(21, false, true));
console.log(canTravel(11, false, true));
console.log(canTravel(13, false, false));


function checkAge(age){
    age >= 18? console.log ("Adult") : console.log("Minor");
}

checkAge(19);
checkAge(9);


function checkScore(score)  {
    score >= 50? console.log("PASS"): console.log("Fail");
}
checkScore(88);
checkScore(66);
checkScore(14);

function canEnter(age, hasTicket) {
age >=18 &&  hasTicket? console.log("Welcome"):console.log("Not allowed" )
}
canEnter(17,true);
canEnter(19,false);
canEnter(25,true);

let numbers = ["Rice","Beans","Spag","DODO","Bread" ];

console.log(numbers[0]);
console.log(numbers[2]);
console.log(numbers[4]);

let number = [1,2,5,7,8];
console.log(number[1]);
console.log(number[3]);

let person = ["Fuad",  21,false];

console.log(person[0]);
console.log(person[1]);
console.log(person[2]);

let clubs = ["ARSENAL","CHELSEA","MANCHESTER UNITED", "LEEDS","BARCA" ];
clubs[1]="EVERTON";
console.log(clubs);

let food = ["RICE", "FISH","SPAG"];
food.push("dodo","meat");
console.log(food);

let friends = ["BOLA","SHOLA","KOLA"];
friends.push("TOLA","FOLA","GBOLA");
console.log(friends);
console.log(friends[5] );



let biig =[2,4,6,8,10];
console.log(biig.length);

let big =[2,4,6,8,1];
console.log(biig.length -1);

let bii =[2,4,6,9,1];
console.log(bii.length);
bii.push(5);
console.log(bii.length);
bii.pop();
console.log(bii.length);

let say = [ "HTML", "CSS", "JAVA SCRIP", "REACT"];

for (let y = 0; y < say.length; y++) {
    console.log(say[y]);
    
}


let numbero = [10,20, 30, 40, 50];

for (let z = 0; z < numbero.length; z++) {
    console.log(numbero[z]);
}

let foodie = ["RICE","BEANS","SPAG","DODO","BREAD"];

for (let w = 0; w < say.length; w += 2) {
    console.log(foodie[w]);
}

let ages = [12,21,16,30,17,25];

for (let t =0 ; t < ages.length;t++) {
if (ages[t] >= 18) {console.log(ages[t]);}

}


let numberl = [10,20,30,40,50];

for (let r = 0; r < numberl.length;r++)
{console.log(numberl[r]);

}

numberl[2] = 100;

console.log(numberl);

   

 let students = [
{isCalled:"FUAD", age:20},

{isCalled:"Ali", age:21}
 ];


 console.log(students[1].isCalled);


 let foodu  = [ {naame : "rice", price : 1200},
    { naame : "beans ", price : 2000},

{ naame:"burger",price:3400 }];

for (let s = 0;s<foodu.length; s++) {
if (foodu[s].price >= 2000 ) {console.log(foodu[s].naame+ " IS EXPENSIVE");}

else {console.log(foodu[s].naame+" is cheap" );}
}


let test = [{namie:"Fuad", score:75 , age:21},
{namie:"Ali", score:45 , age:22},{namie:"Roqeeb", score:75 , age:19},
{namie:"Hatid", score:95 , age:23}, {namie:"Wahab", score:85 , age:18}];
 
for (let o = 0;o < test.length;o++) {
    if (test[o].score>=50  && test[o].age >=20) {console.log(test[o].namie + " passed");}

    else if (test[o].score>=85 ) {console.log(test[o].namie +" got am excellent score");}
    else {console.log (test[o].namie +" failed");}
}


let running = [ {named: "Laptop", price: 500000 },
    {named:"Phone",price:250000},
    {named:"Mouse",price : 15000},
{named:"Keyboard",price:30000},
{named:"Monitor", price:120000}
];

let affordable = running.filter(function(run) 
{return run.price<= 100000;});

console.log(affordable);

let run = [ {named: "Laptop", price: 500000 },
 {named:"Phone",price:250000},
 {named:"Mouse",price : 15000},
{named:"Keyboard",price:30000},
{named:"Monitor", price:120000}
];

for (let ran of run) {
if (ran.price >= 200000) {console.log(ran.named + " is expensive");}
else {console.log(ran.named + "is affordable");}
}


function love (adore)
{ let result;
if (adore > 12) {result = "Good";}
else {result ="low";}

return result;}
console.log(love(16));


let products = [ {named: "Laptop", price: 500000 },
 {named:"Phone",price:250000},
 {named:"Mouse",price : 15000},
{named:"Keyboard",price:30000},
{named:"Monitor", price:120000}
];

function checkprice(product) {
    if (product.price >= 100000) {return product.named + " is expensive";}
 else {return product.named + " is affordable"; }   
}

for (let product of products) {
    console.log(checkprice(product));
}


function checkAge (age) {
if (age >= 18) {return " You can enter";
}    
else {return "You are too young";}
}
console.log (checkAge(20));


let scores = [45,82,67,91,30,76,55];
for (let f = 0; f <scores.length;f++ ) {
    if (scores[f]>= 70) {console.log(scores[f]);}

}


let prices = [500, 1200, 300,2500,800];

for (let z = 0; z<prices.length;z++) {
 if (prices[z] <= 1000 ) {console.log (prices[z]);}  
}

let username = "FUAD";
let balance = 15000;

if (balance >= 10000) {
    console.log(username + " you can make withdrawl");
}

else {console.log(username + "insufficient balance");}

balance =5000;
console.log();



function checkAge(number) {
    if (number >= 10) {return "Big number";}
else {return "Small number ";}
}
console.log(checkAge(15));
let number5 = [10,20,30,40,50];

for (let y =0 ; y<number5.length;y++)
{console.log(number5[y]);}

let number6 = [12,5,18,7,25,3];
 for (let v = 0; v<number6.length;v++)
{ if (number6[v] >= 10) {console.log(number6[v])}}

 function addNumbers(w,u) 
 {  return w + u ; }

 console.log(addNumbers(15,25)); 


 let aged = [12, 18,25,16,30,14];

 let assist = aged.filter(function(nem)
{return aged >= 18;});


let money = 7500;

if (money >= 5000 ) {console.log("You can buy it ");}
else {console.log("not enough money");}


let foods = ["rice","spaghetti","yam","beans"];

for ( let y = 0 ; y < foods.length;y++)
 {console.log(foods[y]);}
 


function checkTemperature(temp ) {
    if  (temp >= 30) {
        return " Hot";
    }
 else {return "Cold" };   }
 
console.log(checkTemperature(35));

let aging = [15, 21,17,30,12,25];
for (let o= 0; o<aging.length;o++) {
    console.log (aging[o]);
}


function multiply(r ,j) {
    return r *j ;
}
console.log(multiply(6,5));

let numbered = [5,12,8,20,3,15];

let ran = numbered.filter(function(nun)
{return nun >= 10;});
console.log(ran);
let userName = "FUAD";
let score = 75;
 
if ( score >= 50) {console.log(userName + " PASSED");}
else {console.log(userName + " FAILED");}

let foodies = ["rice","beans","yam" 
];
function showfood(foodies) 
{for (let r = 0;r<foodies.length;r++) 
{console.log(foodies[r]);}
 }
  
 showfood(foodies);

 let numberr = [10 , 25 ,8,40,15];

 function showBigNumbers(numberr) {
    for (let z = 0;z < numberr.length;z++)
{if  (numberr[z] >=15 ) {console.log(numberr[z]);}}    }

    showBigNumbers(numberr); 

    let rae = document.getElementById("rae");
    rae.textContent = "WORLD IS MOVING"
    
    let bae = document.getElementById("bae");
    bae.textContent = "WELCOME TO JS FUAD"
 
    let raise = document.getElementById("raise")
     raise.addEventListener("click",function () {
        console.log("THANKS FOR DONATING");
     });

     