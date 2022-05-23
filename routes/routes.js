/**
 * Import Services
 */

const express = require('express');

const empRepo = require('../controller/empController');


//const empService = require('../services/employeeService');

const router = express.Router();

/**
 * Post Method Add New Employee Details
 */

 router.post("/addEmp", empRepo.addEmployees);

/**
 * Get All Employee Details
 */ 

 router.get("/", empRepo.getAllEmployee);


/**
 * Get Employee Details By Id
 */ 

 router.get("/:id", empRepo.getEmployeeById);


/**
 * Update Employee Details
 */ 

 router.put("/:id", empRepo.updateEmployee);

 /**
 * Delete Employee Details
 */ 

 router.delete("/:id", empRepo.deleteEmployee);



//router.get("/", empService.getEmployee);

module.exports = router;