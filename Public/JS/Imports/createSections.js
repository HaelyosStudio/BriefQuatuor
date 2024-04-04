import { fetchFormEmail } from "./fetch.js";

export function createForm1() {
  const formContainer = document.createElement("div");
  formContainer.className = "registrationForm1";

  const main = document.getElementById("main");
  const alertContainer = document.createElement("div");
  alertContainer.className = "alertContainer";
  main.appendChild(alertContainer);

  const formHeader = document.createElement("div");
  formHeader.className = "formHeader";

  const formHeaderText = document.createElement("h1");
  formHeaderText.textContent = "Bienvenue";

  formHeader.appendChild(formHeaderText);
  formContainer.appendChild(formHeader);

  const form = document.createElement("form");
  form.className = "formInputs";

  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "connectEmail");
  emailLabel.textContent = "Email *";

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.className = "form-control";
  emailInput.id = "connectEmail";
  emailInput.placeholder = "Entrez votre email";
  emailInput.required = true;

  const emailDiv = document.createElement("div");
  emailDiv.className = "formItem";
  emailDiv.appendChild(emailLabel);
  emailDiv.appendChild(emailInput);

  const submitButton = document.createElement("button");
  submitButton.type = "button";
  submitButton.className = "btn btn-primary";
  submitButton.textContent = "Connexion";
  submitButton.addEventListener("click", fetchFormEmail);

  form.appendChild(emailDiv);
  form.appendChild(submitButton);

  formContainer.appendChild(form);

  document.getElementById("main").appendChild(formContainer);
}

//////////////////////////////////// Fin du Form 1 ////////////////////////////////////

export function createForm2() {
  const formContainer = document.createElement("div");
  formContainer.className = "registrationForm2";

  const formHeader = document.createElement("div");
  formHeader.className = "formHeader";

  const formHeaderText = document.createElement("h1");
  formHeaderText.textContent = "Bienvenue";

  const formHeaderPara = document.createElement("p");
  formHeaderPara.textContent =
    "Pour clôturer votre inscription et créer votre compte, veuillez choisir un mot de passe.";

  formHeader.appendChild(formHeaderText);
  formHeader.appendChild(formHeaderPara);
  formContainer.appendChild(formHeader);

  const form = document.createElement("form");
  form.className = "formInputs";
  form.method = "POST";

  const passwordLabel = document.createElement("label");
  passwordLabel.setAttribute("for", "registrationPassword");
  passwordLabel.textContent = "Mot de passe *";

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.className = "form-control";
  passwordInput.id = "registrationPassword";
  passwordInput.placeholder = "Entrez votre mot de passe";
  passwordInput.required = true;

  const passwordDiv = document.createElement("div");
  passwordDiv.className = "formItem";
  passwordDiv.appendChild(passwordLabel);
  passwordDiv.appendChild(passwordInput);

  const confirmPasswordLabel = document.createElement("label");
  confirmPasswordLabel.setAttribute("for", "registrationConfirmPassword");
  confirmPasswordLabel.textContent = "Confirmez mot de passe *";

  const confirmPasswordInput = document.createElement("input");
  confirmPasswordInput.type = "password";
  confirmPasswordInput.className = "form-control";
  confirmPasswordInput.id = "registrationConfirmPassword";
  confirmPasswordInput.placeholder = "Confirmez le mot de passe";
  confirmPasswordInput.required = true;

  const confirmPasswordDiv = document.createElement("div");
  confirmPasswordDiv.className = "formItem";
  confirmPasswordDiv.appendChild(confirmPasswordLabel);
  confirmPasswordDiv.appendChild(confirmPasswordInput);

  const submitButton = document.createElement("button");
  submitButton.type = "button";
  submitButton.className = "btn btn-primary";
  submitButton.textContent = "Sauvegarder";

  form.appendChild(passwordDiv);
  form.appendChild(confirmPasswordDiv);
  form.appendChild(submitButton);

  formContainer.appendChild(form);

  document.getElementById("main").appendChild(formContainer);
}

//////////////////////////////////// Fin du Form 2 ////////////////////////////////////

export function createForm3() {
  const formContainer = document.createElement("div");
  formContainer.className = "registrationForm3";

  const formHeader = document.createElement("div");
  formHeader.className = "formHeader";

  const formHeaderText = document.createElement("h1");
  formHeaderText.textContent = "Bienvenue";

  formHeader.appendChild(formHeaderText);
  formContainer.appendChild(formHeader);

  const form = document.createElement("form");
  form.className = "formInputs";
  form.method = "POST";

  const passwordLabel = document.createElement("label");
  passwordLabel.setAttribute("for", "connectPassword");
  passwordLabel.textContent = "Mot de passe *";

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.className = "form-control";
  passwordInput.id = "connectPassword";
  passwordInput.placeholder = "Entrez votre mot de passe";
  passwordInput.required = true;

  const passwordDiv = document.createElement("div");
  passwordDiv.className = "formItem";
  passwordDiv.appendChild(passwordLabel);
  passwordDiv.appendChild(passwordInput);

  const submitButton = document.createElement("button");
  submitButton.type = "button";
  submitButton.className = "btn btn-primary";
  submitButton.textContent = "Connexion";

  form.appendChild(passwordDiv);
  form.appendChild(submitButton);

  formContainer.appendChild(form);

  document.getElementById("main").appendChild(formContainer);
}

//////////////////////////////////// Fin du Form 3 ////////////////////////////////////

