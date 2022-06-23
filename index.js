// Your code here
// Your code here
function createEmployeeRecord([name,fname,title, num]){
    return {
      firstName: name,
      familyName: fname,
      title: title,
      payPerHour: num,
      timeInEvents: [],
      timeOutEvents: []
    }
  }
  
  createEmployeeRecord( ["Gray", "Worm", "Security", 1] )
  
  
  function createEmployeeRecords(array){
    return array.map( ( element ) => createEmployeeRecord( element ) )
    
  }
  
  createEmployeeRecords([
          ["moe", "sizlak", "barkeep", 2],
          ["bartholomew", "simpson", "scamp", 3]
  ] )
  
  function createTimeInEvent(employeeRecord, dateString){
    const timeIn = {
      type: 'TimeIn',
      hour: parseInt( dateString.slice(-4) ),
      date: dateString.slice( 0, 10 )
    }
    employeeRecord.timeInEvents.push( timeIn )
    return employeeRecord
  }
     
  function createTimeOutEvent(employeeRecord,dateString){
    const timeOut = {
      type: 'TimeOut',
      hour: parseInt( dateString.slice( -4 ) ),
      date: dateString.slice(0,10)
    }
    employeeRecord.timeOutEvents.push( timeOut )
    return employeeRecord
  }
  
  function hoursWorkedOnDate(employeeRecord,date){
    if(employeeRecord.timeInEvents[0].date===date){
      return ((employeeRecord.timeOutEvents[0].hour- employeeRecord.timeInEvents[0].hour)/100)
    }
  }
  
  function wagesEarnedOnDate(employeeRecord, date){
    let payrate = employeeRecord.payPerHour;
    return (hoursWorkedOnDate( employeeRecord, date ) * payrate)
  }
  
    function allWagesFor(employeeRecord) {
      const arrayOfWages = [];
      let eligibleDays=employeeRecord.timeInEvents.map(element=> element.date)
      let pay = eligibleDays.reduce( ( acc, num ) => acc + num,0)
      return acc+ wagesEarnedOnDate(employeeRecord, date)
      }
    
    
    allWagesFor()
  
  
  
  
