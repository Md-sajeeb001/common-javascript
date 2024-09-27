// cell back function !

// akta function ar bitor amera arekta function o use korte pari.

function cookSomthing(cookBiriyani, name){
    cookBiriyani(name);
}

// const arr = [23, 43, 45]
function cookBiriyani(name){
    console.log('we make a', name)
}

function cookPizza(name){
    console.log('i love', name)
}


// cookSomthing(cookBiriyani, 'Biriyani');
// cookSomthing(cookPizza, 'pizza');

function showProductsPrice(productOne, price){
    productOne(price);
};

function productOne(price){
    console.log('first product is laptop price:', price)
}

function phone(price){
    console.log('koliza kapano phone price:', price)
}
// showProductsPrice(productOne, 65000);
// showProductsPrice(phone, 154000);

// apply in person daily life

function person(sleep, time){
    sleep(time);
}

function sleep(time){
    console.log('i am sleepin from', time)
}
person(sleep, "1'AM");