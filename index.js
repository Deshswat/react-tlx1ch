import './style.css';

const acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const inputElements = document.getElementsByTagName("input");
for (let j = 0; j < inputElements.length; j++) {
    inputElements[j].addEventListener("change", handleInputChange); 
}

function handleInputChange() {
  const element = document.getElementById(this.name);
  element.innerHTML = this.value;
}

function validateEmail() {
      var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      email = document.getElementById("email").value;
      if(mailFormat.test(email.value) == false) 
      { 
        alert("You have entered an invalid email address!"); 
        return false;
      } 
      else 
      { 
        alert("Thank you, Email Address Valid");
        return true; 
      }
}

function validateName(){ 
      var name = document.getElementById("fullName").value,
          nameFormat = /^[A-Za-z]+$/;
      if(nameFormat.test(name.value) == false) 
      {
        alert("You have entered an invalid FullName!"); 
        return true;
      }
      else
      {
        alert('FullName must have alphabet characters only');
        name.focus();
        return false;
      }
  }