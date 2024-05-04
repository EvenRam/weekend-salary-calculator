onReady();

function onReady() {
  console.log('Javascript is working!');
}

function handleSubmit(event){
    console.log(" The handleSubmit() is working")
    //console.log("event", event);
    event.preventDefault();

    let firstNameInput = document.getElementById("firstName").value
     console.log( `first name is ${firstNameInput}`);
    // let lastNameInput = document.getElementById(lastName)
    // console.log( `last name is ${lastNameInput}`);
    // let idNumber = document.getElementById()
    // console.log( `ID is ${idNumber}`);
    // let inputTitle = document.getElementById()
    // console.log( `Title is ${inputTitle}`);
    //  let inputSalary = document.getElementById()
    // console.log( `input is ${inputSalary}`);

    //let tableInfo
}