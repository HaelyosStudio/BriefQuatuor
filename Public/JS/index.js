import {
  createFormEmail,
  createFormPassword,
  createFormLogin,
  createMainContent,
  createCourseInfo,
  createPromotionRow,
  createUserRow,
  createGeneralContent,
  createTableRow,
  createPromoEditForm,
  createPromoForm,
  createLearnerCreationForm,
  createLearnerEditForm,
  createDelayCreationForm,
  createDelayEditForm,
  createAbsenceCreationForm,
  createAbsenceEditForm,
  createUserEditForm,
  createUserCreationForm,
} from "./Imports/createSections.js";
import {
  createFormEmail,
  createFormPassword,
  createFormLogin,
  createMainContent,
  createCourseInfo,
  createPromotionRow,
  createUserRow,
  createGeneralContent,
  createTableRow,
  createPromoEditForm,
  createPromoForm,
  createLearnerCreationForm,
  createLearnerEditForm,
  createDelayCreationForm,
  createDelayEditForm,
  createAbsenceCreationForm,
  createAbsenceEditForm,
  createUserEditForm,
  createUserCreationForm,
} from "./Imports/createSections.js";
import { LogInOutButton } from "./Imports/buttonScripts.js";

window.onload = createFormEmail();

document.getElementById("logButton").addEventListener("click", function () {
  LogInOutButton();
});

$(document).ready(function () {
  $("#promoLink").select2({
    theme: "bootstrap-5",
    placeholder: "Selectionner la/les promotion(s) de l’utilisateur",
    allowClear: true,
  });
});
