 function getData(dataId, getNextData) {
   setTimeout(() => {
    console.log(`data = ${dataId}`)
    if (getNextData){
      getNextData();
    }
   }, 2000);
   };

// Callback Hell

   getData(1, () => {
    console.log(`Getting data 2....`)
    getData(2, () => {
      console.log(`Getting data 3....`)
     getData(3, () => {
      console.log(`Getting data 4....`)
      getData(4);
   });
   });
   });

//  Promises

promise = new Promise ((resolve, reject) => {
  console.log("I am a promise")
  resolve('success')
})


function getData(dataId) {
   new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`data = ${dataId}`)
        resolve('success')
   }, 10000);
   })
   };
   getData(123);



const getPromise = () => {
 return new Promise((resolve, reject) => {
    console.log('I am promise');
    reject(" Network failed")
  });
};

let promise = getPromise()

promise.then((res) => {
  console.log('promice fullfiled', res)
});
promise.catch((err) => {
  console.log('promice failed', err)
});



//  chaining promises function

function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log('Hello world');
    resolve('success');
   }, 2000)});

  };

  function asyncFunction1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log('Hello  Sun');
    resolve('success again');
   }, 2000)});

  };

  console.log('Getting data .....')
    asyncFunction().then((res) => {
      console.log(res);

  console.log('Getting data again .....')
      asyncFunction1().then((res) => {
        console.log(res);
   });

   });

// async- await

 async function hello () {
  console.log('hello');
 };

 hello();



 function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log('Weather Data');
    resolve('200');
   }, 2000)});

  };

  async function weatherData() {
    await api();
  }

  console.log(weatherData())


  //  IIFE

  (async function weatherData() {
    await api();
  })();

