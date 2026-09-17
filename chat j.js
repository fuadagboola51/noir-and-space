let dax = document.querySelector(".dax");
let dc = document.querySelector(".dc");
dax.addEventListener("click",function (dfg)
{if (dax.textContent=== "Follow") 
    {dax.textContent = "Following";
        dc.textContent = "Fuad the developer ";
}else{dax.textContent = "Follow";
    dc.textContent = " ";
}
});
let hidden = document.querySelector(".hidden");
let xad = document.querySelector(".xad");

xad.addEventListener("click",function(ghj) {
    if (hidden.style.display === "none") {
    hidden.style.display = "block";}
    else{hidden.style.display = "none";}
} );
