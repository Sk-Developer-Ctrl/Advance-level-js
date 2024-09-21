 let sum = function (num1 , num2) {
      return num1 + num2
    }
    console.log(sum(23, 27))

    let summOfThree = function (num1 , num2, num3, sumOfTwo) {
      let sum1 = sumOfTwo(num1 , num2);
      return sumOfTwo(sum1 , num3);
    }
    console.log(summOfThree(23,27, 10, sum));
