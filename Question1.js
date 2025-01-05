let fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];
let removedfruits = fruits.splice(-4);
// console.log(removedfruits)
fruits.splice(0, 0, ...removedfruits)
console.log(fruits)
