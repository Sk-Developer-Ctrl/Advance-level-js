<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Class and inherit </title>
</head>
<body>
  <script>
    class car {

      constructor(){
        console.log('working on it')
      }

      start() {
        console.log('start')
      }
      stop() {
        console.log('stop')
      }
      setBrand(brand) {
        //  this means the object for whish the function is calling
        this.brandName = brand;
      }
    }

    let fortuner = new car();
    fortuner.setBrand("fortuner")
    console.log(fortuner)


//  Inherit


    class parent {

      constructor(){
        this.routine = ('Routine work')
      }

      eat(){
        console.log('Time to eat')
      }
      work(){
        console.log('Time to work')
      }
      sleep(){
        console.log('Time to sleep')
      }
    }

  // To use parent class in child us keyword : extend

    class child extends parent{
      constructor(){
        super();  // to access parent class object
        this.routine = ('After eat i go to school')
      }
    };

    let inherit = new child();

    console.log(inherit)
    console.log(inherit.eat)
    console.log(inherit.work)
    console.log(inherit.sleep)
  </script>
</body>
</html>