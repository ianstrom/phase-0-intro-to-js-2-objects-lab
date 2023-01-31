const employee = {
    name: "sam",
    address: '11 broadway'
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]: value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const { [key]: deletedKey, ...newEmployee } = employee
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}