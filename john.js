var x = 5;
var y = 9;
var z = x + y;
document.getElementById("demo").innerHTML ="value of z is:" +z;
function even(inputNum) {
    var remainder = inputNum % 2;
    if (remainder == 0) {
      console.log(`remainder = ${remainder}`)
      console.log(`${inputNum} is an even number`);
      return true;
    }
    console.log(`remainder = ${remainder}`)
    console.log(`${inputNum} an odd number`);
    return false;
  }
  even(z)