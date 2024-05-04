onReady();

function onReady() {
  console.log('Javascript is working!');
}

function handleSubmit(event){
    console.log(" The handleSubmit() is working")
    //console.log("event", event);
    event.preventDefault();

    let firstNameInput = document.getElementById("firstNameInput").value
     console.log( `first name is ${firstNameInput}`);
    let lastNameInput = document.getElementById("lastNameInput").value
     console.log( `last name is ${lastNameInput}`);
    let idNumber = document.getElementById("idInput").value
     console.log( `ID is ${idNumber}`);
    let inputTitle = document.getElementById("titleInput").value
    console.log( `Title is ${inputTitle}`);
     let inputSalary = document.getElementById("annualSalaryInput").value
    console.log( `input is ${inputSalary}`);

    let tableInfo = document.getElementById("employeesInfo")
    console.log("current table text", tableInfo );
    tableInfo.innerHTML += 
    `   <td>${firstNameInput}</td>
        <td>${lastNameInput}</td>
        <td>${idNumber}</td>
        <td>${inputTitle}</td>
        <td>${inputSalary}</td>
    `
}