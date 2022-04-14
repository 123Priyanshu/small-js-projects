function calculator(OPER, inputNum, endNum) {
    if (OPER == 'add') {
      return inputNum + endNum;
    }
    if (OPER == 'subtract') {
      return inputNum - endNum;
    }
  
  }
  var returnVal = calculator('add', 9, 12)
  console.log(`${returnVal}`)
  var returnVal = calculator('subtract', 9, 12)
  console.log(`${returnVal}`)
  