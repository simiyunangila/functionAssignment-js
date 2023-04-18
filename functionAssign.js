// You manage a grocery store and need to keep track of the inventory of various items. You will use
// arrays to store the data and various functions to manipulate and analyze the data. 

// Create an array containing the names of all items in the inventory maximum of 10.
//function allItems(){
let fruits=["mangoes","oranges","Apples","Bananas","kiwi","pineapples"]
if(fruits.length<=10){
  console.log(fruits);
}

// Create a separate array with the corresponding stock quantities of each item maximum of 10.
let quantities=[9,10,4,7,7,9]
if(quantities[0]<=10){
  console.log(fruits,quantities);
}
// Write a function to add a new item to the inventory, updating both arrays.
function addNew(){
  fruits.push("Avocado")
  console.log(fruits);
  quantities.push(3)
  console.log(quantities);
  
}
addNew()


// Write a function to update the stock quantity of an existing item.
function update(){

}

// Write a function to calculate the total number of items in the inventory.
function calculate(){
//     let sum=0
//  for (let x = 0; x < fruits.length; x++){
//      sum+=fruits[x]
// }
// return sum.length
return fruits.length
}
 console.log(calculate());

// Write a function to find the item with the lowest stock quantity.
function sort(quantities){
 if (quantities.length<=1){
    return quantities
  }
  let mid=Math.floor(quantities.length/2)
  let left=quantities.slice(0,mid)
  let right=quantities.slice(mid)
  return sortedq(sort(left),sort(right))
}
function sortedq(left,right){
  emptyq=[]
  while(left.length && right.length){
    if(left[0]<right[0]){
      emptyq.push(left.shift())
    }else{
      emptyq.push(right.shift())
    }
  }
  return[...emptyq,...left,...right]
}
console.log(sort(quantities));
console.log(quantities[0]);