// Import stylesheets
import './style.css';

const acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
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