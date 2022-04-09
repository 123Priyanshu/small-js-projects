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
  var hi = even(12)
  console.log(`${hi}`)
  