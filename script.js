/*function submitInfo() {
    var name = document.formContact.name.value
    var last_name = document.formContact.last_name.value
    var identification_number = document.formContact.identification_number.value
    var email = document.formContact.email.value
    var phone_number = document.formContact.phone_number.value

    if(name==="") {
        document.getElementById("e_name").innerHTML = "Complete este campo"
    }
    if(last_name === "") {
        document.getElementById("e_last_name").innerHTML = "Complete este campo"
    }
    if(email === "") {
        document.getElementById("e_email").innerHTML = "Complete este campo"
    }
    console.log(name, last_name,identification_number,email, phone_number)
}*/

function GetTypeOfInsurance() {
    let typeOfInsurance = document.getElementById("type_of_insurance_id").value
    switch (typeOfInsurance) {
        case "basic":
            document.getElementById("cost_of_insurance").innerHTML="El valor del seguro por el que quiere consultar cuesta cuesta $500"
            break;
        case "medium":
            document.getElementById("cost_of_insurance").innerHTML ="El valor del seguro por el que quiere consultar cuesta $1000"
            break;
        case "premium":
            document.getElementById("cost_of_insurance").innerHTML= "El valor del seguro por el que quiere consultar cuesta $1500"
             break;
        default:
            document.getElementById("cost_of_insurance").innerHTML= "El valor del seguro por el que quiere consultar cuesta cuesta $500"
            break;
    }
}
GetTypeOfInsurance()

function SendForm() {
    alert("Su formulario ha sido enviado!");
}
