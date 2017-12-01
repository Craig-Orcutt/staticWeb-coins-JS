

/*
Input: 0.67
Output:
{
  quarters: 2,
  dimes: 1,
  nickels: 1,
  pennies: 2
}

*/
// take an input
// divide the money into quarters
// ===> find out how many quarters fit into money
// =====> find out how much money is remaining
// ========> add the remaining money to the coin purse
// repeat the steps to find out how many coins(dimes then nickels then pennies)
// take the output for how many of each type of coin and place that into the DOM
let pennies = 0.01;
let nickels = 0.05;
let dimes = 0.10;
let quarters = 0.25;
console.log("hi");
let mula = 69.51;
// Initialize a JavaScript object to hold the coins
var coinPurse = {};
// what is remaining after I calculate how many coins will fit into a give amount
let remainder ;

function coinCounter (moneyInput) {
  
  // see how many quarters will fit into the input amount
  coinPurse.quarters = Math.floor(moneyInput/quarters);

  // see how much is left over after the quarter amount is solved
  remainder  = cash_remainder(moneyInput%quarters);

  // see how many dimes will fit into the input amount
  coinPurse.dimes = Math.floor(remainder/dimes);

  // see how much is left over after the dime amount is determined
  remainder = cash_remainder(remainder%dimes);
  // see how many nickels will fit into the input amount
  coinPurse.nickels = Math.floor(remainder/nickels);
  // see how much is left over after the nickels amount is determined
  remainder = cash_remainder(remainder%nickels);
  // see how many pennies will fit into the input amount
  coinPurse.pennies = Math.floor(remainder/pennies);
  // see how much is left over after the pennies amount is determined
  remainder = cash_remainder(remainder%pennies);
  console.log(coinPurse);
  
  return coinPurse;
}


function cash_remainder(num){
  return Math.round(num * 100) /100;
}


var coins = coinCounter(mula)

// let money_left = [];
// function mod_money(money){
  //   let money_left = (money % quarters) ;;
  //   console.log(mod_money(money_left));
  // }
  // console.log(mod_money(mula));
  
  
  
  
  
  
  
  
  // function that rounds cash to nearest 100th.
  function cash_round(num){
    return Math.ceil(num * 100) /100;
  }







        // if (money/quarters){
        //     coinPurse.quarters = 1;
        // } 
        // else if(money/dimes){
        //   coinPurse.dimes = 0;
        // }
        // else if(money/nickels){
        //   coinPurse.nickels = 0;
        // }
        // else if(money/pennies){
        // coinPurse.pennies = 0;
        // }
