import { createFormEmail, createFormPassword, createFormLogin, createMainContent, createCourseInfo, createPromotionRow, createUserRow, createGeneralContent, createTableRow, createPromoEditForm, createPromoForm, createLearnerCreationForm, createLearnerEditForm, createDelayCreationForm, createDelayEditForm, createAbsenceCreationForm, createAbsenceEditForm, createUserEditForm, createUserCreationForm } from './createSections.js';

export function newPromo() {
    const promotionsTabContent = document.getElementById("nav-profile");
    promotionsTabContent.parentNode.removeChild(promotionsTabContent);
    createPromoForm();
}