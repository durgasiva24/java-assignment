function validateForm() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mobile = document.getElementById("mobile").value;

   

    const nameError = document.getElementById("name-error");
    const addressError = document.getElementById("address-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
   
    const mobileError= document.getElementById("mobile-error")
   
    nameError.textContent = "";
    addressError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
   
    mobileError.textContent="";
   
    //let isValid = true;

    if (name === "" || /\d/.test(name))
         {
        nameError.textContent =
            "Please enter your name properly.";
        return false;
    }

    if (address === "") {
        addressError.textContent =
            "Please enter your address.";
        return false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
    return false;
    }

    if (password.length < 6) {
        passwordError.textContent =
            "Please enter a password with at least 6 characters.";
        return false;
    }
    var num = /^(0|91)?[6-9][0-9]{9}$/;
    if (!num.test(number) ) {
        mobileError.textContent =
            "Please enter a number should be 10.";
        return false;
    }
    
   

    return true;
}