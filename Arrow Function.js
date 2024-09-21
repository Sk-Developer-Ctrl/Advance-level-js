<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Arrow Function</title>
</head>
<body>
  
<script>

// function can be writen as
  let sum = function (num1 , num2) {
    return num1 + num2;
  }
  console.log(sum(5, 5))
// Arrow function can be writen as
  let sum1 = (num1 , num2) => {
    return num1 + num2;
  }
  console.log(sum1(5, 5))
// Arrow function can also be writen as
  let square = num => num * num;
  
  console.log(square(5))
</script>
</body>
</html>