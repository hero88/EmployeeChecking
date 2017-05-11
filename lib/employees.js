'use strict';

const _ = require('lodash'),
  moment = require('moment');

module.exports = function(employeeData) 
{
	var dateFormat = "YYYY-MM";  
	var finalresult = [];

	var currentDate = moment().subtract(2,'years').format(dateFormat); 	// set start date to the one 2 years ago
	var	totalMonths = moment().diff(currentDate,'months', true); 		// calculate how many months from start date to now
	
	var counter = 0; 			// initialize counting variable for numbers of employees
	var countMale = 0;			// initialize counting variable for numbers of male employees
	var countFemale = 0;		// initialize counting variable for numbers of female employees
	
	// create first array to store data with all the required months
	for (var i=0; i < totalMonths; i++){
		finalresult.push({
			"date": currentDate,
			"count": counter
		});
		currentDate = moment(currentDate).add(1,'months').format(dateFormat);	// increase the month by 1
	}

	// count the total employees from the list in each month and update the array
	finalresult.forEach(function(item,i){
		_.forEach(employeeData, function(value)
		{
			// count the employee if he/she was employeed and still in contract during the past 2 years
			if ((value.dateOfEmployment <= item.date) &&
				(value.dateOfTermination == null || value.dateOfTermination > item.date))	
			{
				counter = counter + 1;
				if (value.gender == "Male") countMale = countMale + 1;
				if (value.gender == "Female") countFemale = countFemale + 1;
			}
			item.count = counter;
			item.countMale = countMale;
			item.countFemale = countFemale;		
		});
		
		// reset the variables for the next count
		counter = 0; 
		countMale = 0;
		countFemale = 0;
	});
	return finalresult;
};
