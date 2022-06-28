const inputs = Array.from(document.querySelectorAll(".input"))
const form = document.getElementById("sign-content__form")
const firstNameInput = document.getElementById("firstNameInput")
const lastNameInput = document.getElementById("lastNameInput")
const emailInput = document.getElementById("emailInput")
const passwordInput = document.getElementById("passwordInput")
const validateEmailRegExp = /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;
const validateUserName = /^[A-Za-z]+$/


form.addEventListener("submit", (event) =>{
    // This created array was in the validateInput scope that led to the same input id being pushed again so it has to initialized each time you press the submit button
    const nonValidInputs = []
    // prevent defaut onsubmit event handler
    event.preventDefault()
    inputs.forEach(input => {
        validateInput(input, nonValidInputs)
    })
    if(nonValidInputs.length == 0){
        form.submit()
        // empty the inputs after the submit
        inputs.forEach(input => {
            input.value = ""
        })
    }
})
function nonValid(input){
    
    document.querySelector(`#${input.dataset.id}`).classList.add("display")
    document.querySelector(`#${input.dataset.id}`).nextElementSibling.classList.add("display")
    input.classList.remove("border-green")
    input.classList.add("border-red")
    input.removeAttribute("placeholder");
    input.setAttribute("aria-invalid", "false")
    input.focus()
}
function yesValid(input){
    document.querySelector(`#${input.dataset.id}`).classList.remove("display")
    document.querySelector(`#${input.dataset.id}`).nextElementSibling.classList.remove("display")
    input.classList.remove("border-red")
    input.classList.add("border-green")
    input.setAttribute("aria-invalid", "true")
    input.blur()
}

// check the input which  type is it to validate its value.
function validateInput(input, nonValidInputs){
    const inputType = input.type;
    const elementValue = document.querySelector(`#${input.dataset.id}`)

    switch (inputType){
        case "text":
            if(input.value === "" || !validateUserName.test(input.value)){
                if(!validateUserName.test(input.value)) elementValue.textContent = `${input.name} should not have numbers only alphabets`
                if(input.value.length == 0) elementValue.textContent = `${input.name} connot be empty`
                nonValid(input) 
                nonValidInputs.push(input.id)
            }else{
                yesValid(input)  
            }
        break;

        case "email": 
        if(input.value === "" || !validateEmailRegExp.test(input.value)){
            if(!validateEmailRegExp.test(input.value)) elementValue.textContent = "Looks like this is not an email"
            if(input.value.length == 0) elementValue.textContent = "Looks like this is empty"
            nonValid(input)
            nonValidInputs.push(input.id)
            input.setAttribute("placeholder", "email@example/com")
        }else{
            yesValid(input)
        }
        break;

        case "password":
            if(input.value.length > 12 || input.value.length < 7 ){
                if(input.value.length > 12 || input.value.length < 7 ) elementValue.textContent = "Password should not be more than 12 or less than 7 characters"
                if(input.value.length == 0) elementValue.textContent = "Password cannot be empty"
                nonValid(input)
                input.removeAttribute("placeholder");
                nonValidInputs.push(input.id)
            }
            else{
                yesValid(input)
            }
        break;

        default:  return;
    }  
return nonValidInputs;
}