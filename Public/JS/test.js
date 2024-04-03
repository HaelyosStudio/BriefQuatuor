const btn = document.querySelector('#btn-test');
const mail = document.querySelector('#mail');
const password = document.querySelector('#password');

btn.addEventListener('click', () => {
    const mailValue = mail.value;
    const passwordValue = password.value;

    const formData = {
        mail: mailValue,
        password: passwordValue
    };

    fetch('http://localhost/~david/brief_quatuor/BriefQuatuor/checkmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Erreur de réseau : " + response.status);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("Erreur lors de la requête :", error);
    });
});
