
export function createForm1() {
    const formContainer = document.createElement('div');
    formContainer.className = 'registrationForm1';
  
    const formHeader = document.createElement('div');
    formHeader.className = 'formHeader';
  
    const formHeaderText = document.createElement('h1');
    formHeaderText.textContent = 'Bienvenue';
  
    formHeader.appendChild(formHeaderText);
    formContainer.appendChild(formHeader);
  
    const form = document.createElement('form');
    form.className = 'formInputs';
  
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'connectEmail');
    emailLabel.textContent = 'Email *';
  
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.className = 'form-control';
    emailInput.id = 'connectEmail';
    emailInput.placeholder = "Entrez votre mot de passe";
    emailInput.required = true;
  
    const emailDiv = document.createElement('div');
    emailDiv.className = 'formItem';
    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);
  
    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.className = 'btn btn-primary';
    submitButton.textContent = 'Connexion';
  
    form.appendChild(emailDiv);
    form.appendChild(submitButton);
  
    formContainer.appendChild(form);
  
    return formContainer;
  }
  
  export function createForm2() {
    const formContainer = document.createElement('div');
    formContainer.className = 'registrationForm2 disabled';
  
    const formHeader = document.createElement('div');
    formHeader.className = 'formHeader';
  
    const formHeaderText = document.createElement('h1');
    formHeaderText.textContent = 'Bienvenue';
  
    const formHeaderPara = document.createElement('p');
    formHeaderPara.textContent = "Pour clôturer votre inscription et créer votre compte, veuillez choisir un mot de passe.";
  
    formHeader.appendChild(formHeaderText);
    formHeader.appendChild(formHeaderPara);
    formContainer.appendChild(formHeader);
  
    const form = document.createElement('form');
    form.className = 'formInputs';
    form.method = 'POST';
  
    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'registrationPassword');
    passwordLabel.textContent = 'Mot de passe *';
  
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.className = 'form-control';
    passwordInput.id = 'registrationPassword';
    passwordInput.placeholder = "Entrez votre mot de passe";
    passwordInput.required = true;
  
    const passwordDiv = document.createElement('div');
    passwordDiv.className = 'formItem';
    passwordDiv.appendChild(passwordLabel);
    passwordDiv.appendChild(passwordInput);
  
    const confirmPasswordLabel = document.createElement('label');
    confirmPasswordLabel.setAttribute('for', 'registrationConfirmPassword');
    confirmPasswordLabel.textContent = 'Confirmez mot de passe *';
  
    const confirmPasswordInput = document.createElement('input');
    confirmPasswordInput.type = 'password';
    confirmPasswordInput.className = 'form-control';
    confirmPasswordInput.id = 'registrationConfirmPassword';
    confirmPasswordInput.placeholder = "Confirmez le mot de passe";
    confirmPasswordInput.required = true;
  
    const confirmPasswordDiv = document.createElement('div');
    confirmPasswordDiv.className = 'formItem';
    confirmPasswordDiv.appendChild(confirmPasswordLabel);
    confirmPasswordDiv.appendChild(confirmPasswordInput);
  
    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.className = 'btn btn-primary';
    submitButton.textContent = 'Sauvegarder';
  
    form.appendChild(passwordDiv);
    form.appendChild(confirmPasswordDiv);
    form.appendChild(submitButton);
  
    formContainer.appendChild(form);
  
    return formContainer;
  }
  
  export function createForm3() {
    const formContainer = document.createElement('div');
    formContainer.className = 'registrationForm3 disabled';
  
    const formHeader = document.createElement('div');
    formHeader.className = 'formHeader';
  
    const formHeaderText = document.createElement('h1');
    formHeaderText.textContent = 'Bienvenue';
  
    formHeader.appendChild(formHeaderText);
    formContainer.appendChild(formHeader);
  
    const form = document.createElement('form');
    form.className = 'formInputs';
    form.method = 'POST';
  
    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'connectPassword');
    passwordLabel.textContent = 'Mot de passe *';
  
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.className = 'form-control';
    passwordInput.id = 'connectPassword';
    passwordInput.placeholder = "Entrez votre mot de passe";
    passwordInput.required = true;
  
    const passwordDiv = document.createElement('div');
    passwordDiv.className = 'formItem';
    passwordDiv.appendChild(passwordLabel);
    passwordDiv.appendChild(passwordInput);
  
    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.className = 'btn btn-primary';
    submitButton.textContent = 'Connexion';
  
    form.appendChild(passwordDiv);
    form.appendChild(submitButton);
  
    formContainer.appendChild(form);
  
    return formContainer;
  }
  