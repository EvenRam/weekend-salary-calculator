onReady();

function onReady() {
  console.log('Javascript is working!');
}

let totalMonthlyCost = 0



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
    <td> <button onClick="deleteEmployeeRow(event)">Delete</button></td>
    `;


    //**  Updates the total monthly salary value when a single employee is added 
//Updates the total monthly salary value when multiple employees are added 
// Applies the 'over-budget' CSS class to the footer when the total monthly salary exceeds $20,000 

//  declare footeramount and get the value from dom.getelement" with the name of totalEmployeeMonthly
let footerAmount = document.getElementById("totalEmployeeMonthly")
//  get monthly salary by dividing the inputSalary by 12 (inputSalary type is already a number)
let getemployeemonthly = inputSalary / 12;
//console.log("empolyeesTotalMonthly",getemployeemonthly);

totalMonthlyCost += getemployeemonthly;
footerAmount.innerHTML = totalMonthlyCost 



console.log("empolyeesTotalMonthly",getemployeemonthly);






//totalMonthlyCost.innerHTML = Number(totalMonthlyCost);

// input salary was console logging NAN OR NULL
//console.log("inputsalary",inputSalary);

//console.log("getemployeemonthly:", getEmployeeMonthly);



    // clearing form inputs
 document.getElementById("firstNameInput" ).value = ""
 document.getElementById("lastNameInput" ).value = ""
 document.getElementById("idInput" ).value = ""
 document.getElementById("titleInput" ).value = ""
 document.getElementById("annualSalaryInput" ).value = ""

 

}



//function to delete New Empolyee 
function deleteEmployeeRow(event){
    console.log("DeleteEmployee() works")


    let thistableInfo = event.target.closest("tr");
        console.log("thistableInf is..", thistableInfo);
        thistableInfo.remove()
}

    


// function deleteEmployeeRow(event){
//     event.target.parentElement.remove();
//     console.log("DeleteEmployee() works")

//     }
    




