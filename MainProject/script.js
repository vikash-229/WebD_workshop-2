
window.onload = function () {
    alert("Welcome To Vice City!");
};


const missions = [
    "Steal a sports car from Ocean Beach.",
    "Meet Lance at the Malibu Club.",
    "Escape from the police.",
    "Deliver a package to Downtown.",
    "Win the street race."
];

document.getElementById("startBtn").addEventListener("click", function (e) {
    e.preventDefault();

    let randomMission =
        missions[Math.floor(Math.random() * missions.length)];

    document.getElementById("missionText").innerHTML =
        "<h2>MISSION STARTED!</h2><p>" + randomMission + "</p>";
});

document.getElementById("buyBtn").addEventListener("click", function (e) {
    e.preventDefault();
    alert("Purchase feature coming soon!");
});

document.getElementById("learnBtn").addEventListener("click", function(e){
    e.preventDefault();

    alert(
        "The game is set in 1986 in fictional Vice City, inspired by Miami, Florida."
    );
});

document.getElementById("watchBtn").addEventListener("click", function(e){
    e.preventDefault();

    alert("Opening Trailer...");

    window.open(
        "https://www.youtube.com/watch?v=VQRLujxTm3c",
        "_blank"
    );
});

document.getElementById("galleryBtn").addEventListener("click", function(e){
    e.preventDefault();

    let result = confirm(
        "Do you want to open the Vice City Gallery?"
    );

    if(result){
        window.location.href = "screenshot.html";
    }
});

document.getElementById("cartBtn").addEventListener("click", function(){
    document.getElementById("cartSidebar").classList.add("active");
});

document.getElementById("closeCart").addEventListener("click", function(){
    document.getElementById("cartSidebar").classList.remove("active");
});

let cart = [];

function addToCart(btn, name, price){

    btn.innerHTML = "✓ Added";
    btn.style.backgroundColor = "green";
    btn.style.color = "white";

    let existingItem = cart.find(item => item.name === name);

    if(existingItem){
        existingItem.quantity++;
    }else{
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    displayCart();
}

function displayCart(){

    let cartList = document.getElementById("cart");

    cartList.innerHTML = "";

    let total = 0;

    cart.forEach((item,index)=>{

        total += item.price * item.quantity;

        cartList.innerHTML += `
        <li style="margin-bottom:15px;">
            <b>${item.name}</b><br>

            <button onclick="decreaseQty(${index})">-</button>

            <span style="padding:0 10px;">
                ${item.quantity}
            </span>

            <button onclick="increaseQty(${index})">+</button>

            <br><br>

            ₹${item.price * item.quantity}

            <br><br>

            <button onclick="removeItem(${index})">
                Remove
            </button>
        </li>
        <hr>`;
    });

    document.getElementById("total").innerText = total;

    if(document.getElementById("cartCount")){
        document.getElementById("cartCount").innerText =
            cart.reduce((sum,item)=>sum + item.quantity,0);
    }
}

function increaseQty(index){

    cart[index].quantity++;

    displayCart();
}

function decreaseQty(index){

    cart[index].quantity--;

    if(cart[index].quantity <= 0){
        cart.splice(index,1);
    }

    displayCart();
}

function removeItem(index){

    cart.splice(index,1);

    displayCart();
}