export function createMainContent() {
  const mainContent = document.createElement("section");
  mainContent.classList.add("mainContent");

  const nav = document.createElement("nav");

  const navTabs = document.createElement("div");
  navTabs.classList.add("nav", "nav-tabs");
  navTabs.setAttribute("id", "nav-tab");
  navTabs.setAttribute("role", "tablist");

  const homeTab = document.createElement("button");
  homeTab.classList.add("nav-link", "active");
  homeTab.setAttribute("id", "nav-home-tab");
  homeTab.setAttribute("data-bs-toggle", "tab");
  homeTab.setAttribute("data-bs-target", "#nav-home");
  homeTab.setAttribute("type", "button");
  homeTab.setAttribute("role", "tab");
  homeTab.setAttribute("aria-controls", "nav-home");
  homeTab.setAttribute("aria-selected", "true");
  homeTab.textContent = "Accueil";

  const promotionsTab = document.createElement("button");
  promotionsTab.classList.add("nav-link");
  promotionsTab.setAttribute("id", "nav-profile-tab");
  promotionsTab.setAttribute("data-bs-toggle", "tab");
  promotionsTab.setAttribute("data-bs-target", "#nav-profile");
  promotionsTab.setAttribute("type", "button");
  promotionsTab.setAttribute("role", "tab");
  promotionsTab.setAttribute("aria-controls", "nav-profile");
  promotionsTab.setAttribute("aria-selected", "false");
  promotionsTab.textContent = "Promotions";

  const usersTab = document.createElement("button");
  usersTab.classList.add("nav-link");
  usersTab.setAttribute("id", "nav-contact-tab");
  usersTab.setAttribute("data-bs-toggle", "tab");
  usersTab.setAttribute("data-bs-target", "#nav-contact");
  usersTab.setAttribute("type", "button");
  usersTab.setAttribute("role", "tab");
  usersTab.setAttribute("aria-controls", "nav-contact");
  usersTab.setAttribute("aria-selected", "false");
  usersTab.textContent = "Utilisateurs";

  navTabs.appendChild(homeTab);
  navTabs.appendChild(promotionsTab);
  navTabs.appendChild(usersTab);

  nav.appendChild(navTabs);

  const tabContent = document.createElement("div");
  tabContent.classList.add("tab-content");
  tabContent.setAttribute("id", "nav-tabContent");

  const homeTabContent = document.createElement("div");
  homeTabContent.classList.add(
    "tab-pane",
    "fade",
    "show",
    "active",
    "mainContainer"
  );
  homeTabContent.setAttribute("id", "nav-home");
  homeTabContent.setAttribute("role", "tabpanel");
  homeTabContent.setAttribute("aria-labelledby", "nav-home-tab");
  homeTabContent.setAttribute("tabindex", "0");

  const courseContainer = document.createElement("div");
  courseContainer.classList.add("courseContainer");

  const h3 = document.createElement("h3");
  h3.textContent = "Cours du jour";

  courseContainer.appendChild(h3);

  homeTabContent.appendChild(courseContainer);

  const promotionsTabContent = document.createElement("div");
  promotionsTabContent.classList.add("tab-pane", "fade");
  promotionsTabContent.setAttribute("id", "nav-profile");
  promotionsTabContent.setAttribute("role", "tabpanel");
  promotionsTabContent.setAttribute("aria-labelledby", "nav-profile-tab");
  promotionsTabContent.setAttribute("tabindex", "0");

  const promotionsTitle = document.createElement("div");
  promotionsTitle.classList.add("promoTitleButton");

  const promotionsLeftInfos = document.createElement("div");
  promotionsLeftInfos.classList.add("leftInfos");

  const promotionsH3 = document.createElement("h3");
  promotionsH3.textContent = "Toutes les promotions";

  const promotionsP = document.createElement("p");
  promotionsP.textContent = "tableau des promotions de Simplon";

  promotionsLeftInfos.appendChild(promotionsH3);
  promotionsLeftInfos.appendChild(promotionsP);

  const addPromotionButton = document.createElement("button");
  addPromotionButton.classList.add("btn", "btn-success");
  addPromotionButton.textContent = "Ajouter promotion";

  promotionsTitle.appendChild(promotionsLeftInfos);
  promotionsTitle.appendChild(addPromotionButton);

  const promotionsTable = document.createElement("table");
  promotionsTable.classList.add("table");

  const promotionsThead = document.createElement("thead");

  const promotionsTr = document.createElement("tr");

  const checkboxTh = document.createElement("th");
  checkboxTh.setAttribute("scope", "col");
  const selectAllInput = document.createElement("input");
  selectAllInput.setAttribute("type", "checkbox");
  selectAllInput.setAttribute("id", "selectAll");
  checkboxTh.appendChild(selectAllInput);

  const promotionTh = document.createElement("th");
  promotionTh.setAttribute("scope", "col");
  promotionTh.textContent = "Promotion";

  const startTh = document.createElement("th");
  startTh.setAttribute("scope", "col");
  startTh.textContent = "Début";

  const endTh = document.createElement("th");
  endTh.setAttribute("scope", "col");
  endTh.textContent = "Fin";

  const placesTh = document.createElement("th");
  placesTh.setAttribute("scope", "col");
  placesTh.textContent = "Places";

  const viewTh = document.createElement("th");
  viewTh.setAttribute("scope", "col");

  const editTh = document.createElement("th");
  editTh.setAttribute("scope", "col");

  const deleteTh = document.createElement("th");
  deleteTh.setAttribute("scope", "col");

  promotionsTr.appendChild(checkboxTh);
  promotionsTr.appendChild(promotionTh);
  promotionsTr.appendChild(startTh);
  promotionsTr.appendChild(endTh);
  promotionsTr.appendChild(placesTh);
  promotionsTr.appendChild(viewTh);
  promotionsTr.appendChild(editTh);
  promotionsTr.appendChild(deleteTh);

  promotionsThead.appendChild(promotionsTr);

  const promotionsTbody = document.createElement("tbody");
  promotionsTbody.classList.add("table-group-divider");

  promotionsTable.appendChild(promotionsThead);
  promotionsTable.appendChild(promotionsTbody);

  promotionsTabContent.appendChild(promotionsTitle);
  promotionsTabContent.appendChild(promotionsTable);

  const usersTabContent = document.createElement("div");
  usersTabContent.classList.add("tab-pane", "fade");
  usersTabContent.setAttribute("id", "nav-contact");
  usersTabContent.setAttribute("role", "tabpanel");
  usersTabContent.setAttribute("aria-labelledby", "nav-contact-tab");
  usersTabContent.setAttribute("tabindex", "0");

  const usersTitle = document.createElement("div");
  usersTitle.classList.add("userTitleButton");

  const usersLeftInfos = document.createElement("div");
  usersLeftInfos.classList.add("leftInfos");

  const usersH3 = document.createElement("h3");
  usersH3.textContent = "Utilisateurs";

  const usersP = document.createElement("p");
  usersP.textContent = "tableau des utilisateurs de Simplon";

  usersLeftInfos.appendChild(usersH3);
  usersLeftInfos.appendChild(usersP);

  const addUserButton = document.createElement("button");
  addUserButton.classList.add("btn", "btn-success");
  addUserButton.textContent = "Ajouter un utilisateur";

  usersTitle.appendChild(usersLeftInfos);
  usersTitle.appendChild(addUserButton);

  const usersTable = document.createElement("table");
  usersTable.classList.add("table");

  const usersThead = document.createElement("thead");

  const usersTr = document.createElement("tr");

  const usersCheckboxTh = document.createElement("th");
  usersCheckboxTh.setAttribute("scope", "col");
  const usersSelectAllInput = document.createElement("input");
  usersSelectAllInput.setAttribute("type", "checkbox");
  usersSelectAllInput.setAttribute("id", "selectAll");
  usersCheckboxTh.appendChild(usersSelectAllInput);

  const lastNameTh = document.createElement("th");
  lastNameTh.setAttribute("scope", "col");
  lastNameTh.textContent = "Nom de famille";

  const firstNameTh = document.createElement("th");
  firstNameTh.setAttribute("scope", "col");
  firstNameTh.textContent = "Prénom";

  const emailTh = document.createElement("th");
  emailTh.setAttribute("scope", "col");
  emailTh.textContent = "Mail";

  const activeAccountTh = document.createElement("th");
  activeAccountTh.setAttribute("scope", "col");
  activeAccountTh.textContent = "Compte activé";

  const roleTh = document.createElement("th");
  roleTh.setAttribute("scope", "col");
  roleTh.textContent = "Rôle";

  const usersEditTh = document.createElement("th");
  usersEditTh.setAttribute("scope", "col");

  const usersDeleteTh = document.createElement("th");
  usersDeleteTh.setAttribute("scope", "col");

  usersTr.appendChild(usersCheckboxTh);
  usersTr.appendChild(lastNameTh);
  usersTr.appendChild(firstNameTh);
  usersTr.appendChild(emailTh);
  usersTr.appendChild(activeAccountTh);
  usersTr.appendChild(roleTh);
  usersTr.appendChild(usersEditTh);
  usersTr.appendChild(usersDeleteTh);

  usersThead.appendChild(usersTr);

  const usersTbody = document.createElement("tbody");
  usersTbody.classList.add("table-group-divider");

  usersTable.appendChild(usersThead);
  usersTable.appendChild(usersTbody);

  usersTabContent.appendChild(usersTitle);
  usersTabContent.appendChild(usersTable);

  tabContent.appendChild(homeTabContent);
  tabContent.appendChild(promotionsTabContent);
  tabContent.appendChild(usersTabContent);

  mainContent.appendChild(nav);
  mainContent.appendChild(tabContent);

  document.getElementById("main").appendChild(mainContent);
}

//////////////////////////////////// Fin du main content ////////////////////////////////////

export function createCourseInfo(name, participants, date) {
  const courseInfos = document.createElement("div");
  courseInfos.classList.add("courseInfos");

  const leftInfos = document.createElement("div");
  leftInfos.classList.add("leftInfos");

  const h2 = document.createElement("h2");
  h2.textContent = name;

  const p = document.createElement("p");
  p.textContent = `${participants} Participants`;

  leftInfos.appendChild(h2);
  leftInfos.appendChild(p);

  const boldP = document.createElement("p");
  boldP.classList.add("bold");
  boldP.textContent = date;

  courseInfos.appendChild(leftInfos);
  courseInfos.appendChild(boldP);

  document.getElementById("main").appendChild(courseInfos);
}

///////////////////////////////// Fin des infos de Cours /////////////////////////////////

export function createPresenceButton() {
  const presenceButton = document.createElement("div");
  presenceButton.classList.add("presenceButton");

  const button = document.createElement("button");
  button.classList.add("btn", "btn-primary");
  button.textContent = "Valider présence";

  presenceButton.appendChild(button);

  document.getElementById("main").appendChild(presenceButton);
}

//////////////////////////////// Fin du bouton de présence ////////////////////////////////

export function createPromotionRow(name, startDate, endDate, places) {
  const row = document.createElement("tr");

  const checkboxTh = document.createElement("th");
  checkboxTh.setAttribute("scope", "row");
  const checkboxInput = document.createElement("input");
  checkboxInput.setAttribute("type", "checkbox");
  checkboxTh.appendChild(checkboxInput);

  const nameTd = document.createElement("td");
  nameTd.setAttribute("id", "promoName");
  nameTd.textContent = name;

  const startTd = document.createElement("td");
  startTd.setAttribute("id", "startDate");
  startTd.textContent = startDate;

  const endTd = document.createElement("td");
  endTd.setAttribute("id", "endDate");
  endTd.textContent = endDate;

  const placesTd = document.createElement("td");
  placesTd.setAttribute("id", "places");
  placesTd.textContent = places;

  const viewTd = document.createElement("td");
  const viewButton = document.createElement("button");
  viewButton.setAttribute("type", "button");
  viewButton.classList.add("tableButtons");
  viewButton.textContent = "Voir";
  viewTd.appendChild(viewButton);

  const editTd = document.createElement("td");
  const editButton = document.createElement("button");
  editButton.setAttribute("type", "button");
  editButton.classList.add("tableButtons");
  editButton.textContent = "Éditer";
  editTd.appendChild(editButton);

  const deleteTd = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("type", "button");
  deleteButton.classList.add("tableButtons");
  deleteButton.textContent = "Supprimer";
  deleteTd.appendChild(deleteButton);

  row.appendChild(checkboxTh);
  row.appendChild(nameTd);
  row.appendChild(startTd);
  row.appendChild(endTd);
  row.appendChild(placesTd);
  row.appendChild(viewTd);
  row.appendChild(editTd);
  row.appendChild(deleteTd);

  document.getElementById("main").appendChild(row);
}

