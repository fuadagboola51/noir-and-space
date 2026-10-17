
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




let addBtn = document.getElementById ("addBtn");
let minusBtn = document.getElementById("minusBtn");
let display = document.getElementById("display");
let quantity = 1
let sumAll = document.getElementById("total");
let total =20500

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

let addqBtn = document.getElementById ("addqBtn");
let minusqBtn = document.getElementById("minusqBtn");
let displaq = document.getElementById("displaq");
let quantityq = 1
let sumAllq = document.getElementById("totalq");
let totalq =17500

addqBtn.addEventListener ("click",() => 
    {  quantityq++;
        displaq.textContent = quantityq;
        sumAllq.textContent ="₦"+ calculateTotal(quantityq,totalq);
    
    });

    minusqBtn.addEventListener ( "click",() => 
    {if (quantityq > 1) 
        {quantityq--;}
        displaq.textContent = quantityq;
        sumAllq.textContent ="₦"+ calculateTotal(quantityq,totalq);

    });


let addwBtn = document.getElementById ("addwBtn");
let minuswBtn = document.getElementById("minuswBtn");
let displaw = document.getElementById("displaw");
let quantityw = 1
let sumAllw = document.getElementById("totalw");
let totalw =19500

addwBtn.addEventListener ("click",() => 
    {  quantityw++;
        displaw.textContent = quantityw;
        sumAllw.textContent ="₦"+ calculateTotal(quantityw,totalw);
    
    });

    minuswBtn.addEventListener ( "click",() => 
    {if (quantityw > 1) 
        {quantityw--;}
        displaw.textContent = quantityw;
        sumAllw.textContent ="₦"+ calculateTotal(quantityw,totalw);

    });


let addeBtn = document.getElementById ("addeBtn");
let minuseBtn = document.getElementById("minuseBtn");
let displae = document.getElementById("displae");
let quantitye = 1
let sumAlle = document.getElementById("totale");
let totale =13000

addeBtn.addEventListener ("click",() => 
    {  quantitye++;
        displae.textContent = quantitye;
        sumAlle.textContent ="₦"+ calculateTotal(quantitye,totale);
    
    });

    minuseBtn.addEventListener ( "click",() => 
    {if (quantitye > 1) 
        {quantitye--;}
        displae.textContent = quantitye;
        sumAlle.textContent ="₦"+ calculateTotal(quantitye,totale);

    });

let addrBtn = document.getElementById ("addrBtn");
let minusrBtn = document.getElementById("minusrBtn");
let displar = document.getElementById("displar");
let quantityr = 1
let sumAllr = document.getElementById("totalr");
let totalr =14500

addrBtn.addEventListener ("click",() => 
    {  quantityr++;
        displar.textContent = quantityr;
        sumAllr.textContent ="₦"+ calculateTotal(quantityr,totalr);
    
    });

    minusrBtn.addEventListener ( "click",() => 
    {if (quantityr > 1) 
        {quantityr--;}
        displar.textContent = quantityr;
        sumAllr.textContent ="₦"+ calculateTotal(quantityr,totalr);

    });


let addtBtn = document.getElementById ("addtBtn");
let minustBtn = document.getElementById("minustBtn");
let displat = document.getElementById("displat");
let quantityt = 1
let sumAllt = document.getElementById("totalt");
let totalt =17500

addtBtn.addEventListener ("click",() => 
    {  quantityt++;
        displat.textContent = quantityt;
        sumAllt.textContent ="₦"+ calculateTotal(quantityt,totalt);
    
    });

    minustBtn.addEventListener ( "click",() => 
    {if (quantityt > 1) 
        {quantityt--;}
        displat.textContent = quantityt;
        sumAllt.textContent ="₦"+ calculateTotal(quantityt,totalt);

    });






