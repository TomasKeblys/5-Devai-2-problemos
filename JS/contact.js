"use strict";

// Kontaktų formos validacija

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  const formFields = contactForm.querySelectorAll(".form-field");

  contactForm.addEventListener("submit", (event) => {
    let hasError = false;

    formFields.forEach((field) => {
      const input = field.querySelector("input");

      if (input.value.trim() === "") {
        field.classList.add("error");
        hasError = true;
      } else {
        field.classList.remove("error");
      }
    });

    if (hasError) {
      event.preventDefault();
    }
  });

  formFields.forEach((field) => {
    const input = field.querySelector("input");

    input.addEventListener("input", () => {
      if (input.value.trim() !== "") {
        field.classList.remove("error");
      }
    });
  });
}
