let count = 0;
let total = 0;
let buttons =
document.querySelectorAll("button");
buttons.forEach(function(button){
    button.addEventListener("click",function(){
        count++;
        total = total + 1000;
        document.getElementById("cart").innerText ="Cart Items: "+ count;
        document.getElementById("total").innerText = "Total Price: Rs. " +total;
    });
});