
  // set time out
    let alarm = () => console.log('Hello its Morning')
    let timerId = setTimeout(alarm, 2000);
    console.log('alarm');
    clearTimeout(timerId)

  // set interval 
  let studyAlarm = () => console.log(`Time to study js. ${new Date()}`)
  let intervalId = setInterval(studyAlarm, 1000)
  setTimeout(() => clearInterval(intervalId), 10000);
