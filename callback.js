function greeting(name) {
      console.log(`hello ${name}`);
    };

    function greetingInput(callBack) {
      var name = prompt ('Enter Your Name');
      callBack(name);
    };

    greetingInput(greeting)
 