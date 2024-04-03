export function createForm1() {

  const formContainer = document.createElement("div");
  formContainer.className = "registrationForm1";

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
  emailInput.placeholder = "Entrez votre mot de passe";
  emailInput.required = true;

  const emailDiv = document.createElement("div");
  emailDiv.className = "formItem";
  emailDiv.appendChild(emailLabel);
  emailDiv.appendChild(emailInput);

  const submitButton = document.createElement("button");
  submitButton.type = "button";
  submitButton.className = "btn btn-primary";
  submitButton.textContent = "Connexion";

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

//////////////////////////////// Fin des lignes de promotion ////////////////////////////////

export function createUserRow(
  lastName,
  firstName,
  email,
  activeAccount,
  role
) {

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

////////////////////////////// Fin des lignes d'utilisateurs //////////////////////////////
