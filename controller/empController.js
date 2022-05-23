
const empRepository = require('../modules/employeeSchema');

/**
 * Add new employee details
 * 
 * @param {addEmployee} req 
 * @param {saveEmployee} res 
 * 
 */
const addEmployees = async (req, res) => {
    const addEmployee = new empRepository({

        Name: req.body.Name,
        EmpId: req.body.EmpId,
        EmailId: req.body.EmailId,
        PhoneNumber: req.body.PhoneNumber,
        Designation: req.body.Designation,
        Salary: req.body.Salary

    });
    try {
        const saveEmployee = await addEmployee.save();
        res.send(saveEmployee);
    } catch (error) {
        res.status(400).send(error);
    }
};

/**
 * Get all employee details
 * @param {*} req 
 * @param {getAllEmployee} res 
 * 
 */

const getAllEmployee = async (req, res) => {

    try {
        const getEmployees = await empRepository.find(req.params.id);
        res.status(200).json(getEmployees);
    }
    catch (err) {
        res.json({ message: err });
    }
};

/**
 * Get Employee Details By Id
 * @param {id} req 
 * @param {getEmpById} res 
 */

const getEmployeeById = async (req, res) => {
    try {
        const getEmpById = await empRepository.findById(req.params.id);
        res.json(getEmpById);
    } catch (error) {
        res.json({ message: error });
    }
};

/**
 * Update Employee Details
 * @param {id} req 
 * @param {updateEmployee} res 
 */

const updateEmployee = async (req, res) => {
    try {
        const updateEmployee = await empRepository.findByIdAndUpdate({ _id: req.params.id }, {
            Name: req.body.Name,
            EmpId: req.body.EmpId,
            EmailId: req.body.EmailId,
            PhoneNumber: req.body.PhoneNumber,
            Designation: req.body.Designation,
            Salary: req.body.Salary
        });
        res.status(200).json(updateEmployee);
    }
    catch(err){
        res.json({message: err})
    }
};
// /**
//  * 
//  * @param {updateEmp} req 
//  * @param {updateEmployee} res 
//  */
// const updateEmployee = async (req, res) => {

//     try {
//         const updateEmp = {
//             Name: req.body.Name,
//             EmpId: req.body.EmpId,
//             EmailId: req.body.EmailId,
//             PhoneNumber: req.body.PhoneNumber,
//             Designation: req.body.Designation,
//             Salary: req.body.Salary
//         };

//         const updateEmployee = await empRepository.findByIdAndUpdate(
//             { _id: req.params.id },
//             updateEmp
//         );
//         res.json(updateEmployee);
//     } catch (error) {
//         res.json({ message: error });
//     }
// };

/**
 * Delete Employee 
 * @param {id} req 
 * @param {removeEmp} res 
 */
const deleteEmployee = async (req, res) => {
    try {
        const removeEmp = await empRepository.findByIdAndDelete(req.params.id);
        res.json(removeEmp);
    } catch (error) {
        res.json({ message: error });
    }
};

module.exports = {
    getAllEmployee,
    addEmployees,
    updateEmployee,
    getEmployeeById,
    deleteEmployee
}