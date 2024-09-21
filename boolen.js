
console.log (typeof true)
console.log (typeof 'true')
console.log (5 < 8)
console.log (5 > 8)
console.log (5 <= 8)
console.log (5 >= 8)
console.log (5 == 5)

console.log (5 == 5.0)
console.log (5 === 5)

// ! is equal to not and != means inequality
console.log (5 !== 5)
console.log (5 != 5)
// Double Equal to can accepet the value in the string but tripal equal to do not accepet it 
console.log (5 == '5')
console.log (5 === '5')

console.log("cheaking if you can drive");
let age = 12
if (age > 65){
console.log("You can not derive");
} else if (age < 18){
console.log("You can not derive");
} else {
console.log("You can derive");
} 

// logical operaters are "and &&" "or||"" and "not !"


let age = 20;
if (age<18 || age>65 ){
  console.log ('Use a biscyle');
} 
else{
  console.log('Use a car');
}

        //---------- and ------------

let age = 20;
if (age>18 && age<65 ){
  console.log ('Use a biscyle');
} 
else{
  console.log('Use a car');
}


//------------ scope -----------------
  // their are many types of scope this is global scope
let age = 10;
      let userMessage=''
if (age > 18){
  userMessage='Use a car'}
else{
   userMessage='Use a bike'} 
   console.log(userMessage);
  
   //  this is Block scope


   let age = 10;
if (age > 18){
  let userMessage='Use a car';
  console.log(userMessage);}
else{
   let userMessage='Use a bike';
   console.log(userMessage);} 


// ------------- Truthy and false------
//- When the number is undefined , Null , 0 , false of NaN.


    //--- truth---------
let age = 4
    console.log(age);
      if (age){
        console.log('You have a valid age');
      } else{
        console.log('--------')
      }

      //----false------
      let age = ''
      let age = 0
      let age = null
      let age = '0/hours'
      console.log(age);
        if (age){
          console.log('You have a valid age');
        } else{
          console.log('--------')
        }

// ----- alternative--------------------

  //---------- Ternary Operator-----
        // replace this code with
        let age =40;
    let result;
    if (age > 18){
      result='Adult'
    }
    else{
      result='Kid'
    }
    console.log(result)
      // This
    let age = 12;
    let result = age > 18 ? 'Adult' : 'kid';
    console.log(result);
  // --------- Guard Operator-------------
      // if age is define then take the age if not define then take 18
  let age ;
  let finalAge= age || 18;
  console.log(finalAge)

  // --------- Default Operator-------------
      // same as guard Operator but only work when age id not define of null

      let age ;
      let finalAge= age ?? 18;
      console.log(finalAge)