// let person = {
//     name: 'Zeeko',
//     age: 76
// };
// let message = "Ngl idk what to write so here i am not doing anything even though i am doing something which is writing this dumb line";
// alert(message);
// alert("Sike! Here's a new line where i'm just talking shit cus i don't have anything to do");
// alert(":)");
// alert("Dunno if this is possible but lemme try chainning this string with 3 + 3 = "+ (3 + 3) + "\nIf this works then i'm just him ig");
// let result = prompt("From a scale of 1-10, how smelly are you today? ", 100);
// let check = confirm("Do you smell right now?", "Yes, i am a smelly cunt", "No, i don't stink");
// if (check == true)
//     alert("AYYYOO HE SMELLS KEKEKEKEKEKEKEKEKEK HEHEHEHEHE (Kill me pls)");
// else
//     alert("Dude got good hygiene tbf");
// console.log(person.name);
// console.log("=========> ");
// console.log(person['age']);

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

// let order = (fruit_name, call_production) =>{
//     setTimeout(function(){
//         console.log(stocks.Fruits[fruit_name] + " was selected");
//         call_production();
//     },2000);
// };

// let production = () =>{
//     setTimeout(function(){
//         console.log("Production has started")
//         setTimeout(function(){
//             console.log("The fruit has been chopped");
//             setTimeout(function(){
//                 console.log(stocks.liquid[0] + " and " + stocks.liquid[1] + " have been added"); 
//                 setTimeout(function(){
//                     console.log("The machine has been started");
//                     setTimeout(function(){
//                         console.log("The icecream holder is gonna be a " + stocks.holder[0]);
//                         setTimeout(function(){
//                             console.log(stocks.toppings[0] + " is added to the icecream");
//                             setTimeout(function(){
//                                 console.log("The icecream is ready to be served");
//                             }, 2000);
//                         },3000);
//                     },2000);    
//                 },1000);
//             },1000)
//         }, 2000);
//     }, 0000);
// };

// order(0, production);
let shop_state  = true;
let order = (time, work) => {
return new Promise((resolve, reject) => { 
    if (shop_state)
    {
        setTimeout(function(){
            resolve(work());
        }, time);
    }
    else{
        reject(console.log("The shop is close, please come back another time!"));
    }
}
)
}
order(2000, function(){console.log("You picked " + stocks.Fruits[0])})
.then(function(){
    return order(0000, function(){console.log("Production has started");})
})
.then(function(){
    return order(2000, function(){console.log("The fruit has been chopped");})
})
.then(function(){
    return order(1000, function(){console.log(stocks.liquid[0] + " and " + stocks.liquid[1] + " have been added");})
})
.then(function(){
    return order(1000, function(){console.log("The machine has been started");})
})
.then(function(){
    return order(2000, function(){console.log("The icecream holder is gonna be a " + stocks.holder[0]);})
})
.then(function(){
    return order(3000, function(){console.log(stocks.toppings[0] + " is added to the icecream");})
})
.then(function(){
    return order(2000, function(){console.log("The icecream is ready to be served!");})
})
.catch(function(){
    console.log("Customer left");
})
