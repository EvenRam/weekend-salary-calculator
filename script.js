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

    let tableInfo = document.querySelector("tbody")
     console.log("current table text", tableInfo );

    tableInfo.innerHTML += 
    
    `   <td>${firstNameInput}</td>
        <td>${lastNameInput}</td>
        <td>${idNumber}</td>
        <td>${inputTitle}</td>
        <td>${inputSalary}</td>
        <td button onClick = "deleteEmployee(event)">Delete</button></td>
    `;

    // clearing form inputs
 document.getElementById("firstNameInput" ).value = ""
 document.getElementById("lastNameInput" ).value = ""
 document.getElementById("idInput" ).value = ""
 document.getElementById("titleInput" ).value = ""
 document.getElementById("annualSalaryInput" ).value = ""

}
//function to delete New Empolyee 
// function deleteEmployee(event){
//     console.log("DeleteEmployee() works")


//     let thistableInfo = event.target
//         console.log("thistableInf is..", thistableInfo);
//         thistableInfo.remove()
// }

function deleteEmployee(event){
    event.target.parentElement.remove();
    }
    




