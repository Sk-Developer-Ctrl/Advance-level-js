
    let arr = [5,6];
    arr.push(7);
    arr.unshift(4);
    console.log(arr);

    function getElement(arra, position) {
      return arra [position-1];
    }

    let  arra = [3,2,3,4,5,6,7,8]
    console.log(getElement(arra,1))

    function arrCopy(arrr){
      return arrr.slice(0,arrr.length);
    }

    let arrr = [2,3,4,5]
    console.log(arrCopy(arrr))

    function isPrime(num) {
      for (let i = 2; i < num; i++){
        if (num % i === 0){
        return false;
      }
     }
     return true;
    }
    let num = 2;
    let i = 0;
    while(true){
      if (isPrime(num)){
        console.log(num);
        i++;
        if (i >= 5){
          break
        }
      }
      num++;
    }

    console.log(isPrime(4));
    console.log(isPrime(5));
    console.log(isPrime(10));

    for(let i = 10; i > 0; i--){
      console.log(i);
    }

    let nums = [1,-6,5,7,-98]
    for(let i = 0; i < nums.length; i++ ){
      if(nums[i] < 0) continue;
      console.log(nums[i]);
    }

    let a = ['kg', 'coding']
      let result ='';
      for(let i = 0; i< a.length; i++){
result += a(i) + '';
      }
    console.log(result);

console.log(a.join(" "))
