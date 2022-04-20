function containsNum(inputNum, endNum, midNum) {
    console.log(`function starts here`)
      if (inputNum <= midNum && midNum<= endNum) {
      console.log(`if condition`)
        return true;
      } else {
       console.log(`else condition`)
        return false;
      }
    }
    var returnVal = containsNum(23, 38,8);
    console.log(`${returnVal}`);
    