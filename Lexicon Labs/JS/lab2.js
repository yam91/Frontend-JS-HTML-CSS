var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    lengthName: () => console.log(employee.name.length),
    lastName: () => console.log(employee.name.split(' ')[1]),
    employeeData: ()=> alert("Name is " + employee.name + ", Job is " + employee.job + ", Age is " + employee.age) 
  }


/* 
1. Add a method called nameLength that prints out the
   length of the employees name to the console.
2. Write program that will create an Alert in the browser of each of the
   object's values for the key value pairs. For example, it should alert: Name is John Smith, Job is Programmer, Age is 31.
3. Add a method called lastName that prints
   out the employee's last name to the console. You will need to figure out how to split a string to an array.
   Hint: http://www.w3schools.com/jsref/jsref_split.asp
*/