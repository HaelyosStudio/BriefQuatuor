const base_url = 'http://localhost/~david/brief_quatuor/BriefQuatuor/'

export function fetchFormEmail() {
    const connectEmail = document.querySelector('#connectEmail');

    const emailValue = connectEmail.value;

    const formData = {
        email: emailValue
    };

    fetch(base_url + 'checkmail', {
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
}