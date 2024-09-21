<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Date and time</title>
</head>
<body>

 <div class="div1">hello my name is</div>


  <script>

  // date and time
    let myDate = new Date();
    console.log(myDate)
    console.log(myDate.getMonth())
    console.log(myDate.getDay())
    console.log(myDate.getFullYear())
    console.log(myDate.getTime())
    
  // dom structure

  console.log(document.location)
  console.log(document.title)
  console.log(document.domain)

  console.log(document.href)
  console.log(document.innerHtml)
  console.log(document.InnerText);
  console.log(document.classList);

  //  dom Elements
  
  let button = document.createElement('Button');
  document.querySelector('.div1').appendChild(button);
  button.innerText=('Click Me');

  </script>
 </body>
</html>