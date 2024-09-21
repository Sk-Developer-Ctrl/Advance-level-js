let user1= {
  name: 'Sikander',
  age : 20,
};

console.log(user1.name)

user1.name = 'umer';

console.log(user1.name)
console.log(user1['name'])
console.log(user1)

  
delete user1.age;
console.log(user1)

// --------- -------------- -----------
let product= {
  brand: 'Gucchi',
  item : 'Bag',
  price: 10000,

  //--- a function can also be define in the object

  displayProduct: function () {
    console.log(`Price Of Product is ${this.price}`)

  }


   //--- an object can be define in the object
  

};

product.displayProduct()


// ------ autoboxing ----------


console.log('This is Sikander Manzoor'.toUpperCase());
console.log('This is Sikander Manzoor'.replace('Manzoor', 'Arain'));


//------   cheaking the structure ----
let a =5;
let b = a;
console.log(a,b)
   a = 8;
   console.log(a,b)


let x = { num: 5};
let y = x;
console.log(x.num,y.num)
x.num= 8;
console.log(x.num,y.num)

let p = {pop: 'asdf'};
let q = {pop: 'asdf'};
console.log(p===q);


// --------- destructuring -------
product = {
  brand: 'Gucchi',
  item : 'Bag',
  price: 10000,
}

let {brand}= product
console.log(brand);

//   Practice

 let product1= {
      brand: 'Gucchi',
      item : 'Bag',
      price: 10000,
      'delivery-time': '2 to 3 days',
  }

  let product2 = product

  // let {brand}= product
  console.log(product);
  console.log(product2);
  product2.brand = 'Nike'
  console.log(product);
  console.log(product2);
  console.log(product2['delivery-time']);

  let obj ={
    message: 'good job',
    status: 'delivered',
  };

  console.log (obj)
  let {message,status}= obj
  console.log(message)
  console.log(status)



  function isIdentical(product1, product2) {
    if  (typeof product1!=='object' || typeof product2 !== 'object') {
      console.warn ('parameter passed is not an object');
      return false;
    }
    else if (product1==product2){
      return true;
    }
     
    else if (product1.brand===product2.brand && product1.item===product2.item && product1.price===product2.price) {
      return true;
    }

    else{
      return false;
    }

  }

  let product2= {
      brand: 'Gucchi',
      item : 'Bag',
      price: 10000,
      'delivery-time': '2 to 3 days'
  }

  let product3= {
      brand: 'Gucchi',
      item : 'Bag',
      price: 10000,
      'delivery-time': '2 to 3 days'
  }

  console.log (isIdentical(product1, product2))
  console.log (isIdentical(product1, ""))
  console.log (isIdentical(product2, product2))
  console.log (isIdentical(product3, product2))