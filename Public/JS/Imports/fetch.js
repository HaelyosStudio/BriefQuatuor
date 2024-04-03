import { createForm1, createForm2, createForm3, createMainContent, createCourseInfo, createPresenceButton, createPromotionRow, createUserRow, createGeneralContent, createTableRow } from './createSections.js';
const base_url = "http://briefquatuor/";

export function fetchFormEmail() {
  const connectEmail = document.querySelector("#connectEmail");

  const emailValue = connectEmail.value;

  const formData = {
    email: emailValue,
  };

  // Select the container where the toast will be inserted
  const toastContainer = document.querySelector(".alertContainer");

  fetch(base_url + "checkmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "A network error occurred: " +
            response.status +
            ". Please try again later."
        );
      }
      return response.json();
    })
    .then((data) => {
      let toastMessage = "";
      let toastBg = "";
      if (data.email_exists === false) {
        // email not in database
        toastMessage =
          "Email introuvable. Veuillez vérifier votre adresse email et réessayer.";
        toastBg = "danger";
      } else if (data.email_exists === true && data.active === false) {
        // email in database but not active
        toastMessage =
          "Votre compte n'est pas actif. Veuillez activer votre compte pour continuer.";
        toastBg = "warning";
      } else if (data.email_exists === true && data.active === true) {
        // email in database and active
        toastMessage = "Le compte existe. Chargement en cours.";
        toastBg = "success";

        // Create the Bootstrap toast
        const toast = document.createElement("div");
        toast.className = `toast position-fixed top-0 end-0 m-3 p-3 align-items-center text-bg-${toastBg} border-0`;
        toast.role = "alert";
        toast.ariaLive = "assertive";
        toast.ariaAtomic = "true";
        toast.style.zIndex = 1100; // set the toast's z-index to display it above other elements
        toast.innerHTML = `
            <div class="d-flex">
              <div class="toast-body">
                ${toastMessage}
              </div>
              <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
          `;

        // Insert the toast into the container
        toastContainer.innerHTML = "";
        toastContainer.appendChild(toast);

        // Show the toast
        const toastBootstrap = new bootstrap.Toast(toast);
        toastBootstrap.show();

        // Hide the toast after 2 seconds
        setTimeout(() => {
          toastBootstrap.hide();
        }, 2000);

        // Wait for 2 seconds before deleting the registration form 1 and launching the createForm2 function
        setTimeout(() => {
          const registrationForm1 =
            document.querySelector(".registrationForm1");
          registrationForm1.parentNode.removeChild(registrationForm1);

          // Launch the createForm2 function
          createForm2();
        }, 2000);
      }
    })
    .catch((error) => {
      // Create the Bootstrap toast
      const toast = document.createElement("div");
      toast.className =
        "toast position-fixed top-0 end-0 m-3 p-3 align-items-center text-bg-danger border-0";
      toast.role = "alert";
      toast.ariaLive = "assertive";
      toast.ariaAtomic = "true";
      toast.style.zIndex = 1100; // set the toast's z-index to display it above other elements
      toast.innerHTML = `
          <div class="d-flex">
            <div class="toast-body">
              An error occurred while making the request. Please check your network connection and try again.
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        `;

      // Insert the toast into the container
      toastContainer.innerHTML = "";

      // Show the toast
      const toastBootstrap = new bootstrap.Toast(toast);
      toastBootstrap.show();

      // Hide the toast after 2 seconds
      setTimeout(() => {
        toastBootstrap.hide();
      }, 2000);
    });
}
