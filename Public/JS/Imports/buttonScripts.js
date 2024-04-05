import { createFormEmail, createFormPassword, createFormLogin, createMainContent, createCourseInfo, createPromotionRow, createUserRow, createGeneralContent, createTableRow, createPromoEditForm, createPromoForm, createLearnerCreationForm, createLearnerEditForm, createDelayCreationForm, createDelayEditForm, createAbsenceCreationForm, createAbsenceEditForm, createUserEditForm, createUserCreationForm } from './createSections.js';

export function newPromo() {
    const promotionsTabContent = document.getElementById("nav-profile");
    promotionsTabContent.parentNode.removeChild(promotionsTabContent);
    createPromoForm();
}

export function LogInOutButton() {
    const logButton = document.getElementById('logButton');
    //const toastBootstrap = createBootstrapToast(toastMessage, toastBg);
    const registrationFormEmail = document.querySelector(".registrationFormEmail");
    const registrationFormPassword = document.querySelector(".registrationFormPassword");
    const registrationFormLogin = document.querySelector(".registrationFormLogin");


    if (logButton.textContent === 'Connexion') {
        registrationFormEmail.parentNode.removeChild(registrationFormEmail);
        registrationFormPassword.parentNode.removeChild(registrationFormPassword);
        registrationFormLogin.parentNode.removeChild(registrationFormLogin);
    }
}