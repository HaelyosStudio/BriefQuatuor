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
          fetch(base_url + "cours", {
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
              data.forEach((course) => {
                createCourseInfo(course.promoName, course.nbUsers, course.currentDay, course.coursId);
              });
            })
            .catch((error) => {
              console.error("Erreur lors de la requête :", error);
            });
        } else {
          createMainContent();
          fetch(base_url + "cours", {
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
              // réponse attendue = 1 cours avec nom partcipants date
              createCourseInfo(data.promoName, data.nbUsers, data.currentDay, data.coursId);
            })
            .catch((error) => {
              console.error("Erreur lors de la requête :", error);
            });
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

            if (role === "Campus_manager" || role === "Responsable_pedagogique") {
              createMainContent();
              fetch(base_url + "cours", {
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
                  if (Array.isArray(data)) {
                    for (const course of data) {
                      createCourseInfo(course.promoName, course.nbUsers, course.currentDay, course.coursId);
                    }
                  } else {
                    createCourseInfo(data.promoName, data.nbUsers, data.currentDay, data.coursId);
                  }
                  
                })
                .catch((error) => {
                  console.error("Erreur lors de la requête :", error);
                });
            } else {
              createMainContent();
              fetch(base_url + "cours", {
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
                  console.log('TEST ICI');
                  // réponse attendue = 1 cours avec nom partcipants date
                  createCourseInfo(data.promoName, data.nbUsers, data.currentDay, data.coursId);
                })
                .catch((error) => {
                  console.error("Erreur lors de la requête :", error);
                });
            }
          },
          3000,
          toastBootstrap
        );
        
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

export function fetchValidatePresence(courseId) {
  const formData = {
    coursId: courseId,
  };
  fetch(base_url + 'cours/validatePresence', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then((response) => {
    console.log(response)
    if (!response.ok) {
      throw new Error("Erreur de réseau : " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    let toastMessage = "";
    let toastBg = "";
    console.log(data);
    if (data.success === true) {
      toastMessage =
          "Signature receuillie avec succès.";
        toastBg = "success";
      const toastBootstrap = createBootstrapToast(toastMessage, toastBg);

      const button = document.getElementById(courseId + 'btn');
      button.textContent = "Signature recueillie";
      button.classList.remove("btn-primary");
      button.classList.add("btn-secondary");
      var newButton = button.cloneNode(true);
      button.parentNode.replaceChild(newButton, button);

      setTimeout(
        (toastBootstrap) => {
          toastBootstrap.hide();
        },
        2000,
        toastBootstrap
      );
    } else {
      toastMessage =
      "Erreur lors de la signature. Veuillez réessayer.";
    toastBg = "danger";

    const toastBootstrap = createBootstrapToast(toastMessage, toastBg);

    setTimeout(
      (toastBootstrap) => {
        toastBootstrap.hide();
      },
      2000,
      toastBootstrap
    );
    }

  })
  .catch((error) => {
    console.error("Erreur lors de la requête :", error);
  });
}

export function fetchDisplayPromo() {
  fetch(base_url + 'promo/displayPromo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  })
  .then((response) => {
    console.log(response)
    if (!response.ok) {
      throw new Error("Erreur de réseau : " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    if (data.success === true) {
      data.promoName.forEach((name, index) => {
        const button = document.getElementById('nav-profile-tab');
        const startDate = data.promoDateStart[index];
        const endDate = data.promoDateFin[index];
        const places = data.promoPlaces[index];
        var newButton = button.cloneNode(true);
      button.parentNode.replaceChild(newButton, button);
        createPromotionRow(name, startDate, endDate, places);
      });
    } else {
      console.log(data.message);
    }
  })
  .catch((error) => {
    console.error("Erreur lors de la requête :", error);
  });
}
