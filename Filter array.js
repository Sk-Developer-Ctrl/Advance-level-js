
    let arr = [1,2,3,4,5,6,7,8,9];
    let odds = arr.filter((num, index) => {
      if (num % 2 === 1){
        return true;
      } 
      return false;
    })

    console.log(odds)

  // shoter the code
    let odd = arr.filter((num, index) => num % 2 === 1
       )

    console.log(odd)

  // map array 

  let arrr = [1,2,3,4];

  let square = arrr.map((num) => num * num);

  console.log(square)