export function createPromoForm() {
  const promoTitleButton = document.createElement("div");
  promoTitleButton.className = "promoTitleButton";
  promoTitleButton.innerHTML = "<h3>Création d'une promotion</h3>";

  const formContainer = document.createElement("div");
  formContainer.innerHTML = `
      <form class="promoCreationForm">
          <div class="mb-3">
              <label for="newPromoName" class="form-label">Nom de la promotion</label>
              <input type="text" class="form-control" id="newPromoName" placeholder="...">
          </div>
          <div class="mb-3">
              <label for="newPromoStartDate" class="form-label">Date de début</label>
              <input type="date" class="form-control" id="newPromoStartDate" placeholder="JJ/MM/AAAA">
          </div>
          <div class="mb-3">
              <label for="newPromoEndDate" class="form-label">Date de fin</label>
              <input type="date" class="form-control" id="newPromoEndDate" placeholder="JJ/MM/AAAA">
          </div>
          <div class="mb-3">
              <label for="newPromoPlaces" class="form-label">Place(s) disponible(s)</label>
              <input type="number" class="form-control" id="newPromoPlaces" max="20" placeholder="...">
          </div>
          <div class="d-md-flex justify-content-md-end">
              <button type="button" id="savePromoButton" class="btn btn-primary savePromoButton">Sauvegarder</button>
          </div>
      </form>
    `;

  const container = document.createElement("div");
  container.appendChild(promoTitleButton);
  container.appendChild(formContainer);

  document.getElementById("main").appendChild(container);
}

export function createPromoEditForm() {
  const promoTitleButton = document.createElement("div");
  promoTitleButton.className = "promoTitleButton";

  const formHeader = document.createElement("div");
  formHeader.className = "formHeader";

  const formHeaderText = document.createElement("h3");
  formHeaderText.textContent = "Édition de la promotion NOMDEPROMO";

  const formHeaderPara = document.createElement("p");
  formHeaderPara.textContent = "les changements appliqués sont définitifs";

  formHeader.appendChild(formHeaderText);
  formHeader.appendChild(formHeaderPara);
  promoTitleButton.appendChild(formHeader);

  const formContainer = document.createElement("div");

  const form = document.createElement("form");
  form.className = "promoCreationForm";

  const promoNameDiv = document.createElement("div");
  promoNameDiv.className = "mb-3";

  const promoNameLabel = document.createElement("label");
  promoNameLabel.setAttribute("for", "PromoName");
  promoNameLabel.className = "form-label";
  promoNameLabel.textContent = "Nom de la promotion";

  const promoNameInput = document.createElement("input");
  promoNameInput.type = "text";
  promoNameInput.className = "form-control";
  promoNameInput.id = "PromoName";
  promoNameInput.placeholder = "...";

  promoNameDiv.appendChild(promoNameLabel);
  promoNameDiv.appendChild(promoNameInput);
  form.appendChild(promoNameDiv);

  const promoStartDateDiv = document.createElement("div");
  promoStartDateDiv.className = "mb-3";

  const promoStartDateLabel = document.createElement("label");
  promoStartDateLabel.setAttribute("for", "PromoStartDate");
  promoStartDateLabel.className = "form-label";
  promoStartDateLabel.textContent = "Date de début";

  const promoStartDateInput = document.createElement("input");
  promoStartDateInput.type = "date";
  promoStartDateInput.className = "form-control";
  promoStartDateInput.id = "PromoStartDate";
  promoStartDateInput.placeholder = "JJ/MM/AAAA";

  promoStartDateDiv.appendChild(promoStartDateLabel);
  promoStartDateDiv.appendChild(promoStartDateInput);
  form.appendChild(promoStartDateDiv);

  const promoEndDateDiv = document.createElement("div");
  promoEndDateDiv.className = "mb-3";

  const promoEndDateLabel = document.createElement("label");
  promoEndDateLabel.setAttribute("for", "PromoEndDate");
  promoEndDateLabel.className = "form-label";
  promoEndDateLabel.textContent = "Date de fin";

  const promoEndDateInput = document.createElement("input");
  promoEndDateInput.type = "date";
  promoEndDateInput.className = "form-control";
  promoEndDateInput.id = "PromoEndDate";
  promoEndDateInput.placeholder = "JJ/MM/AAAA";

  promoEndDateDiv.appendChild(promoEndDateLabel);
  promoEndDateDiv.appendChild(promoEndDateInput);
  form.appendChild(promoEndDateDiv);

  const promoPlacesDiv = document.createElement("div");
  promoPlacesDiv.className = "mb-3";

  const promoPlacesLabel = document.createElement("label");
  promoPlacesLabel.setAttribute("for", "PromoPlaces");
  promoPlacesLabel.className = "form-label";
  promoPlacesLabel.textContent = "Place(s) disponible(s)";

  const promoPlacesInput = document.createElement("input");
  promoPlacesInput.type = "number";
  promoPlacesInput.className = "form-control";
  promoPlacesInput.id = "PromoPlaces";
  promoPlacesInput.max = "20";
  promoPlacesInput.placeholder = "...";

  promoPlacesDiv.appendChild(promoPlacesLabel);
  promoPlacesDiv.appendChild(promoPlacesInput);
  form.appendChild(promoPlacesDiv);

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "d-grid gap-4 d-md-flex justify-content-md-end";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.id = "deletePromoButton";
  deleteButton.className = "btn btn-danger savePromoButton";
  deleteButton.textContent = "Supprimer";

  const saveButton = document.createElement("button");
  saveButton.type = "button";
  saveButton.id = "savePromoButton";
  saveButton.className = "btn btn-primary savePromoButton";
  saveButton.textContent = "Sauvegarder";

  buttonContainer.appendChild(deleteButton);
  buttonContainer.appendChild(saveButton);
  form.appendChild(buttonContainer);

  formContainer.appendChild(form);

  document.getElementById("main").append(promoTitleButton, formContainer);
}

//////////////////////////////// Fin de la partie Promotions ////////////////////////////////

export function createUserRow(lastName, firstName, email, activeAccount, role) {
  const row = document.createElement("tr");

  const checkboxTh = document.createElement("th");
  checkboxTh.setAttribute("scope", "row");
  const checkboxInput = document.createElement("input");
  checkboxInput.setAttribute("type", "checkbox");
  checkboxTh.appendChild(checkboxInput);

  const lastNameTd = document.createElement("td");
  lastNameTd.setAttribute("id", "lastName");
  lastNameTd.textContent = lastName;

  const firstNameTd = document.createElement("td");
  firstNameTd.setAttribute("id", "firstName");
  firstNameTd.textContent = firstName;

  const emailTd = document.createElement("td");
  emailTd.setAttribute("id", "email");
  emailTd.textContent = email;

  const activeAccountTd = document.createElement("td");
  activeAccountTd.setAttribute("id", "activeAccount");
  activeAccountTd.textContent = activeAccount;

  const roleTd = document.createElement("td");
  roleTd.setAttribute("id", "role");
  roleTd.textContent = role;

  const editTd = document.createElement("td");
  const editButton = document.createElement("button");
  editButton.setAttribute("type", "button");
  editButton.classList.add("tableButtons");
  editButton.textContent = "Éditer";
  editTd.appendChild(editButton);

  const deleteTd = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("type", "button");
  deleteButton.classList.add("tableButtons");
  deleteButton.textContent = "Supprimer";
  deleteTd.appendChild(deleteButton);

  row.appendChild(checkboxTh);
  row.appendChild(lastNameTd);
  row.appendChild(firstNameTd);
  row.appendChild(emailTd);
  row.appendChild(activeAccountTd);
  row.appendChild(roleTd);
  row.appendChild(editTd);
  row.appendChild(deleteTd);

  document.getElementById("main").appendChild(row);
}

