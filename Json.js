let product = {
    brand: 'Gucchi',
      item : 'T-shirt',
      price: 700,
      rating: {
        stars: 4.5,
        numberOfReview: 190,
      }
  }

  // object can be converted into JSON string by using |  JSON.stringify()
  console.log (typeof product);
  console.log (product);
  let str = JSON.stringify(product)
  console.log(typeof str)
  console.log(str)

  //JSON string can be converted into Object by using |  JSON.parse()

  let newProduct = JSON.parse(str)
  console.log(typeof newProduct);
  console.log(newProduct);


// -- Object can be save in local storage by converting it into JSON string 

let product1 = {
    brand: 'Gucchi',
      item : 'T-shirt',
      price: 700,
      rating: {
        stars: 4.5,
        numberOfReview: 190,
      }
  }



localStorage.setItem('Product1', JSON.stringify(product));
console.log (localStorage.getItem('Product1'))

let product2 = JSON.parse(localStorage.getItem('Product1'));
console.log (product2);

// -- use setItem tag to save item in local storage by giving its key or value 

localStorage.setItem('Name', 'Sikander Manzoor');
localStorage.setItem('Price', 'Umer Manzoor');

console.log (localStorage.getItem('Name'))

// --- remove items form local storage by using key ---

localStorage.removeItem('Name')

// --- To full clear the local storage ---

localStorage.clear();
