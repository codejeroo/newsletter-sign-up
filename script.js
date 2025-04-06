const form1Container = document.querySelector(".form1-container")
const form2Container = document.querySelector(".form2-container")
const submitBtn = document.querySelector(".submit")
const dismissBtn = document.querySelector(".dismiss-bt")
const email = document.getElementById("email")
const highlightedEmail = document.querySelector(".highlight")

const emails = []



newsletter = document.getElementById("newsletter")

newsletter.addEventListener("submit", (e) => {
e.preventDefault()

checkInputs()

highlightedEmail.textContent =  email.value

})

email.addEventListener("input", checkEmail)


function checkInputs() {
    const emailValue = email.value.trim()
    if (emailValue == "") {
        setError("Email cannot be empty")
    } 
    else {
        toggle()
    }
}

function checkEmail() {

    const emailValue = email.value.trim()

    if (emailChecker(emailValue)) {
        submitBtn.style.backgroundImage = "linear-gradient(to right, #FF6A3A, #FF527B)"
        const errormessage = document.querySelector(".error-message")
        errormessage.className = "text-preset-3-regular error-message"
        newsletter.className = "newsletter"
        submitBtn.disabled = false

    } else {
        submitBtn.disabled = true
        setError("Valid Email Required")
    }

}


function toggle() {
form1Container.classList.toggle("hidden")
form2Container.classList.toggle("active")
}

dismissBtn.addEventListener("click", (e) => {
    submitBtn.style.backgroundImage = "none"
    toggle()
    const errormessage = document.querySelector(".error-message")
    errormessage.className = "text-preset-3-regular error-message"
    newsletter.className = "newsletter"
    email.value = ""
    
})

function setError(message) {
    const small = document.querySelector("small")
    const errormessage = document.querySelector(".error-message")
    small.textContent = message
    errormessage.className = "text-preset-3-regular error-message error"
    newsletter.className = "newsletter error"
    

}

function emailChecker(email) {
    const mailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email.match(mailformat);
  }

