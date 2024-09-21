
    let buttonElement = document.querySelector('#my-btn');
    let onClick = event =>
    console.log('Hello');
    buttonElement.addEventListener('click', onClick);
    let print = event =>
    console.log(new Date());
    buttonElement.addEventListener('click', print);


    buttonElement.removeEventListener('click', print);