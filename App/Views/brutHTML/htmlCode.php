<!-- <section class="mainContent">
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Accueil</button>
                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Promotions</button>
                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Utilisateurs</button>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active mainContainer" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                <h3>Cours du jour</h3>
                <div class="courseContainer">
                    <div class="courseInfos">
                        <div class="leftInfos">
                            <h2>DWWM3</h2>
                            <p>15 Participants</p>
                        </div>
                        <p class="bold">01-01-2024</p>
                    </div>
                    <div class="presenceButton">
                        <button class="btn btn-primary">Valider présence</button>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                <div class="promoTitleButton">
                    <div class="leftInfos">
                        <h3>Toutes les promotions</h3>
                        <p>tableau des promotions de Simplon</p>
                    </div>
                    <button class="btn btn-success">Ajouter promotion</button>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col"><input type="checkbox" id="selectAll"></th>
                            <th scope="col">Promotion</th>
                            <th scope="col">Début</th>
                            <th scope="col">Fin</th>
                            <th scope="col">Places</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                            <th scope="row"><input type="checkbox"></th>
                            <td id="promoName">Promotion 1</td>
                            <td id="startDate">01/01/2023</td>
                            <td id="endDate">31/12/2023</td>
                            <td id="places">10</td>
                            <td><button type="button" class="tableButtons">Voir</button></td>
                            <td><button type="button" class="tableButtons">Éditer</button></td>
                            <td><button type="button" class="tableButtons">Supprimer</button></td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="checkbox"></th>
                            <td id="promoName">Promotion 2</td>
                            <td id="startDate">01/01/2024</td>
                            <td id="endDate">31/12/2024</td>
                            <td id="places">20</td>
                            <td><button type="button" class="tableButtons">Voir</button></td>
                            <td><button type="button" class="tableButtons">Éditer</button></td>
                            <td><button type="button" class="tableButtons">Supprimer</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                <div class="userTitleButton">
                    <div class="leftInfos">
                        <h3>Utilisateurs</h3>
                        <p>tableau des utilisateurs de Simplon</p>
                    </div>
                    <button class="btn btn-success">Ajouter un utilisateur</button>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col"><input type="checkbox" id="selectAll"></th>
                            <th scope="col">Nom de famille</th>
                            <th scope="col">Prénom</th>
                            <th scope="col">Mail</th>
                            <th scope="col">Compte activé</th>
                            <th scope="col">Rôle</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                            <th scope="row"><input type="checkbox"></th>
                            <td id="lastName">Dupont</td>
                            <td id="firstName">Jean</td>
                            <td id="email">jean.dupont@example.com</td>
                            <td id="activeAccount">Oui</td>
                            <td id="role">Formateur</td>
                            <td><button type="button" class="tableButtons">Éditer</button></td>
                            <td><button type="button" class="tableButtons">Supprimer</button></td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="checkbox"></th>
                            <td id="lastName">Durand</td>
                            <td id="firstName">Pierre</td>
                            <td id="email">pierre.durand@example.com</td>
                            <td id="activeAccount">Non</td>
                            <td id="role">Utilisateur</td>
                            <td><button type="button" class="tableButtons">Éditer</button></td>
                            <td><button type="button" class="tableButtons">Supprimer</button></td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
        </div>
    </section> -->

<!-- Fin de la section mainContent -->

<!-- <div class="registrationForm1 disabled">
    <div class="formHeader">
        <h1>Bienvenue</h1>
    </div>
    <form class="formInputs">
        <div class="formItem">
            <label for="connectEmail">Email *</label>
            <input type="email" class="form-control" id="connectEmail" placeholder="Entrez votre mot de passe" required>
        </div>
        <button type="button" class="btn btn-primary">Connexion</button>
    </form>
</div> -->

<!-- Fin du form 1 -->

<!-- <div class="registrationForm2 disabled">
    <div class="formHeader">
        <h1>Bienvenue</h1>
        <p>Pour clôturer votre inscription et créer votre compte, veuillez choisir un mot de passe.</p>
    </div>
    <form class="formInputs" method="POST">
        <div class="formItem">
            <label for="registrationPassword">Mot de passe *</label>
            <input type="password" class="form-control" id="registrationPassword" placeholder="Entrez votre mot de passe" required>
        </div>
        <div class="formItem">
            <label for="registrationConfirmPassword">Confirmez mot de passe *</label>
            <input type="password" class="form-control" id="registrationConfirmPassword" placeholder="Confirmez le mot de passe" required>
        </div>
        <button type="button" class="btn btn-primary">Sauvegarder</button>
    </form>
