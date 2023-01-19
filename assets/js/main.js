/* ============= container =============== */
let inputContainer = document.querySelector("#footerInputContainer");
let confirmationContainer = document.querySelector("#subscribedConfirmation");

/* ============= input =============== */
let emailInput = document.querySelector("#emailInput");

/* ============= buttons =============== */
let submitButton = document.querySelector("#submitButton");
let closeConfirmation = document.querySelector("#closeConfirmation");


/* ============= event listener =============== */
submitButton.addEventListener('click', () =>{
    let submittedAdress = emailInput.value ;
    console.log("Following Adress was submitted:" + " " + submittedAdress +" " + "🎉");
    inputContainer.style.display="none";
    confirmationContainer.style.display="block";
});

closeConfirmation.addEventListener('click', () =>{
    confirmationContainer.style.display="none";
    inputContainer.style.display="block";
});