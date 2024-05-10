module.exports={
     x: 20,
     y:30,

     z:function(){
          return 10
     }


}

const numbers = [1, 2, 3, 4, 5];

// Filter out even numbers
const filteredNumbers = numbers.filter(number => number % 2 !== 0);

console.log(filteredNumbers);