export function createLearnerCreationForm() {
  const userTitleButton = document.createElement("div");
  userTitleButton.className = "userTitleButton";

  const formHeader = document.createElement("div");
  formHeader.className = "formHeader";

  const formHeaderText = document.createElement("h3");
  formHeaderText.textContent = "Création d'un apprenant";

  formHeader.appendChild(formHeaderText);
  userTitleButton.appendChild(formHeader);

  const formContainer = document.createElement("div");

  const form = document.createElement("form");
  form.className = "learnerCreationForm";

  const lastNameDiv = document.createElement("div");
  lastNameDiv.className = "mb-3";

  const lastNameLabel = document.createElement("label");
  lastNameLabel.htmlFor = "newLearnerLastName";
  lastNameLabel.className = "form-label";
  lastNameLabel.textContent = "Nom";

  const lastNameInput = document.createElement("input");
  lastNameInput.type = "text";
  lastNameInput.className = "form-control";
  lastNameInput.id = "newLearnerLastName";
  lastNameInput.placeholder = "...";

  lastNameDiv.appendChild(lastNameLabel);
  lastNameDiv.appendChild(lastNameInput);

  const firstNameDiv = document.createElement("div");
  firstNameDiv.className = "mb-3";

  const firstNameLabel = document.createElement("label");
  firstNameLabel.htmlFor = "newLearnerFirstName";
  firstNameLabel.className = "form-label";
  firstNameLabel.textContent = "Prénom";

  const firstNameInput = document.createElement("input");
  firstNameInput.type = "text";
  firstNameInput.className = "form-control";
  firstNameInput.id = "newLearnerFirstName";
  firstNameInput.placeholder = "...";

  firstNameDiv.appendChild(firstNameLabel);
  firstNameDiv.appendChild(firstNameInput);

  const emailDiv = document.createElement("div");
  emailDiv.className = "mb-3";

  const emailLabel = document.createElement("label");
  emailLabel.htmlFor = "newLearnerEmail";
  emailLabel.className = "form-label";
  emailLabel.textContent = "Adresse email";

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.className = "form-control";
  emailInput.id = "newLearnerEmail";
  emailInput.placeholder = "...";

  emailDiv.appendChild(emailLabel);
  emailDiv.appendChild(emailInput);

  const passwordDiv = document.createElement("div");
  passwordDiv.className = "mb-3";

  const passwordLabel = document.createElement("label");
  passwordLabel.htmlFor = "newLearnerPassword";
  passwordLabel.className = "form-label";
  passwordLabel.textContent = "Mot de passe";

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.className = "form-control";
  passwordInput.id = "newLearnerPassword";
  passwordInput.placeholder = "";

  passwordDiv.appendChild(passwordLabel);
  passwordDiv.appendChild(passwordInput);

  const activeAccountDiv = document.createElement("div");
  activeAccountDiv.className = "form-check";

  const activeAccountInput = document.createElement("input");
  activeAccountInput.type = "checkbox";
  activeAccountInput.className = "form-check-input";
  activeAccountInput.id = "activeAccountCheck";

  const activeAccountLabel = document.createElement("label");
  activeAccountLabel.htmlFor = "activeAccountCheck";
  activeAccountLabel.className = "form-check-label";
  activeAccountLabel.textContent = "Compte activé";

  activeAccountDiv.appendChild(activeAccountInput);
  activeAccountDiv.appendChild(activeAccountLabel);

  const buttonDiv = document.createElement("div");
  buttonDiv.className = "d-grid gap-4 d-md-flex justify-content-md-end";

  const saveButton = document.createElement("button");
  saveButton.type = "button";
  saveButton.id = "saveLearnerButton";
  saveButton.className = "btn btn-primary saveLearnerButton";
  saveButton.textContent = "Sauvegarder";

  buttonDiv.appendChild(saveButton);

  form.appendChild(lastNameDiv);
  form.appendChild(firstNameDiv);
  form.appendChild(emailDiv);
  form.appendChild(passwordDiv);
  form.appendChild(activeAccountDiv);
  form.appendChild(buttonDiv);

  formContainer.appendChild(form);

  document.getElementById("main").append(userTitleButton, formContainer);
}

export function createLearnerEditForm() {
  const userTitleButton = document.createElement("div");
  userTitleButton.className = "userTitleButton";

  const formHeader = document.createElement("div");
  formHeader.className = "formHeader";

  const title = document.createElement("h3");
  title.textContent = "Édition de l'apprenant NOMDEL'APPRENANT";

  const description = document.createElement("p");
  description.textContent = "les changements appliqués sont définitifs";

  formHeader.appendChild(title);
  formHeader.appendChild(description);
  userTitleButton.appendChild(formHeader);

  const formContainer = document.createElement("div");

  const learnerCreationForm = document.createElement("form");
  learnerCreationForm.className = "learnerCreationForm";

  const lastNameDiv = document.createElement("div");
  lastNameDiv.className = "mb-3";

  const lastNameLabel = document.createElement("label");
  lastNameLabel.htmlFor = "LearnerLastName";
  lastNameLabel.className = "form-label";
  lastNameLabel.textContent = "Nom";

  const lastNameInput = document.createElement("input");
  lastNameInput.type = "text";
  lastNameInput.className = "form-control";
  lastNameInput.id = "LearnerLastName";
  lastNameInput.placeholder = "nom";

  lastNameDiv.appendChild(lastNameLabel);
  lastNameDiv.appendChild(lastNameInput);
  learnerCreationForm.appendChild(lastNameDiv);

  const firstNameDiv = document.createElement("div");
  firstNameDiv.className = "mb-3";

  const firstNameLabel = document.createElement("label");
  firstNameLabel.htmlFor = "LearnerFirstName";
  firstNameLabel.className = "form-label";
  firstNameLabel.textContent = "Prénom";

  const firstNameInput = document.createElement("input");
  firstNameInput.type = "text";
  firstNameInput.className = "form-control";
  firstNameInput.id = "LearnerFirstName";
  firstNameInput.placeholder = "prénom";

  firstNameDiv.appendChild(firstNameLabel);
  firstNameDiv.appendChild(firstNameInput);
  learnerCreationForm.appendChild(firstNameDiv);

  const emailDiv = document.createElement("div");
  emailDiv.className = "mb-3";

  const emailLabel = document.createElement("label");
  emailLabel.htmlFor = "LearnerEmail";
  emailLabel.className = "form-label";
  emailLabel.textContent = "Adresse email";

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.className = "form-control";
  emailInput.id = "LearnerEmail";
  emailInput.placeholder = "nom.prénom@email.com";

  emailDiv.appendChild(emailLabel);
  emailDiv.appendChild(emailInput);
  learnerCreationForm.appendChild(emailDiv);

  const passwordDiv = document.createElement("div");
  passwordDiv.className = "mb-3";

  const passwordLabel = document.createElement("label");
  passwordLabel.htmlFor = "LearnerPassword";
  passwordLabel.className = "form-label";
  passwordLabel.textContent = "Mot de passe";

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.className = "form-control";
  passwordInput.id = "LearnerPassword";
  passwordInput.placeholder = "*****";

  passwordDiv.appendChild(passwordLabel);
  passwordDiv.appendChild(passwordInput);
  learnerCreationForm.appendChild(passwordDiv);

  const checkboxDiv = document.createElement("div");
  checkboxDiv.className = "form-check";

  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  checkboxInput.className = "form-check-input";
  checkboxInput.id = "activeAccountCheck";

  const checkboxLabel = document.createElement("label");
  checkboxLabel.htmlFor = "activeAccountCheck";
  checkboxLabel.className = "form-check-label";
  checkboxLabel.textContent = "Compte activé";

  checkboxDiv.appendChild(checkboxInput);
  checkboxDiv.appendChild(checkboxLabel);
  learnerCreationForm.appendChild(checkboxDiv);

  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "d-grid gap-4 d-md-flex justify-content-md-end";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.id = "deleteLearnerButton";
  deleteButton.className = "btn btn-danger deleteLearnerButton";
  deleteButton.textContent = "Supprimer";

  const saveButton = document.createElement("button");
  saveButton.type = "button";
  saveButton.id = "saveLearnerButton";
  saveButton.className = "btn btn-primary saveLearnerButton";
  saveButton.textContent = "Sauvegarder";

  buttonsDiv.appendChild(deleteButton);
  buttonsDiv.appendChild(saveButton);
  learnerCreationForm.appendChild(buttonsDiv);

  formContainer.appendChild(learnerCreationForm);

  document.getElementById("main").append(userTitleButton, formContainer);
}

