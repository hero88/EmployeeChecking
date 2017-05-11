'use strict';

const expect = require('chai').expect,
  employees = require('../lib/employees'),
  moment = require('moment'),
  _ = require('lodash');

describe('List of employees', function() {
  const employeeList = employees(require('./employees.json'));
  const dateFormat = 'YYYY-MM';

  it('should contain entries for each month for the past two years', function() {
    expect(_.head(employeeList).date).to.equal(moment().subtract(2, 'years').format(dateFormat));
    expect(_.last(employeeList).date).to.equal(moment().format(dateFormat));
    expect(employeeList).to.have.lengthOf(25);
  });

  it('should have date and count and gender count for all months', function() {
    expect(employeeList).to.not.be.empty;
    _.each(employeeList, (employee) => {
      expect(employee).to.have.all.keys(['date', 'count', 'countMale', 'countFemale']);
    });
  });
  
  it('should have 57 employees 2 years ago and 49 employees for now', function() {
	  expect(_.head(employeeList).date).to.equal(moment().subtract(2, 'years').format(dateFormat));
	  expect(_.head(employeeList).count).to.equal(57);
	  expect(_.last(employeeList).count).to.equal(49);
  });
});
