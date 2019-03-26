function doIt() {
    console.log('I am done');
}
setTimeout(doIt, 5000);
console.log(doIt())

// step 1

function foo(func) {
    // What to do here?
    console.log(func())
}

function bar() {
console.log('Hello, I am bar!');
}

foo(bar);

// step 2

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    // make array 
    // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next 
    let Array = [];

    for(let i = startIndex ; i <= stopIndex ; i++){

        if(i % 3 == 0){
            return threeCallback(i);
        };

        if(i % 5 == 0){
            return fiveCallback(i);
        };
    }
    
    console.log(Array);
    return Array;
    
}

console.log(threeFive(10 , 15 , function(x){ 
    console.log( x + 'is divisible by 3 ');
} ,
function(x){
    console.log(x + 'id dividable by 5');
}));


// step 5

function createBase(z){
    return function(l){
        return z + l
    }
}

let addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));







