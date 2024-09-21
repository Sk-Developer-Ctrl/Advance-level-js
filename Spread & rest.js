<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Spread and rest</title>
</head>
<body>


  <script>
    let arr = [1,2,3,4]
    let arr1 = [...arr]

    console.log(arr);
    console.log(arr1);


// also work in object

    let obj = {
      a:1,
      b:2,
      c:3,
    }

    let obj2 = {
      ...obj, d:4,
      e:5,
    }

    console.log(obj);
    console.log(obj2);


//  Rest is opposit like spread

    let [first, second, ...rest] = [ 1,2,3,4,5,6,7];

    console.log(rest);
  </script>
</body>
</html>