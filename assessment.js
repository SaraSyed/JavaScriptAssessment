
function isPrime(x) {
    for (var i = 2; i < x; i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return x > 1;       
}

//alert(isPrime(1));

function amountToCoins(amount, coins) {
    if (amount === 0) {
        return [];
    }
    else {
        if (amount >= coins[0]) {
            left = (amount - coins[0]);
            return [coins[0]].concat(amountToCoins(left, coins)); //combine both arrays 
        }
        else {
            coins.shift(); //removes the first element from an array and returns that removed element 
            return amountToCoins(amount, coins);
        }
    }
}
//alert(amountToCoins(46, [25, 10, 5, 2, 1]));

function uniqueLetters(word1) {
    var str = word1;
    var uniqueLetter = "";
    for (var x = 0; x < str.length; x++) {

        if (uniqueLetter.indexOf(str.charAt(x)) == -1) {
            uniqueLetter += str[x];

        }
    }
    return uniqueLetter;
}
//alert(uniqueLetters("thequickbrownfoxjumpsoverthelazydog"));

function factorial(x) {

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);     
}
//alert(factorial(5));

function fibonacci(number) {

    var fibonacciNumber
}

//shift + alt + f = indent