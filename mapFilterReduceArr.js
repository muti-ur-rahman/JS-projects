// let arr = [1,2,5,6,7,8,77,9]
// arr1 = arr.filter ( a=>a%2==0
//     .map(a=>a*2
//     .reduce(2,4,6) { arr },0)
//     )
     
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
.map(num => num * 2)             // Step 1: Double each number
.filter(num => num <= 10)        // Step 2: Keep numbers <= 10
.reduce((acc, num) => acc + num, 0);  // Step 3: Sum them up

console.log(result); // Output: 20
