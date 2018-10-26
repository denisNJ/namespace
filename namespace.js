/***************************
Filename: namespace.js
Author: @Denis Nolasco Jovel
Description: namespace assignment
Date: 10/26/18
***************************/

var NOLA0123 = {
    
    init: function () {
        
        let newDiv = document.createElement("div");
        newDiv.className = ("box");
        newDiv.textContent = ("nola0123");
        document.getElementById("boxes").appendChild(newDiv);
        
        newDiv.addEventListener("mouseover", function () {
        newDiv.classList.toggle("highlight");
            
        });

        newDiv.addEventListener("click", function () {
            newDiv.style.borderColor = "blue";
            newDiv.style.backgroundColor = "yellow";
            newDiv.textContent = "Ma name Jeff";
        });

        newDiv.addEventListener("mouseout", function () {
            newDiv.classList.toggle("highlight");
            newDiv.removeAttribute("style");
            newDiv.textContent = "nola0123";
        });
    }
}
