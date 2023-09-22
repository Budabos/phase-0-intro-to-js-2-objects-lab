// Write your solution in this file!
// Initialize the employee object
const employee = {
    name: "John Doe",
    streetAddress: "123 Main Street"
  };
  
  // Function to update employee with a new key-value pair
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Function to destructively update employee with a new key-value pair
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a key from the employee object non-destructively
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete a key from the employee object destructively
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Example usage
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "age", 30);
  console.log(updatedEmployee);
  
  const destructiveUpdate = destructivelyUpdateEmployeeWithKeyAndValue(employee, "age", 31);
  console.log(destructiveUpdate);
  
  const employeeWithoutAddress = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log(employeeWithoutAddress);
  
  const destructiveRemoval = destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log(destructiveRemoval);
  