export function createUserCreationForm() {
    const userTitleButton = document.createElement('div');
    userTitleButton.className = 'userTitleButton';
  
    const formHeader = document.createElement('div');
    formHeader.className = 'formHeader';
  
    const title = document.createElement('h3');
    title.textContent = 'Création d\'un utilisateur';
  
    formHeader.appendChild(title);
    userTitleButton.appendChild(formHeader);
  
    const formContainer = document.createElement('div');
  
    const userCreationForm = document.createElement('form');
    userCreationForm.className = 'userCreationForm';
  
    const lastNameDiv = document.createElement('div');
    lastNameDiv.className = 'mb-3';
  
    const lastNameLabel = document.createElement('label');
    lastNameLabel.htmlFor = 'newUserLastName';
    lastNameLabel.className = 'form-label';
    lastNameLabel.textContent = 'Nom';
  
    const lastNameInput = document.createElement('input');
    lastNameInput.type = 'text';
    lastNameInput.className = 'form-control';
    lastNameInput.id = 'newUserLastName';
    lastNameInput.placeholder = '...';
  
    lastNameDiv.appendChild(lastNameLabel);
    lastNameDiv.appendChild(lastNameInput);
    userCreationForm.appendChild(lastNameDiv);
  
    const firstNameDiv = document.createElement('div');
    firstNameDiv.className = 'mb-3';
  
    const firstNameLabel = document.createElement('label');
    firstNameLabel.htmlFor = 'newUserFirstName';
    firstNameLabel.className = 'form-label';
    firstNameLabel.textContent = 'Prénom';
  
    const firstNameInput = document.createElement('input');
    firstNameInput.type = 'text';
    firstNameInput.className = 'form-control';
    firstNameInput.id = 'newUserFirstName';
    firstNameInput.placeholder = '...';
  
    firstNameDiv.appendChild(firstNameLabel);
    firstNameDiv.appendChild(firstNameInput);
    userCreationForm.appendChild(firstNameDiv);
  
    const emailDiv = document.createElement('div');
    emailDiv.className = 'mb-3';
  
    const emailLabel = document.createElement('label');
    emailLabel.htmlFor = 'newUserEmail';
    emailLabel.className = 'form-label';
    emailLabel.textContent = 'Adresse email';
  
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.className = 'form-control';
    emailInput.id = 'newUserEmail';
    emailInput.placeholder = '...';
  
    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);
    userCreationForm.appendChild(emailDiv);
  
    const roleDiv = document.createElement('div');
    roleDiv.className = 'mb-3';
  
    const roleLabel = document.createElement('label');
    roleLabel.htmlFor = 'newUserRole';
    roleLabel.className = 'form-label';
    roleLabel.textContent = 'Rôle';
  
    const roleSelect = document.createElement('select');
    roleSelect.className = 'form-select';
    roleSelect.ariaLabel = 'newUserRole';
  
    const defaultRoleOption = document.createElement('option');
    defaultRoleOption.selected = true;
    defaultRoleOption.textContent = 'Selectionner un rôle';
  
    const formateurOption = document.createElement('option');
    formateurOption.value = 'Formateur';
    formateurOption.textContent = 'Formateur-rice';
  
    const campusManagerOption = document.createElement('option');
    campusManagerOption.value = 'Campus_manager';
    campusManagerOption.textContent = 'Campus Manager';
  
    const apprenantOption = document.createElement('option');
    apprenantOption.value = 'Apprenant';
    apprenantOption.textContent = 'Apprenant-e';
  
    const responsablePedagogiqueOption = document.createElement('option');
    responsablePedagogiqueOption.value = 'Responsable_pedagogique';
    responsablePedagogiqueOption.textContent = 'Responsable pédagogique';
  
    const delegeOption = document.createElement('option');
    delegeOption.value = 'Delegue';
    delegeOption.textContent = 'Délégué-e';
  
    roleSelect.appendChild(defaultRoleOption);
    roleSelect.appendChild(formateurOption);
    roleSelect.appendChild(campusManagerOption);
    roleSelect.appendChild(apprenantOption);
    roleSelect.appendChild(responsablePedagogiqueOption);
    roleSelect.appendChild(delegeOption);
  
    roleDiv.appendChild(roleLabel);
    roleDiv.appendChild(roleSelect);
    userCreationForm.appendChild(roleDiv);
  
    const promoLinkDiv = document.createElement('div');
    promoLinkDiv.className = 'mb-3';
  
    const promoLinkLabel = document.createElement('label');
    promoLinkLabel.htmlFor = 'promoLink';
    promoLinkLabel.className = 'form-check-label';
    promoLinkLabel.textContent = "Promotion(s)";
  
    const promoLinkSelect = document.createElement('select');
    promoLinkSelect.className = 'form-select';
    promoLinkSelect.id = 'promoLink';
    promoLinkSelect.multiple = true;
    promoLinkSelect.dataset.placeholder = "Selectionner la/les promotion(s) de l’utilisateur";
  
    promoLinkDiv.appendChild(promoLinkLabel);
    promoLinkDiv.appendChild(promoLinkSelect);
    userCreationForm.appendChild(promoLinkDiv);
  
    const saveButtonDiv = document.createElement('div');
    saveButtonDiv.className = 'd-grid gap-4 d-md-flex justify-content-md-end';
  
    const saveButton = document.createElement('button');
    saveButton.type = 'button';
    saveButton.id = 'saveUserButton';
    saveButton.className = 'btn btn-primary saveUserButton';
    saveButton.textContent = 'Sauvegarder';
  
    saveButtonDiv.appendChild(saveButton);
    userCreationForm.appendChild(saveButtonDiv);
  
    formContainer.appendChild(userCreationForm);
  
    document.getElementById("main").append(userTitleButton, formContainer);
  }
  
 export function createUserEditForm(userName) {
    const userTitleButton = document.createElement('div');
    userTitleButton.className = 'userTitleButton';
  
    const formHeader = document.createElement('div');
    formHeader.className = 'formHeader';
  
    const title = document.createElement('h3');
    title.textContent = `Édition de l’utilisateur ${userName}`;
  
    const description = document.createElement('p');
    description.textContent = 'les changements appliqués sont définitifs';
  
    formHeader.appendChild(title);
    formHeader.appendChild(description);
    userTitleButton.appendChild(formHeader);
  
    const formContainer = document.createElement('div');
  
    const userEditForm = document.createElement('form');
    userEditForm.className = 'userEditForm';
  
    const lastNameDiv = document.createElement('div');
    lastNameDiv.className = 'mb-3';
  
    const lastNameLabel = document.createElement('label');
    lastNameLabel.htmlFor = 'userLastName';
    lastNameLabel.className = 'form-label';
    lastNameLabel.textContent = 'Nom';
  
    const lastNameInput = document.createElement('input');
    lastNameInput.type = 'text';
    lastNameInput.className = 'form-control';
    lastNameInput.id = 'userLastName';
    lastNameInput.placeholder = '...';
  
    lastNameDiv.appendChild(lastNameLabel);
    lastNameDiv.appendChild(lastNameInput);
    userEditForm.appendChild(lastNameDiv);
  
    const firstNameDiv = document.createElement('div');
    firstNameDiv.className = 'mb-3';
  
    const firstNameLabel = document.createElement('label');
    firstNameLabel.htmlFor = 'userFirstName';
    firstNameLabel.className = 'form-label';
    firstNameLabel.textContent = 'Prénom';
  
    const firstNameInput = document.createElement('input');
    firstNameInput.type = 'text';
    firstNameInput.className = 'form-control';
    firstNameInput.id = 'userFirstName';
    firstNameInput.placeholder = '...';
  
    firstNameDiv.appendChild(firstNameLabel);
    firstNameDiv.appendChild(firstNameInput);
    userEditForm.appendChild(firstNameDiv);
  
    const emailDiv = document.createElement('div');
    emailDiv.className = 'mb-3';
  
    const emailLabel = document.createElement('label');
    emailLabel.htmlFor = 'userEmail';
    emailLabel.className = 'form-label';
    emailLabel.textContent = 'Adresse email';
  
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.className = 'form-control';
    emailInput.id = 'userEmail';
    emailInput.placeholder = '...';
  
    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);
    userEditForm.appendChild(emailDiv);
  
    const roleDiv = document.createElement('div');
    roleDiv.className = 'mb-3';
  
    const roleLabel = document.createElement('label');
    roleLabel.htmlFor = 'userRole';
    roleLabel.className = 'form-label';
    roleLabel.textContent = 'Rôle';
  
    const roleSelect = document.createElement('select');
    roleSelect.className = 'form-select';
    roleSelect.ariaLabel = 'userRole';
  
    const defaultRoleOption = document.createElement('option');
    defaultRoleOption.selected = true;
    defaultRoleOption.textContent = 'Selectionner un rôle';
  
    const formateurOption = document.createElement('option');
    formateurOption.value = 'Formateur';
    formateurOption.textContent = 'Formateur-rice';
  
    const campusManagerOption = document.createElement('option');
    campusManagerOption.value = 'Campus_manager';
    campusManagerOption.textContent = 'Campus Manager';
  
    const apprenantOption = document.createElement('option');
    apprenantOption.value = 'Apprenant';
    apprenantOption.textContent = 'Apprenant-e';
  
    const responsablePedagogiqueOption = document.createElement('option');
    responsablePedagogiqueOption.value = 'Responsable_pedagogique';
    responsablePedagogiqueOption.textContent = 'Responsable pédagogique';
  
    const delegeOption = document.createElement('option');
    delegeOption.value = 'Delegue';
    delegeOption.textContent = 'Délégué-e';
  
    roleSelect.appendChild(defaultRoleOption);
    roleSelect.appendChild(formateurOption);
    roleSelect.appendChild(campusManagerOption);
    roleSelect.appendChild(apprenantOption);
    roleSelect.appendChild(responsablePedagogiqueOption);
    roleSelect.appendChild(delegeOption);
  
    roleDiv.appendChild(roleLabel);
    roleDiv.appendChild(roleSelect);
    userEditForm.appendChild(roleDiv);
  
    const promoLinkDiv = document.createElement('div');
    promoLinkDiv.className = 'mb-3';
  
    const promoLinkLabel = document.createElement('label');
    promoLinkLabel.htmlFor = 'promoLink';
    promoLinkLabel.className = 'form-check-label';
    promoLinkLabel.textContent = "Promotion(s)";
  
    const promoLinkSelect = document.createElement('select');
    promoLinkSelect.className = 'form-select';
    promoLinkSelect.id = 'promoLink';
    promoLinkSelect.multiple = true;
    promoLinkSelect.dataset.placeholder = "Selectionner la/les promotion(s) de l’utilisateur";
  
    promoLinkDiv.appendChild(promoLinkLabel);
    promoLinkDiv.appendChild(promoLinkSelect);
    userEditForm.appendChild(promoLinkDiv);
  
    const activeAccountCheckDiv = document.createElement('div');
    activeAccountCheckDiv.className = 'form-check';
  
    const activeAccountCheckInput = document.createElement('input');
    activeAccountCheckInput.type = 'checkbox';
    activeAccountCheckInput.className = 'form-check-input';
    activeAccountCheckInput.id = 'activeAccountCheck';
  
    const activeAccountCheckLabel = document.createElement('label');
    activeAccountCheckLabel.htmlFor = 'activeAccountCheck';
    activeAccountCheckLabel.className = 'form-check-label';
    activeAccountCheckLabel.textContent = 'Compte activé';
  
    activeAccountCheckDiv.appendChild(activeAccountCheckInput);
    activeAccountCheckDiv.appendChild(activeAccountCheckLabel);
    userEditForm.appendChild(activeAccountCheckDiv);
  
    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'd-grid gap-4 d-md-flex justify-content-md-end';
  
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.id = 'deleteUserButton';
    deleteButton.className = 'btn btn-danger deleteUserButton';
    deleteButton.textContent = 'Supprimer';
  
    const saveButton = document.createElement('button');
    saveButton.type = 'button';
    saveButton.id = 'saveUserButton';
    saveButton.className = 'btn btn-primary saveUserButton';
    saveButton.textContent = 'Sauvegarder';
  
    buttonsDiv.appendChild(deleteButton);
    buttonsDiv.appendChild(saveButton);
    userEditForm.appendChild(buttonsDiv);
  
    formContainer.appendChild(userEditForm);
  
    document.getElementById("main").append(userTitleButton, formContainer);
  }

