const base_url = 'http://briefquatuor/'

export function fetchFormEmail() { // 3 RESPONSES //
    const connectEmail = document.querySelector('#connectEmail');

    const emailValue = connectEmail.value;

    const formData = {
        email: emailValue
    };

    // Select the container where the alert will be inserted
    const alertContainer = document.querySelector(".alertContainer");

    fetch(base_url + 'checkmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("A network error occurred: " + response.status + ". Please try again later.");
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        let alertMessage = '';
        let alertType = '';
        if (data.email_exists === false) {
            // email not in database
            console.log('Email not found in the database');
            alertMessage = 'Email not found in the database. Please check your email and try again.';
            alertType = 'danger';
        } else if (data.email_exists === true && data.active === false) {
            // email in database but not active
            console.log('The account associated with this email exists but is not active');
            alertMessage = 'The account associated with this email exists but is not active. Please activate your account to proceed.';
            alertType = 'warning';
        } else if (data.email_exists === true && data.active === true) {
            // email in database and active
            console.log('The account associated with this email exists and is active');
            alertMessage = 'The account associated with this email exists and is active. You can now log in.';
            alertType = 'success';
        }

        // Create the Bootstrap alert
        const alert = document.createElement('div');
        alert.className = `alert alert-${alertType} d-flex align-items-center`;
        alert.role = 'alert';
        alert.innerHTML = `
          <div>
            ${alertMessage}
          </div>
        `;

        // Insert the alert into the container
        alertContainer.innerHTML = '';
        alertContainer.appendChild(alert);
    })
    .catch((error) => {
        console.error("An error occurred while making the request: ", error);

        // Create the Bootstrap alert
        const alert = document.createElement('div');
        alert.className = 'alert alert-danger d-flex align-items-center';
        alert.role = 'alert';
        alert.innerHTML = `
          <div>
            An error occurred while making the request. Please check your network connection and try again.
          </div>
        `;

        // Insert the alert into the container
        alertContainer.innerHTML = '';
        alertContainer.appendChild(alert);
    });
}
