//Employee data Search Functionality
let employees = []

function submitForm() {
    //Form Validation
    const form=document.getElementById('employeeform');
    if(!form.checkValidity()) {
        alert("Please fill in all the required fields.");
        return;
    }

    //Get the values

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const department = document.getElementById('department').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const experience = document.getElementById('experience').value;

    //Display the values
    const employeeList = document.getElementById('employeeList');
    const newEmployee = document.createElement('div');
    newEmployee.textContent = `Name: ${name}, Age: ${age}, Department: ${department}, Gender: ${gender}, Experience: ${experience} years`;

    //Add delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteAll");
    deleteButton.onclick = function () {
        employeeList.removeChild(newEmployee);
        checkDeleteButtonVisibility();
        updateEmployeeData();
    }
    newEmployee.appendChild(deleteButton);
    employeeList.appendChild(newEmployee);

    //Show delete button
    document.getElementById("deleteBtn").style.display = "block";

    //Clear the form


    //Show the experience
    alert(`Selected Experience: ${experience} years`);

    //Update the employee data
    updateEmployeeData();
}

//Update Slider value
function updateSliderValue(){
    const slider = document.getElementById("experience");
    const valueSpan = document.getElementById("experienceValue");
    valueSpan.textContent = `${slider.value} years`
}

//Delete Button for each employee
function deleteEmployee() {
    const employeeList = document.getElementById("employeeList");
    if(employeeList.children.length > 0) {
        employeeList.removeChild(employeeList.lastChild);
        checkDeleteButtonVisibility();
        updateEmployeeData();
    }
}

//Delete Button for all combined
function deleteAllEmployees(){
    const employeeList =document.getElementById("employeeList");
    while(employeeList.firstChild){
        employeeList.removeChild(employeeList.firstChild);
    }
    checkDeleteButtonVisibility();
    updateEmployeeData();
}

//Check delete button visibility
function checkDeleteButtonVisibility() {
    const deleteBtn = document.getElementById('deleteBtn');
    deleteBtn.style.display = document.getElementById("employeeList").children.length > 0 ? "block" : "none";
}

//Update Employee Data
function updateEmployeeData() {
    employees =Array.from(
        document.getElementById("employeeList").children,
    ).map((employee) => employee.textContent);
}

//map() => Similar to foreach
//[1,2,4,5];
//arr.el => arr.el *2
//[2,4,8,10]

//Search Functionality
function searchEmployees() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const filteredEmployees = employees.filter((employee) =>
        employee.toLowerCase().includes(searchInput)
    );

    const employeeList = document.getElementById("employeeList");
    while(employeeList.firstChild) {
        employeeList.removeChild(employeeList.firstChild);
    }

    filteredEmployees.forEach((employee) => {
        const newEmployee = document.createElement("div");
        newEmployee.textContent = employee;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            employeeList.removeChild(newEmployee);
            checkDeleteButtonVisibility();
            updateEmployeeData();
        }
        newEmployee.appendChild(deleteButton);
        employeeList.appendChild(newEmployee);
    });
    checkDeleteButtonVisibility();
}

//filter => arr(input)
    //for(let i=0; i< arr.length; i++){
    //if arr[i] == x {
    // return 1
    //}
//}

