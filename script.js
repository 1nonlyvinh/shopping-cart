
let shoppingCart = []; //creates array 4 shopping cart 
let appleButton = document.querySelector('#add-apple'); //gets apple button
let cartList = document.querySelector('#cart-items'); //gets cart ul

appleButton.addEventListener("click", () => {
    shoppingCart.push("Apple"); 
    console.log(shoppingCart);
    let li = document.createElement("li");
    li.textContent = "Apple"; 
    cartList.appendChild(li);
});