////////////////////////////// Fin de la partie Utilisateurs //////////////////////////////

export function createGeneralContent() {
  const section = document.createElement("section");
  section.className = "generalContent";

  const nav = document.createElement("nav");

  const navTabs = document.createElement("div");
  navTabs.className = "nav nav-tabs";
  navTabs.id = "nav-tab";
  navTabs.role = "tablist";

  const retourButton = document.createElement("button");
  retourButton.className = "btn btn-primary";
  retourButton.type = "button";
  retourButton.textContent = "Retour";

  const infoTab = document.createElement("button");
  infoTab.className = "nav-link active";
  infoTab.id = "nav-info-tab";
  infoTab.dataset.bsToggle = "tab";
  infoTab.dataset.bsTarget = "#nav-info";
  infoTab.type = "button";
  infoTab.role = "tab";
  infoTab.ariaControls = "nav-info";
  infoTab.ariaSelected = "true";
  infoTab.textContent = "Informations générales";

  const retardTab = document.createElement("button");
  retardTab.className = "nav-link";
  retardTab.id = "nav-retard-tab";
  retardTab.dataset.bsToggle = "tab";
  retardTab.dataset.bsTarget = "#nav-retard";
  retardTab.type = "button";
  retardTab.role = "tab";
  retardTab.ariaControls = "nav-retard";
  retardTab.ariaSelected = "false";
  retardTab.textContent = "Retards";

  const absenceTab = document.createElement("button");
  absenceTab.className = "nav-link";
  absenceTab.id = "nav-absence-tab";
  absenceTab.dataset.bsToggle = "tab";
  absenceTab.dataset.bsTarget = "#nav-absence";
  absenceTab.type = "button";
  absenceTab.role = "tab";
  absenceTab.ariaControls = "nav-absence";
  absenceTab.ariaSelected = "false";
  absenceTab.textContent = "Absences";

  navTabs.appendChild(retourButton);
  navTabs.appendChild(infoTab);
  navTabs.appendChild(retardTab);
  navTabs.appendChild(absenceTab);

  nav.appendChild(navTabs);

  const tabContent = document.createElement("div");
  tabContent.id = "nav-tabContent";
  tabContent.className = "tab-content";

  const infoPane = document.createElement("div");
  infoPane.id = "nav-info";
  infoPane.role = "tabpanel";
  infoPane.ariaLabelledby = "nav-info-tab";
  infoPane.className = "tab-pane fade show active";
  infoPane.tabIndex = "0";

  const infoPromoTitleButton = document.createElement("div");
  infoPromoTitleButton.className = "promoTitleButton";

  const infoLeftInfos = document.createElement("div");
  infoLeftInfos.className = "leftInfos";

  const infoH3 = document.createElement("h3");
  infoH3.textContent = "Promotion NOMDEPROMO";

  const infoP = document.createElement("p");
  infoP.textContent = "informations générales de la promotion";

  infoLeftInfos.appendChild(infoH3);
  infoLeftInfos.appendChild(infoP);

  const infoAddButton = document.createElement("button");
  infoAddButton.className = "btn btn-success";
  infoAddButton.textContent = "Ajouter apprenant";

  infoPromoTitleButton.appendChild(infoLeftInfos);
  infoPromoTitleButton.appendChild(infoAddButton);

  const infoTable = document.createElement("table");
  infoTable.className = "table";

  const infoThead = document.createElement("thead");

  const infoTr = document.createElement("tr");

  const infoCheckboxTh = document.createElement("th");
  infoCheckboxTh.scope = "col";
  const infoSelectAllInput = document.createElement("input");
  infoSelectAllInput.type = "checkbox";
  infoSelectAllInput.id = "selectAll";
  infoCheckboxTh.appendChild(infoSelectAllInput);

  const infoLastNameTh = document.createElement("th");
  infoLastNameTh.scope = "col";
  infoLastNameTh.textContent = "Nom de famille";

  const infoFirstNameTh = document.createElement("th");
  infoFirstNameTh.scope = "col";
  infoFirstNameTh.textContent = "Prénom";

  const infoEmailTh = document.createElement("th");
  infoEmailTh.scope = "col";
  infoEmailTh.textContent = "Mail";

  const infoActiveAccountTh = document.createElement("th");
  infoActiveAccountTh.scope = "col";
  infoActiveAccountTh.textContent = "Compte activé";

  const infoRoleTh = document.createElement("th");
  infoRoleTh.scope = "col";
  infoRoleTh.textContent = "Rôle";

  const infoEditTh = document.createElement("th");
  infoEditTh.scope = "col";

  const infoDeleteTh = document.createElement("th");
  infoDeleteTh.scope = "col";

  infoTr.appendChild(infoCheckboxTh);
  infoTr.appendChild(infoLastNameTh);
  infoTr.appendChild(infoFirstNameTh);
  infoTr.appendChild(infoEmailTh);
  infoTr.appendChild(infoActiveAccountTh);
  infoTr.appendChild(infoRoleTh);
  infoTr.appendChild(infoEditTh);
  infoTr.appendChild(infoDeleteTh);

  infoThead.appendChild(infoTr);

  const infoTbody = document.createElement("tbody");
  infoTbody.className = "table-group-divider";

  infoTable.appendChild(infoThead);
  infoTable.appendChild(infoTbody);

  infoPane.appendChild(infoPromoTitleButton);
  infoPane.appendChild(infoTable);

  const retardPane = document.createElement("div");
  retardPane.id = "nav-retard";
  retardPane.role = "tabpanel";
  retardPane.ariaLabelledby = "nav-retard-tab";
  retardPane.className = "tab-pane fade";
  retardPane.tabIndex = "0";

  const retardPromoTitleButton = document.createElement("div");
  retardPromoTitleButton.className = "promoTitleButton";

  const retardLeftInfos = document.createElement("div");
  retardLeftInfos.className = "leftInfos";

  const retardH3 = document.createElement("h3");
  retardH3.textContent = "Promotion NOMDEPROMO";

  const retardP = document.createElement("p");
  retardP.textContent = "tableau des retards";

  retardLeftInfos.appendChild(retardH3);
  retardLeftInfos.appendChild(retardP);

  const retardAddButton = document.createElement("button");
  retardAddButton.className = "btn btn-success";
  retardAddButton.textContent = "Ajouter promotion";

  retardPromoTitleButton.appendChild(retardLeftInfos);
  retardPromoTitleButton.appendChild(retardAddButton);

  const retardTable = document.createElement("table");
  retardTable.className = "table";

  const retardThead = document.createElement("thead");

  const retardTr = document.createElement("tr");

  const retardCheckboxTh = document.createElement("th");
  retardCheckboxTh.scope = "col";
  const retardSelectAllInput = document.createElement("input");
  retardSelectAllInput.type = "checkbox";
  retardSelectAllInput.id = "selectAll";
  retardCheckboxTh.appendChild(retardSelectAllInput);

  const retardLastNameTh = document.createElement("th");
  retardLastNameTh.scope = "col";
  retardLastNameTh.textContent = "Nom de famille";

  const retardFirstNameTh = document.createElement("th");
  retardFirstNameTh.scope = "col";
  retardFirstNameTh.textContent = "Prénom";

  const retardEmailTh = document.createElement("th");
  retardEmailTh.scope = "col";
  retardEmailTh.textContent = "Mail";

  const retardActiveAccountTh = document.createElement("th");
  retardActiveAccountTh.scope = "col";
  retardActiveAccountTh.textContent = "Compte activé";

  const retardRoleTh = document.createElement("th");
  retardRoleTh.scope = "col";
  retardRoleTh.textContent = "Rôle";

  const retardEditTh = document.createElement("th");
  retardEditTh.scope = "col";

  const retardDeleteTh = document.createElement("th");
  retardDeleteTh.scope = "col";

  retardTr.appendChild(retardCheckboxTh);
  retardTr.appendChild(retardLastNameTh);
  retardTr.appendChild(retardFirstNameTh);
  retardTr.appendChild(retardEmailTh);
  retardTr.appendChild(retardActiveAccountTh);
  retardTr.appendChild(retardRoleTh);
  retardTr.appendChild(retardEditTh);
  retardTr.appendChild(retardDeleteTh);

  retardThead.appendChild(retardTr);

  const retardTbody = document.createElement("tbody");
  retardTbody.className = "table-group-divider";

  retardTable.appendChild(retardThead);
  retardTable.appendChild(retardTbody);

  retardPane.appendChild(retardPromoTitleButton);
  retardPane.appendChild(retardTable);

  const absencePane = document.createElement("div");
  absencePane.id = "nav-absence";
  absencePane.role = "tabpanel";
  absencePane.ariaLabelledby = "nav-absence-tab";
  absencePane.className = "tab-pane fade";
  absencePane.tabIndex = "0";

  const absencePromoTitleButton = document.createElement("div");
  absencePromoTitleButton.className = "promoTitleButton";

  const absenceLeftInfos = document.createElement("div");
  absenceLeftInfos.className = "leftInfos";

  const absenceH3 = document.createElement("h3");
  absenceH3.textContent = "Promotion NOMDEPROMO";

  const absenceP = document.createElement("p");
  absenceP.textContent = "tableau des absences";

  absenceLeftInfos.appendChild(absenceH3);
  absenceLeftInfos.appendChild(absenceP);

  const absenceAddButton = document.createElement("button");
  absenceAddButton.className = "btn btn-success";
  absenceAddButton.textContent = "Ajouter promotion";

  absencePromoTitleButton.appendChild(absenceLeftInfos);
  absencePromoTitleButton.appendChild(absenceAddButton);

  const absenceTable = document.createElement("table");
  absenceTable.className = "table";

  const absenceThead = document.createElement("thead");

  const absenceTr = document.createElement("tr");

  const absenceCheckboxTh = document.createElement("th");
  absenceCheckboxTh.scope = "col";
  const absenceSelectAllInput = document.createElement("input");
  absenceSelectAllInput.type = "checkbox";
  absenceSelectAllInput.id = "selectAll";
  absenceCheckboxTh.appendChild(absenceSelectAllInput);

  const absenceLastNameTh = document.createElement("th");
  absenceLastNameTh.scope = "col";
  absenceLastNameTh.textContent = "Nom de famille";

  const absenceFirstNameTh = document.createElement("th");
  absenceFirstNameTh.scope = "col";
  absenceFirstNameTh.textContent = "Prénom";

  const absenceEmailTh = document.createElement("th");
  absenceEmailTh.scope = "col";
  absenceEmailTh.textContent = "Mail";

  const absenceActiveAccountTh = document.createElement("th");
  absenceActiveAccountTh.scope = "col";
  absenceActiveAccountTh.textContent = "Compte activé";

  const absenceRoleTh = document.createElement("th");
  absenceRoleTh.scope = "col";
  absenceRoleTh.textContent = "Rôle";

  const absenceEditTh = document.createElement("th");
  absenceEditTh.scope = "col";

  const absenceDeleteTh = document.createElement("th");
  absenceDeleteTh.scope = "col";

  absenceTr.appendChild(absenceCheckboxTh);
  absenceTr.appendChild(absenceLastNameTh);
  absenceTr.appendChild(absenceFirstNameTh);
  absenceTr.appendChild(absenceEmailTh);
  absenceTr.appendChild(absenceActiveAccountTh);
  absenceTr.appendChild(absenceRoleTh);
  absenceTr.appendChild(absenceEditTh);
  absenceTr.appendChild(absenceDeleteTh);

  absenceThead.appendChild(absenceTr);

  const absenceTbody = document.createElement("tbody");
  absenceTbody.className = "table-group-divider";

  absenceTable.appendChild(absenceThead);
  absenceTable.appendChild(absenceTbody);

  absencePane.appendChild(absencePromoTitleButton);
  absencePane.appendChild(absenceTable);

  tabContent.appendChild(infoPane);
  tabContent.appendChild(retardPane);
  tabContent.appendChild(absencePane);

  section.appendChild(nav);
  section.appendChild(tabContent);

  document.getElementById("main").append(section);
}

