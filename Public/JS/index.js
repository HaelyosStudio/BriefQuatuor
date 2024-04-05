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

window.onload = createForm1();

$(document).ready(function () {
  $("#promoLink").select2({
    theme: "bootstrap-5",
    placeholder: "Selectionner la/les promotion(s) de l’utilisateur",
    allowClear: true,
  });
});
