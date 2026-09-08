"use strict";

// Kontaktų formos validacija

// Surandama kontaktų forma
const contactForm = document.querySelector("#contact-form");

// Tikrinama ar kontaktų forma egsituoja
if (contactForm) {
  // Surandami visi formos laukų blokai
  const formFields = contactForm.querySelectorAll(".form-field");

  // Formos laukų tikrinimas paspaudus Submit
  contactForm.addEventListener("submit", (event) => {
    let hasError = false;

    formFields.forEach((field) => {
      const input = field.querySelector("input");

      // Tuščiam laukui pridedama klaidos klasė
      if (input.value.trim() === "") {
        field.classList.add("error");
        hasError = true;
      } else {
        field.classList.remove("error");
      }
    });

    // Forma nepateikiama jei yra neužpildytų laukų
    if (hasError) {
      event.preventDefault();
    }
  });

  // Klaidos būsena pašalinama pradėjus pildyti formą
  formFields.forEach((field) => {
    const input = field.querySelector("input");

    input.addEventListener("input", () => {
      if (input.value.trim() !== "") {
        field.classList.remove("error");
      }
    });
  });
}