export function createDelayCreationForm() {
  const delayTitleButton = document.createElement("div");
  delayTitleButton.className = "delayTitleButton";

  const formHeader = document.createElement("div");
  formHeader.className = "formHeader";

  const title = document.createElement("h3");
  title.textContent = "Création d'un retard";

  formHeader.appendChild(title);
  delayTitleButton.appendChild(formHeader);

  const formContainer = document.createElement("div");

  const delayCreationForm = document.createElement("form");
  delayCreationForm.className = "delayCreationForm";

  const learnerDelayDiv = document.createElement("div");
  learnerDelayDiv.className = "mb-3";

  const learnerDelayLabel = document.createElement("label");
  learnerDelayLabel.htmlFor = "LearnerDelay";
  learnerDelayLabel.className = "form-label";
  learnerDelayLabel.textContent = "Apprenant concerné";

  const learnerDelaySelect = document.createElement("select");
  learnerDelaySelect.className = "form-select";
  learnerDelaySelect.id = "LearnerDelay";
  learnerDelaySelect.ariaLabel = "LearnerDelay";

  const defaultOption = document.createElement("option");
  defaultOption.selected = true;
  defaultOption.textContent = "Selectionner un apprenant";

  const option1 = document.createElement("option");
  option1.value = "1";
  option1.textContent = "Example";

  const option2 = document.createElement("option");
  option2.value = "2";
  option2.textContent = "Example";

  const option3 = document.createElement("option");
  option3.value = "3";
  option3.textContent = "Example";

  learnerDelaySelect.appendChild(defaultOption);
  learnerDelaySelect.appendChild(option1);
  learnerDelaySelect.appendChild(option2);
  learnerDelaySelect.appendChild(option3);

  learnerDelayDiv.appendChild(learnerDelayLabel);
  learnerDelayDiv.appendChild(learnerDelaySelect);
  delayCreationForm.appendChild(learnerDelayDiv);

  const delayDateDiv = document.createElement("div");
  delayDateDiv.className = "mb-3";

  const delayDateLabel = document.createElement("label");
  delayDateLabel.htmlFor = "delayDate";
  delayDateLabel.className = "form-label";
  delayDateLabel.textContent = "Date du retard";

  const delayDateInput = document.createElement("input");
  delayDateInput.type = "date";
  delayDateInput.className = "form-control";
  delayDateInput.id = "delayDate";
  delayDateInput.placeholder = "JJ-MM-AAAA";

  delayDateDiv.appendChild(delayDateLabel);
  delayDateDiv.appendChild(delayDateInput);
  delayCreationForm.appendChild(delayDateDiv);

  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "d-grid gap-4 d-md-flex justify-content-md-end";

  const saveButton = document.createElement("button");
  saveButton.type = "button";
  saveButton.id = "saveDelayButton";
  saveButton.className = "btn btn-primary saveDelayButton";
  saveButton.textContent = "Sauvegarder";

  buttonsDiv.appendChild(saveButton);
  delayCreationForm.appendChild(buttonsDiv);

  formContainer.appendChild(delayCreationForm);

  document.getElementById("main").append(delayTitleButton, formContainer);
}

export function createDelayEditForm(learnerName) {
  const delayTitleButton = document.createElement("div");
  delayTitleButton.className = "delayTitleButton";

  const formHeader = document.createElement("div");
  formHeader.className = "formHeader";

  const title = document.createElement("h3");
  title.textContent = `Édition du retard de ${learnerName}`;

  const description = document.createElement("p");
  description.textContent = "les changements appliqués sont définitifs";

  formHeader.appendChild(title);
  formHeader.appendChild(description);
  delayTitleButton.appendChild(formHeader);

  const formContainer = document.createElement("div");

  const delayEditForm = document.createElement("form");
  delayEditForm.className = "delayCreationForm";

  const learnerDelayDiv = document.createElement("div");
  learnerDelayDiv.className = "mb-3";

  const learnerDelayLabel = document.createElement("label");
  learnerDelayLabel.htmlFor = "LearnerDelay";
  learnerDelayLabel.className = "form-label";
  learnerDelayLabel.textContent = "Apprenant concerné";

  const learnerDelaySelect = document.createElement("select");
  learnerDelaySelect.className = "form-select";
  learnerDelaySelect.id = "LearnerDelay";
  learnerDelaySelect.ariaLabel = "LearnerDelay";

  const defaultOption = document.createElement("option");
  defaultOption.selected = true;
  defaultOption.textContent = learnerName;

  const option1 = document.createElement("option");
  option1.value = "1";
  option1.textContent = "Example";

  const option2 = document.createElement("option");
  option2.value = "2";
  option2.textContent = "Example";

  const option3 = document.createElement("option");
  option3.value = "3";
  option3.textContent = "Example";

  learnerDelaySelect.appendChild(defaultOption);
  learnerDelaySelect.appendChild(option1);
  learnerDelaySelect.appendChild(option2);
  learnerDelaySelect.appendChild(option3);

  learnerDelayDiv.appendChild(learnerDelayLabel);
  learnerDelayDiv.appendChild(learnerDelaySelect);
  delayEditForm.appendChild(learnerDelayDiv);

  const delayDateDiv = document.createElement("div");
  delayDateDiv.className = "mb-3";

  const delayDateLabel = document.createElement("label");
  delayDateLabel.htmlFor = "delayDate";
  delayDateLabel.className = "form-label";
  delayDateLabel.textContent = "Date du retard";

  const delayDateInput = document.createElement("input");
  delayDateInput.type = "date";
  delayDateInput.className = "form-control";
  delayDateInput.id = "delayDate";
  delayDateInput.placeholder = "JJ-MM-AAAA";

  delayDateDiv.appendChild(delayDateLabel);
  delayDateDiv.appendChild(delayDateInput);
  delayEditForm.appendChild(delayDateDiv);

  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "d-grid gap-4 d-md-flex justify-content-md-end";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.id = "deleteDelayButton";
  deleteButton.className = "btn btn-danger deleteDelayButton";
  deleteButton.textContent = "Supprimer";

  const saveButton = document.createElement("button");
  saveButton.type = "button";
  saveButton.id = "saveDelayButton";
  saveButton.className = "btn btn-primary saveDelayButton";
  saveButton.textContent = "Sauvegarder";

  buttonsDiv.appendChild(deleteButton);
  buttonsDiv.appendChild(saveButton);
  delayEditForm.appendChild(buttonsDiv);

  formContainer.appendChild(delayEditForm);

  document.getElementById("main").append(delayTitleButton, formContainer);
}

