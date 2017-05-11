# EmployeeChecking

We would like to know how the number of employees of a company has changed over the past two years. As input we have the [test/employees.json](test/employees.json) JSON file. The file contains basic employee information, including when an employee started working, potentially stopped working, date of birth and gender of the employee. We will convert this information into an array of objects, one object for each month of the past two years. Each object in the array should have a ```date``` property and a ```count``` property. The value of the ```date``` property should be a month in YYYY-MM format and the value of the ```count``` property should be the number of employees at the end of that month. Here is an example of result array.  
```javascript
  [{ date: '2015-04', count: 22 }, { date: '2015-05', count: 25 },
   { date: '2015-06', count: 26 }, { date: '2015-07', count: 23 }]
```
There are some basic tests in [test/employees.js](test/employees.js).
The tests can be run with the command ```npm test```.
