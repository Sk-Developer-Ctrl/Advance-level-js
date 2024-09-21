// --- Function Syntex----------------

function Name (){
  console.log(`Ali Is ${aliAge} Year Old`)}

       // ----- call by ----------

       name();
    //---------------
let aliAge = 21;
function printAge (){
  console.log(`Ali Is ${aliAge} Year Old`)
}

printAge();
aliAge = 24
printAge();
aliAge = 25
printAge();
aliAge = 26

        //=== also writen  by ====

    function greeting(name) {
      console.log (`Hello ${name} sab `);
    
        }
    
        
    greeting('Sikander');
    
    greeting('Umer');

    // ---- also set its defalt value ---
    function greeting(name = 'Ch') {
      console.log (`Hello ${name} sab `);

    }

    
    greeting();


      //----- return -------
  
      function carDriverAge() {
        let age = ""
        if (age === undefined  ){
          return 'Please define you age';
        }
        
        let status;
        if ( age > 18){
          return 'you can drive'
        }
        else if (age === undefined  ){
          return 'Please define you age';
        }
        else {
          return  'you can not drive'
        }
      }
  
  
      alert(carDriverAge())
// -------- parameters and arguments ------
function sum(sum (a,b));
let sum = a + b;
return sum; 

console.log(sum(4,5))
console.log(sum(40,50))
console.log(sum(44,55))


// --- How to find odd and even ----


function isOdd(number){
  let rem = number % 2;
  let isOdd = rem === 1;
  return isOdd;
}
 console.log(isOdd(4))
 console.log(isOdd(3))
 console.log(isOdd(15))
 console.log(isOdd(14))


 // --- find a larger number -----

 function larger(num1, num2){
      
  return num1>num2 ? num1 : num2
}

console.log(larger(14,12))

// converter euro to pkr----

function convert(C){
  return ((9/5) * C) + 32

}

console.log (convert('32'))

function euroToPkr (pkr){
  return pkr * 308.34 
}

console.log (euroToPkr('2'))