export function createAbsenceCreationForm() {
    const absenceTitleButton = document.createElement('div');
    absenceTitleButton.className = 'absenceTitleButton';
  
    const formHeader = document.createElement('div');
    formHeader.className = 'formHeader';
  
    const title = document.createElement('h3');
    title.textContent = 'Création d\'une absence';
  
    formHeader.appendChild(title);
    absenceTitleButton.appendChild(formHeader);
  
    const formContainer = document.createElement('div');
  
    const absenceCreationForm = document.createElement('form');
    absenceCreationForm.className = 'absenceCreationForm';
  
    const learnerAbsenceDiv = document.createElement('div');
    learnerAbsenceDiv.className = 'mb-3';
  
    const learnerAbsenceLabel = document.createElement('label');
    learnerAbsenceLabel.htmlFor = 'LearnerAbsence';
    learnerAbsenceLabel.className = 'form-label';
    learnerAbsenceLabel.textContent = 'Apprenant concerné';
  
    const learnerAbsenceSelect = document.createElement('select');
    learnerAbsenceSelect.className = 'form-select';
    learnerAbsenceSelect.id = 'LearnerAbsence';
    learnerAbsenceSelect.ariaLabel = 'LearnerAbsence';
  
    const defaultOption = document.createElement('option');
    defaultOption.selected = true;
    defaultOption.textContent = 'Selectionner un apprenant';
  
    const option1 = document.createElement('option');
    option1.value = '1';
    option1.textContent = 'Example';
  
    const option2 = document.createElement('option');
    option2.value = '2';
    option2.textContent = 'Example';
  
    const option3 = document.createElement('option');
    option3.value = '3';
    option3.textContent = 'Example';
  
    learnerAbsenceSelect.appendChild(defaultOption);
    learnerAbsenceSelect.appendChild(option1);
    learnerAbsenceSelect.appendChild(option2);
    learnerAbsenceSelect.appendChild(option3);
  
    learnerAbsenceDiv.appendChild(learnerAbsenceLabel);
    learnerAbsenceDiv.appendChild(learnerAbsenceSelect);
    absenceCreationForm.appendChild(learnerAbsenceDiv);
  
    const absenceDateDiv = document.createElement('div');
    absenceDateDiv.className = 'mb-3';
  
    const absenceDateLabel = document.createElement('label');
    absenceDateLabel.htmlFor = 'absenceDate';
    absenceDateLabel.className = 'form-label';
    absenceDateLabel.textContent = 'Date de l\'absence';
  
    const absenceDateInput = document.createElement('input');
    absenceDateInput.type = 'date';
    absenceDateInput.className = 'form-control';
    absenceDateInput.id = 'absenceDate';
    absenceDateInput.placeholder = 'JJ-MM-AAAA';
  
    absenceDateDiv.appendChild(absenceDateLabel);
    absenceDateDiv.appendChild(absenceDateInput);
    absenceCreationForm.appendChild(absenceDateDiv);
  
    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'd-grid gap-4 d-md-flex justify-content-md-end';
  
    const saveButton = document.createElement('button');
    saveButton.type = 'button';
    saveButton.id = 'saveAbsenceButton';
    saveButton.className = 'btn btn-primary saveAbsenceButton';
    saveButton.textContent = 'Sauvegarder';
  
    buttonsDiv.appendChild(saveButton);
    absenceCreationForm.appendChild(buttonsDiv);
  
    formContainer.appendChild(absenceCreationForm);
  
    document.getElementById("main").append(absenceTitleButton, formContainer);
  }

  export function createAbsenceEditForm(learnerName) {
    const absenceTitleButton = document.createElement('div');
    absenceTitleButton.className = 'absenceTitleButton';
  
    const formHeader = document.createElement('div');
    formHeader.className = 'formHeader';
  
    const title = document.createElement('h3');
    title.textContent = `Édition d'une absence de ${learnerName}`;
  
    const description = document.createElement('p');
    description.textContent = 'les changements appliqués sont définitifs';
  
    formHeader.appendChild(title);
    formHeader.appendChild(description);
    absenceTitleButton.appendChild(formHeader);
  
    const formContainer = document.createElement('div');
  
    const absenceEditForm = document.createElement('form');
    absenceEditForm.className = 'absenceCreationForm';
  
    const learnerAbsenceDiv = document.createElement('div');
    learnerAbsenceDiv.className = 'mb-3';
  
    const learnerAbsenceLabel = document.createElement('label');
    learnerAbsenceLabel.htmlFor = 'LearnerAbsence';
    learnerAbsenceLabel.className = 'form-label';
    learnerAbsenceLabel.textContent = 'Apprenant concerné';
  
    const learnerAbsenceSelect = document.createElement('select');
    learnerAbsenceSelect.className = 'form-select';
    learnerAbsenceSelect.id = 'LearnerAbsence';
    learnerAbsenceSelect.ariaLabel = 'LearnerAbsence';
  
    const selectedOption = document.createElement('option');
    selectedOption.selected = true;
    selectedOption.textContent = learnerName;
  
    const option1 = document.createElement('option');
    option1.value = '1';
    option1.textContent = 'Example';
  
    const option2 = document.createElement('option');
    option2.value = '2';
    option2.textContent = 'Example';
  
    const option3 = document.createElement('option');
    option3.value = '3';
    option3.textContent = 'Example';
  
    learnerAbsenceSelect.appendChild(selectedOption);
    learnerAbsenceSelect.appendChild(option1);
    learnerAbsenceSelect.appendChild(option2);
    learnerAbsenceSelect.appendChild(option3);
  
    learnerAbsenceDiv.appendChild(learnerAbsenceLabel);
    learnerAbsenceDiv.appendChild(learnerAbsenceSelect);
    absenceEditForm.appendChild(learnerAbsenceDiv);
  
    const absenceDateDiv = document.createElement('div');
    absenceDateDiv.className = 'mb-3';
  
    const absenceDateLabel = document.createElement('label');
    absenceDateLabel.htmlFor = 'absenceDate';
    absenceDateLabel.className = 'form-label';
    absenceDateLabel.textContent = 'Date de l\'absence';
  
    const absenceDateInput = document.createElement('input');
    absenceDateInput.type = 'date';
    absenceDateInput.className = 'form-control';
    absenceDateInput.id = 'absenceDate';
    absenceDateInput.placeholder = 'JJ-MM-AAAA';
  
    absenceDateDiv.appendChild(absenceDateLabel);
    absenceDateDiv.appendChild(absenceDateInput);
    absenceEditForm.appendChild(absenceDateDiv);
  
    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'd-grid gap-4 d-md-flex justify-content-md-end';
  
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.id = 'deleteAbsenceButton';
    deleteButton.className = 'btn btn-danger deleteAbsenceButton';
    deleteButton.textContent = 'Supprimer';
  
    const saveButton = document.createElement('button');
    saveButton.type = 'button';
    saveButton.id = 'saveAbsenceButton';
    saveButton.className = 'btn btn-primary saveAbsenceButton';
    saveButton.textContent = 'Sauvegarder';
  
    buttonsDiv.appendChild(deleteButton);
    buttonsDiv.appendChild(saveButton);
    absenceEditForm.appendChild(buttonsDiv);
  
    formContainer.appendChild(absenceEditForm);
  
    document.getElementById("main").append(absenceTitleButton, formContainer);
  }

////////////////////////////// Fin du General Content //////////////////////////////

export function createTableRow(
  lastName,
  firstName,
  email,
  activeAccount,
  role
) {
  const row = document.createElement("tr");

  const checkboxTd = document.createElement("td");
  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  checkboxTd.appendChild(checkboxInput);
  row.appendChild(checkboxTd);

  const lastNameTd = document.createElement("td");
  lastNameTd.id = "lastName";
  lastNameTd.textContent = lastName;
  row.appendChild(lastNameTd);

  const firstNameTd = document.createElement("td");
  firstNameTd.id = "firstName";
  firstNameTd.textContent = firstName;
  row.appendChild(firstNameTd);

  const emailTd = document.createElement("td");
  emailTd.id = "email";
  emailTd.textContent = email;
  row.appendChild(emailTd);

  const activeAccountTd = document.createElement("td");
  activeAccountTd.id = "activeAccount";
  activeAccountTd.textContent = activeAccount;
  row.appendChild(activeAccountTd);

  const roleTd = document.createElement("td");
  roleTd.id = "role";
  roleTd.textContent = role;
  row.appendChild(roleTd);

  const editTd = document.createElement("td");
  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.className = "tableButtons";
  editButton.textContent = "Éditer";
  editTd.appendChild(editButton);
  row.appendChild(editTd);

  const deleteTd = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "tableButtons";
  deleteButton.textContent = "Supprimer";
  deleteTd.appendChild(deleteButton);
  row.appendChild(deleteTd);

  document.getElementById("main").append(row);
}

/////////////////////// Fin des lignes génériques du General Content ///////////////////////
