  let num = 1; //initialization
    while(num <= 10){ // condition
      console.log(num);
      num = num + 1; //updating
    }
    console.log(`final value` + num)

    let x = 0;
    while (x <= 1){
    console.log(x);
    x = Math.random() * 2;
    }
    console.log(`final value` + x)

// do while loop

let b = 0
do{
  console.log(b);
  b++;
}
while (b < 5)

// for loop

for(let s = 1; s <= 10; s++){
  console.log(s)
  console.log(`final value` + s)
}

let nums = [4,54,66,87,23,43,55]
for (let i= 0; i< nums.length; i++){
  console.log(nums[i]);
}

// loop accumulate pattern

  let g = [21, 23, 6];
  let sum = 0;
  for (let i = 0; i < g.length; i++){
    sum = sum + g[i];
  }
  console.log(`sum of the g +  ${sum}`);


  let square = [];
  for (let i = 0; i < g.length; i++){
    square.push(g[i] * g[i]);
  }
  console.log(`square of the g +  ${square}`);

  //  loop break and continue 

  for (let i = 0; i < 50; i++){
    console.log(i);
    if (i == 34){
      break;
    }
  }

  let arrm =[ 1,2,3,4,5,6,7,8]
  for( let i =0; i< arrm.length; i++){
  if ( i === 5 ){
  console.log(i)
  break;
  }
  }
  
// continue

  for ( i = 1; i<= 25; i++){
    if (i % 2 == 0){
    continue;
  }
  console.log(i);
  }