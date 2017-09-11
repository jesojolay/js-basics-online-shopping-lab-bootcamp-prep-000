var cart = [{
    "bananas": 17
}, {
    "pancake batter": 5
}, {
    "eggs": 49
}];

function getCart() {
    return cart;
}

function setCart(c) {
    cart = c;
    return cart;
}

function addToCart(item) {
    // write your code here
    var cartobj = {};
    var itemPrice = Math.floor((Math.random() * 100) + 1);
    cartobj[item] = itemPrice;
    cart.push(cartobj);
    console.log(`${item} has been added to your cart.`);
    return cart;
}
// { "bananas": 17 }, { "pancake batter": 5 }, { "eggs": 49 }
function viewCart() {
    // write your code here
    var keys = [];
    var sentence = "In your cart, you have ";
    if (cart.length === 0) {
        console.log("Your shopping cart is empty.")
    } else {
        for (var i = 0; i < cart.length; i++) {
            keys.push(String(Object.keys(cart[i])));
        }
        for (var i = 0; i < keys.length; i++) {
            if (cart.length === 1) {
                var temp = `${keys[i]} at $${cart[i][keys[i]]}.`;
                console.log(sentence += temp);
            } else if (cart.length === 2) {
                var temp = `${keys[i]} at $${cart[i][keys[i]]}`;
                if (i == 0) {
                    sentence += temp + " and ";
                } else {
                    console.log(sentence += temp + ".");
                }
            } else {
                if (i === cart.length - 1) {
                    console.log(sentence += `and ${keys[i]} at $${cart[i][keys[i]]}.`);
                } else {
                    sentence += `${keys[i]} at $${cart[i][keys[i]]}, `;
                }
            }
        }
    }
}
var sum = 0;

function total() {
    // write your code here
    var keys = [];
    for (var i = 0; i < cart.length; i++) {
        keys.push(String(Object.keys(cart[i])));
    }
    for (var i = 0; i < cart.length; i++) {
        sum += cart[i][keys[i]];
    }
    return sum;
}


function removeFromCart(item) {
    // write your code here
    var keys = [];
    var falsi = false;
    for (var i = 0; i < cart.length; i++) {
        keys.push(String(Object.keys(cart[i])));
    }
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].hasOwnProperty(item)) {
            cart.splice(i, 1);
            var falsi = true;
            return cart;
        } else {
            falsi = false;
        }
    }
    if (falsi === false) {
        console.log("That item is not in your cart.");
        return cart;
    }
}

function placeOrder(cardNumber) {
    // write your code here
    total();
    if (cardNumber === undefined) {
        console.log("Sorry, we don't have a credit card on file for you.");
    } else {
        console.log(`Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`);
        for (var i = 1; i < cart.length; i++) {
            cart.shift();
        }
    }
    console.log(cart);
}
placeOrder(12312321321);
