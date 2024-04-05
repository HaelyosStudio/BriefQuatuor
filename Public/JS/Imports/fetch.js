import { createFormEmail, createFormPassword, createFormLogin, createMainContent, createCourseInfo, createPromotionRow, createUserRow, createGeneralContent, createTableRow, createPromoEditForm, createPromoForm, createLearnerCreationForm, createLearnerEditForm, createDelayCreationForm, createDelayEditForm, createAbsenceCreationForm, createAbsenceEditForm, createUserEditForm, createUserCreationForm } from './createSections.js';
const base_url = "http://briefquatuor/";

function createBootstrapToast(toastMessage, toastBg) {
  const toast = document.createElement("div");
  const toastContainer = document.querySelector(".alertContainer");
  toast.className = `toast position-fixed top-0 end-0 m-3 p-3 align-items-center text-bg-${toastBg} border-0`;
  toast.role = "alert";
  toast.ariaLive = "assertive";
  toast.ariaAtomic = "true";
  toast.style.zIndex = 1100;
  toast.innerHTML = `
      <div class="d-flex">
        <div class="toast-body">
          ${toastMessage}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    `;

  toastContainer.innerHTML = "";
  toastContainer.appendChild(toast);

  const toastBootstrap = new bootstrap.Toast(toast);
  toastBootstrap.show();

  setTimeout(() => {
    toastBootstrap.hide();
  }, 3000);

  return toastBootstrap;
}

export function fetchFormEmail() {
  const connectEmail = document.querySelector("#connectEmail");

  const emailValue = connectEmail.value;

  const formData = {
    email: emailValue,
  };

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

        const toastBootstrap = createBootstrapToast(toastMessage, toastBg);
        const registrationFormEmail = document.querySelector(
          ".registrationFormEmail"
        );

        setTimeout(
          (toastBootstrap) => {
            registrationFormEmail.parentNode.removeChild(registrationFormEmail);
            toastBootstrap.hide();
            createFormEmail();
          },
          3000,
          toastBootstrap
        );
      } else if (data.email_exists === true && data.active === false) {
        // email in database but not active
        toastMessage =
          "Votre compte n'est pas actif. Veuillez activer votre compte pour continuer.";
        toastBg = "warning";

        const toastBootstrap = createBootstrapToast(toastMessage, toastBg);
        const registrationFormEmail = document.querySelector(
          ".registrationFormEmail"
        );

        setTimeout(
          (toastBootstrap) => {
            registrationFormEmail.parentNode.removeChild(registrationFormEmail);
            toastBootstrap.hide();
            createFormPassword();
          },
          3000,
          toastBootstrap
        );
      } else if (data.email_exists === true && data.active === true) {
        // email in database and active
        toastMessage = "Le compte existe. Chargement en cours.";
        toastBg = "success";

        const toastBootstrap = createBootstrapToast(toastMessage, toastBg);
        const registrationFormEmail = document.querySelector(
          ".registrationFormEmail"
        );

        setTimeout(
          (toastBootstrap) => {
            registrationFormEmail.parentNode.removeChild(registrationFormEmail);
            toastBootstrap.hide();
            createFormLogin();
          },
          3000,
          toastBootstrap
        );
      }
    })
    .catch((error) => {
      createBootstrapToast(
        "An error occurred while making the request. Please check your network connection and try again.",
        "danger"
      );
    });
}

