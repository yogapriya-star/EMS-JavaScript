const numbers = [1,2,3,4,5];

const doubleNumbers = numbers.map(function (num, index){
    console.log("Index :",index);
    return num*2*index;
});

const odd = numbers.filter((num) => num % 2 !== 0);

console.log("The Odd Numbers are :",odd);


console.log("The Given Numbers are :",numbers);

console.log("The Output :",doubleNumbers);