</div> -->

<!-- Fin du form 2 -->

<!-- <div class="registrationForm3 disabled">
    <div class="formHeader">
        <h1>Bienvenue</h1>
    </div>
    <form class="formInputs" method="POST">
        <div class="formItem">
            <label for="connectPassword">Mot de passe *</label>
            <input type="password" class="form-control" id="connectPassword" placeholder="Entrez votre mot de passe" required>
        </div>
        <button type="button" class="btn btn-primary">Connexion</button>
    </form>
</div> -->

<!-- Fin du form 3 -->


<!-- <section class="generalContent">
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="btn btn-primary" type="button">Retour</button>
                <button class="nav-link active" id="nav-info-tab" data-bs-toggle="tab" data-bs-target="#nav-info" type="button" role="tab" aria-controls="nav-info" aria-selected="true">Informations générales</button>
                <button class="nav-link" id="nav-retard-tab" data-bs-toggle="tab" data-bs-target="#nav-retard" type="button" role="tab" aria-controls="nav-retard" aria-selected="false">Retards</button>
                <button class="nav-link" id="nav-absence-tab" data-bs-toggle="tab" data-bs-target="#nav-absence" type="button" role="tab" aria-controls="nav-absence" aria-selected="false">Absences</button>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-info" role="tabpanel" aria-labelledby="nav-info-tab" tabindex="0">
                <div class="promoTitleButton">
                    <div class="leftInfos">
                        <h3>Promotion NOMDEPROMO</h3>
                        <p>informations générales de la promotion</p>
                    </div>
                    <button class="btn btn-success">Ajouter apprenant</button>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col"><input type="checkbox" id="selectAll"></th>
                            <th scope="col">Nom de famille</th>
                            <th scope="col">Prénom</th>
                            <th scope="col">Mail</th>
                            <th scope="col">Compte activé</th>
                            <th scope="col">Rôle</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                            <th scope="row"><input type="checkbox"></th>
                            <td id="lastName">Dupont</td>
                            <td id="firstName">Jean</td>
                            <td id="email">jean.dupont@example.com</td>
                            <td id="activeAccount">Oui</td>
                            <td id="role">Formateur</td>
                            <td><button type="button" class="tableButtons">Éditer</button></td>
                            <td><button type="button" class="tableButtons">Supprimer</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="tab-pane fade" id="nav-retard" role="tabpanel" aria-labelledby="nav-retard-tab" tabindex="0">
                <div class="promoTitleButton">
                    <div class="leftInfos">
                        <h3>Promotion NOMDEPROMO</h3>
                        <p>tableau des retards</p>
                    </div>
                    <button class="btn btn-success">Ajouter promotion</button>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col"><input type="checkbox" id="selectAll"></th>
                            <th scope="col">Nom de famille</th>
                            <th scope="col">Prénom</th>
                            <th scope="col">Mail</th>
                            <th scope="col">Compte activé</th>
                            <th scope="col">Rôle</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                            <th scope="row"><input type="checkbox"></th>
                            <td id="lastName">Dupont</td>
                            <td id="firstName">Jean</td>
                            <td id="email">jean.dupont@example.com</td>
                            <td id="activeAccount">Oui</td>
                            <td id="role">Formateur</td>
                            <td><button type="button" class="tableButtons">Éditer</button></td>
                            <td><button type="button" class="tableButtons">Supprimer</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="tab-pane fade" id="nav-absence" role="tabpanel" aria-labelledby="nav-absence-tab" tabindex="0">
                <div class="promoTitleButton">
                    <div class="leftInfos">
                        <h3>Promotion NOMDEPROMO</h3>
                        <p>tableau des absences</p>
                    </div>
                    <button class="btn btn-success">Ajouter promotion</button>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col"><input type="checkbox" id="selectAll"></th>
                            <th scope="col">Nom de famille</th>
                            <th scope="col">Prénom</th>
                            <th scope="col">Mail</th>
                            <th scope="col">Compte activé</th>
                            <th scope="col">Rôle</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                            <th scope="row"><input type="checkbox"></th>
                            <td id="lastName">Dupont</td>
                            <td id="firstName">Jean</td>
                            <td id="email">jean.dupont@example.com</td>
                            <td id="activeAccount">Oui</td>
                            <td id="role">Formateur</td>
                            <td><button type="button" class="tableButtons">Éditer</button></td>
                            <td><button type="button" class="tableButtons">Supprimer</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section> -->