export function fetchConfirmPassword() {
  const passwordInput = document.getElementById("registrationPassword");
  const confirmPasswordInput = document.getElementById(
    "registrationConfirmPassword"
  );

  const passwordValue = passwordInput.value;
  const confirmPasswordValue = confirmPasswordInput.value;

  const formData = {
    registrationPassword: passwordValue,
    registrationConfirmPassword: confirmPasswordValue,
  };

  fetch(base_url + "confirmPassword", {
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
      if (data.success === false) {
        // passwords not identical
        toastMessage =
          "Les mots de passe ne correspondent pas. Veuillez réessayer.";
        toastBg = "danger";

        const toastBootstrap = createBootstrapToast(toastMessage, toastBg);
        const registrationFormPassword = document.querySelector(
          ".registrationFormPassword"
        );

        setTimeout(
          (toastBootstrap) => {
            registrationFormPassword.parentNode.removeChild(
              registrationFormPassword
            );
            toastBootstrap.hide();
            createFormPassword();
          },
          3000,
          toastBootstrap
        );
      } else if (
        data.success === false &&
        data.message === "erreur when updating"
      ) {
        // error when updating password
        toastMessage =
          "Une erreur est survenue lors de l'enregistrement du mot de passe. Veuillez réessayer.";
        toastBg = "warning";

        const toastBootstrap = createBootstrapToast(toastMessage, toastBg);
        const registrationFormPassword = document.querySelector(
          ".registrationFormPassword"
        );

        setTimeout(
          (toastBootstrap) => {
            registrationFormPassword.parentNode.removeChild(
              registrationFormPassword
            );
            toastBootstrap.hide();
            createFormPassword();
          },
          3000,
          toastBootstrap
        );
      } else if (data.success === true) {
        const role = data.role;
        // password updated successfully
        toastMessage = "Le mot de passe a été enregistré avec succès.";
        toastBg = "success";

        const toastBootstrap = createBootstrapToast(toastMessage, toastBg);
        const registrationFormPassword = document.querySelector(
          ".registrationFormPassword"
        );

        setTimeout(
          (toastBootstrap) => {
            registrationFormPassword.parentNode.removeChild(
              registrationFormPassword
            );
            toastBootstrap.hide();
          },
          3000,
          toastBootstrap
        );
        if (role === "Campus_manager" || role === "Responsable_pedagogique") {
          createMainContent();
          fetch(base_url + "test", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
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
              console.log(data);
              // réponse attendue = plusieurs cours avec nom participants date
              data.forEach(function (course) {
                createCourseInfo(course.name, course.participants, course.date);
              });
            })
            .catch((error) => {
              console.error("Erreur lors de la requête :", error);
            });
        } else {
          createMainContent();
          createCourseInfo("CDA", 12, "05-04-2024");
          createCourseInfo("DWWM2", 8, "05-04-2024");
          // fetch(base_url + "test2", {
          //   method: "POST",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          // })
          //   .then((response) => {
          //     if (!response.ok) {
          //       throw new Error(
          //         "A network error occurred: " +
          //           response.status +
          //           ". Please try again later."
          //       );
          //     }
          //     return response.json();
          //   })
          //   .then((data) => {
          //     console.log(data);
          //     // réponse attendue = 1 cours avec nom partcipants date
          //     createCourseInfo(data.name, data.participants, data.date);
          //   })
          //   .catch((error) => {
          //     console.error("Erreur lors de la requête :", error);
          //   });
        }
      }

      // clear password input fields
      passwordInput.value = "";
      confirmPasswordInput.value = "";
    })
    .catch((error) => {
      createBootstrapToast(
        "An error occurred while making the request. Please check your network connection and try again.",
        "danger"
      );
    });
}

export function fetchLogin() {
  const passwordInput = document.getElementById("connectPassword");

  const passwordValue = passwordInput.value;

  const formData = {
    connectPassword: passwordValue,
  };

  fetch(base_url + "login", {
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
      if (data.success === false) {
        toastMessage =
          "Le mot de passe que vous avez saisi est incorrect. Veuillez réessayer.";
        toastBg = "danger";

        const toastBootstrap = createBootstrapToast(toastMessage, toastBg);
        const registrationFormLogin = document.querySelector(
          ".registrationFormLogin"
        );

        setTimeout(
          (toastBootstrap) => {
            registrationFormLogin.parentNode.removeChild(registrationFormLogin);
            toastBootstrap.hide();
            createFormLogin();
          },
          3000,
          toastBootstrap
        );
      } else if (data.success === true) {
        const role = data.role;
        toastMessage = "Mot de passe correct. Connexion en cours.";
        toastBg = "success";

        const toastBootstrap = createBootstrapToast(toastMessage, toastBg);
        const registrationFormLogin = document.querySelector(
          ".registrationFormLogin"
        );

        setTimeout(
          (toastBootstrap) => {
            registrationFormLogin.parentNode.removeChild(registrationFormLogin);
            toastBootstrap.hide();
          },
          3000,
          toastBootstrap
        );
        if (role === "Campus_manager" || role === "Responsable_pedagogique") {
          createMainContent();
          fetch(base_url + "test", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
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
              console.log(data);
              // réponse attendue = plusieurs cours avec nom participants date
              data.forEach(function (course) {
                createCourseInfo(course.name, course.participants, course.date);
              });
            })
            .catch((error) => {
              console.error("Erreur lors de la requête :", error);
            });
        } else {
          createMainContent();
          createCourseInfo("CDA", 12, "05-04-2024");
          createCourseInfo("DWWM2", 8, "05-04-2024");
          // fetch(base_url + "test2", {
          //   method: "POST",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          // })
          //   .then((response) => {
          //     if (!response.ok) {
          //       throw new Error(
          //         "A network error occurred: " +
          //           response.status +
          //           ". Please try again later."
          //       );
          //     }
          //     return response.json();
          //   })
          //   .then((data) => {
          //     console.log(data);
          //     // réponse attendue = 1 cours avec nom partcipants date
          //     createCourseInfo(data.name, data.participants, data.date);
          //   })
          //   .catch((error) => {
          //     console.error("Erreur lors de la requête :", error);
          //   });
        }
      }
    })
    .catch((error) => {
      console.log(error);
      createBootstrapToast(
        "An error occurred while making the request. Please check your network connection and try again.",
        "danger"
      );
    });
}
