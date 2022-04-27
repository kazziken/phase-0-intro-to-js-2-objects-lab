const employee = {
    name: "Bob",
    streetAddress: "Times Square",
};

function updateEmployeeWithKeyAndValue(employee, name, value) {
    const newEmployee = { ...employee };
  
    newEmployee[name] = value;
  
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, name){
    const byeEmployee = { ...employee};
    delete byeEmployee.name;
    return byeEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee,name){
    delete employee.name;
    return employee;
}