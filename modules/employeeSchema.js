const mongoose = require('mongoose');

/**
 * Declaration Schema
 */

const employeeSchema = mongoose.Schema({
    Name: {
        type : String,
        required : true
    },
    EmpId: {
        type : Number,
        required : true
    },
    EmailId: {
        type : String,
        required : true
    },
    PhoneNumber: {
        type : String,
        required : true
    },
    Designation: {
        type : String,
        required : true
    },
    Salary: {
        type : Number,
        required : true
    },
    CreatedTime: {
        type : Date,
        default : Date.now
    }
});
employeeSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        //returnedObject.id = returnedObject._id.toString();
        //delete returnedObject._id;
        delete returnedObject.__v;
    },
});
module.exports = mongoose.model('Employees',employeeSchema);