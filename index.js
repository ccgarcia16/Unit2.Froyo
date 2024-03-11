//I create my prompt, and create a variable to assign the prompt to
let list = prompt("Enter your froyo flavors seperated by a comma!");

//I create a function with a loop, assigning order to the list, ensuring it's split with a comma
//I create an empty object, drinkObj, and run a loop going through all inputs from the prompt
const orderMaker = (drinkList) => {
  const order = list.split(",");
  const drinkObj = {};
//The if else statement ensures that if an item is mentioned more than once, it goes up by 1 incrimentally, if not, it stays at a 1 value
  for (i = 0; i < order.length; i++) {
    if (drinkObj[order[i]]) {
     drinkObj[order[i]]++;
    }else{
      drinkObj[order[i]] = 1;
    }
//We console log our object so when we invoke it on line 21, we will have our object showing how often our items are repeated
    console.log(drinkObj)
  }
}

console.log(orderMaker(list));
//Thanks to Nick R. for the help! Very useful info, he helped us understand tremendously.