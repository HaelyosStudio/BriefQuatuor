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

<!-- <div class="promoTitleButton">
        <h3>Création d'une promotion</h3>
    </div>
    <div>
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
    </div> -->

<!-- <div class="promoTitleButton">
        <div class="formHeader">
            <h3>Édition de la promotion NOMDEPROMO</h3>
            <p>les changements appliqués sont définitifs</p>
        </div>
    </div>
    <div>
        <form class="promoCreationForm">
            <div class="mb-3">
                <label for="PromoName" class="form-label">Nom de la promotion</label>
                <input type="text" class="form-control" id="PromoName" placeholder="...">
            </div>
            <div class="mb-3">
                <label for="PromoStartDate" class="form-label">Date de début</label>
                <input type="date" class="form-control" id="PromoStartDate" placeholder="JJ/MM/AAAA">
            </div>
            <div class="mb-3">
                <label for="PromoEndDate" class="form-label">Date de fin</label>
                <input type="date" class="form-control" id="PromoEndDate" placeholder="JJ/MM/AAAA">
            </div>
            <div class="mb-3">
                <label for="PromoPlaces" class="form-label">Place(s) disponible(s)</label>
                <input type="number" class="form-control" id="PromoPlaces" max="20" placeholder="...">
            </div>
            <div class="d-grid gap-4 d-md-flex justify-content-md-end">
                <button type="button" id="savePromoButton" class="btn btn-danger savePromoButton">Supprimer</button>
                <button type="button" id="savePromoButton" class="btn btn-primary savePromoButton">Sauvegarder</button>
            </div>
        </form>
    </div> -->

<!-- <div class="userTitleButton">
        <div class="formHeader">
            <h3>Création d'un apprenant</h3>
        </div>
    </div>
    <div>
        <form class="learnerCreationForm">
            <div class="mb-3">
                <label for="newLearnerLastName" class="form-label">Nom</label>
                <input type="text" class="form-control" id="newLearnerLastName" placeholder="...">
            </div>
            <div class="mb-3">
                <label for="newLearnerFirstName" class="form-label">Prénom</label>
                <input type="text" class="form-control" id="newLearnerFirstName" placeholder="...">
            </div>
            <div class="mb-3">
                <label for="newLearnerEmail" class="form-label">Adresse email</label>
                <input type="email" class="form-control" id="newLearnerEmail" placeholder="...">
            </div>
            <div class="mb-3">
                <label for="newLearnerPassword" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="newLearnerPassword" placeholder="">
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="activeAccountCheck">
                <label class="form-check-label" for="activeAccountCheck">
                    Compte activé
                </label>
            </div>

            <div class="d-grid gap-4 d-md-flex justify-content-md-end">
                <button type="button" id="deleteLearnerButton" class="btn btn-danger deleteLearnerButton">Supprimer</button>
                <button type="button" id="saveLearnerButton" class="btn btn-primary saveLearnerButton">Sauvegarder</button>
            </div>
        </form>
    </div> -->

    <!-- <div class="userTitleButton">
        <div class="formHeader">
            <h3>Édition de l'apprenant NOMDEL'APPRENANT</h3>
            <p>les changements appliqués sont définitifs</p>
        </div>
    </div>
    <div>
        <form class="learnerCreationForm">
            <div class="mb-3">
                <label for="LearnerLastName" class="form-label">Nom</label>
                <input type="text" class="form-control" id="LearnerLastName" placeholder="nom">
            </div>
            <div class="mb-3">
                <label for="LearnerFirstName" class="form-label">Prénom</label>
                <input type="text" class="form-control" id="LearnerFirstName" placeholder="prénom">
            </div>
            <div class="mb-3">
                <label for="LearnerEmail" class="form-label">Adresse email</label>
                <input type="email" class="form-control" id="LearnerEmail" placeholder="nom.prénom@email.com">
            </div>
            <div class="mb-3">
                <label for="LearnerPassword" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="LearnerPassword" placeholder="*****">
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="activeAccountCheck">
                <label class="form-check-label" for="activeAccountCheck">
                    Compte activé
                </label>
            </div>

            <div class="d-grid gap-4 d-md-flex justify-content-md-end">
                <button type="button" id="deleteLearnerButton" class="btn btn-danger deleteLearnerButton">Supprimer</button>
                <button type="button" id="saveLearnerButton" class="btn btn-primary saveLearnerButton">Sauvegarder</button>
            </div>
        </form>
    </div> -->

    <!-- <div class="delayTitleButton">
        <div class="formHeader">
            <h3>Création d'un retard</h3>
        </div>
    </div>
    <div>
        <form class="delayCreationForm">
            <div class="mb-3">
                <label for="LearnerDelay" class="form-label">Apprenant concerné</label>
                <select class="form-select" aria-label="LearnerDelay" id="LearnerDelay">
                <option selected>Selectionner un apprenant</option>
                <option value="1">Example</option>
                <option value="2">Example</option>
                <option value="3">Example</option>
            </select>
            </div>
            <div class="mb-3">
                <label for="delayDate" class="form-label">Date du retard</label>
                <input type="date" class="form-control" id="delayDate" placeholder="JJ-MM-AAAA">
            </div>
            <div class="d-grid gap-4 d-md-flex justify-content-md-end">
                <button type="button" id="deleteDelayButton" class="btn btn-danger deleteDelayButton">Supprimer</button>
                <button type="button" id="saveDelayButton" class="btn btn-primary saveDelayButton">Sauvegarder</button>
            </div>
        </form>
    </div> -->
<!-- fin de la création du retard -->
    <!-- <div class="delayTitleButton">
        <div class="formHeader">
            <h3>Édition du retard de NOMDEL'APPRENANT</h3>
            <p>les changements appliqués sont définitifs</p>
        </div>
    </div>
    <div>
        <form class="delayCreationForm">
            <div class="mb-3">
                <label for="LearnerDelay" class="form-label">Apprenant concerné</label>
                <select class="form-select" aria-label="LearnerDelay" id="LearnerDelay">
                <option selected>Selectionner un apprenant</option>
                <option value="1">Example</option>
                <option value="2">Example</option>
                <option value="3">Example</option>
            </select>
            </div>
            <div class="mb-3">
                <label for="delayDate" class="form-label">Date du retard</label>
                <input type="date" class="form-control" id="delayDate" placeholder="JJ-MM-AAAA">
            </div>
            <div class="d-grid gap-4 d-md-flex justify-content-md-end">
                <button type="button" id="deleteDelayButton" class="btn btn-danger deleteDelayButton">Supprimer</button>
                <button type="button" id="saveDelayButton" class="btn btn-primary saveDelayButton">Sauvegarder</button>
            </div>
        </form>
    </div> -->
    <!-- fin de l'édition du retard -->

    <!-- <div class="absenceTitleButton">
        <div class="formHeader">
            <h3>Création d'une absence</h3>
        </div>
    </div>
    <div>
        <form class="absenceCreationForm">
            <div class="mb-3">
                <label for="LearnerAbsence" class="form-label">Apprenant concerné</label>
                <select class="form-select" aria-label="LearnerAbsence" id="LearnerAbsence">
                <option selected>Selectionner un apprenant</option>
                <option value="1">Example</option>
                <option value="2">Example</option>
                <option value="3">Example</option>
            </select>
            </div>
            <div class="mb-3">
                <label for="absenceDate" class="form-label">Date de l'absence</label>
                <input type="date" class="form-control" id="absenceDate" placeholder="JJ-MM-AAAA">
            </div>
            <div class="d-grid gap-4 d-md-flex justify-content-md-end">
                <button type="button" id="deleteAbsenceButton" class="btn btn-danger deleteAbsenceButton">Supprimer</button>
                <button type="button" id="saveAbsenceButton" class="btn btn-primary saveAbsenceButton">Sauvegarder</button>
            </div>
        </form>
    </div> -->
<!-- fin de la création de l'absence -->
<!-- <div class="absenceTitleButton">
        <div class="formHeader">
            <h3>Édition d'une absence de NOMDEL'APPRENANT</h3>
            <p>les changements appliqués sont définitifs</p>
        </div>
    </div>
    <div>
        <form class="absenceCreationForm">
            <div class="mb-3">
                <label for="LearnerAbsence" class="form-label">Apprenant concerné</label>
                <select class="form-select" aria-label="LearnerAbsence" id="LearnerAbsence">
                <option selected>NOMDEL'APPRENANT</option>
                <option value="1">Example</option>
                <option value="2">Example</option>
                <option value="3">Example</option>
            </select>
            </div>
            <div class="mb-3">
                <label for="absenceDate" class="form-label">Date de l'absence</label>
                <input type="date" class="form-control" id="absenceDate" placeholder="JJ-MM-AAAA">
            </div>
            <div class="d-grid gap-4 d-md-flex justify-content-md-end">
                <button type="button" id="deleteAbsenceButton" class="btn btn-danger deleteAbsenceButton">Supprimer</button>
                <button type="button" id="saveAbsenceButton" class="btn btn-primary saveAbsenceButton">Sauvegarder</button>
            </div>
        </form>
    </div> -->
    <!-- fin de l'édition de l'absence -->

    <!-- <div class="userTitleButton">
        <div class="formHeader">
            <h3>Création d'un utilisateur</h3>
        </div>
    </div>
    <div>
        <form class="userCreationForm">
            <div class="mb-3">
                <label for="newUserLastName" class="form-label">Nom</label>
                <input type="text" class="form-control" id="newUserLastName" placeholder="...">
            </div>
            <div class="mb-3">
                <label for="newUserFirstName" class="form-label">Prénom</label>
                <input type="text" class="form-control" id="newUserFirstName" placeholder="...">
            </div>
            <div class="mb-3">
                <label for="newUserEmail" class="form-label">Adresse email</label>
                <input type="email" class="form-control" id="newUserEmail" placeholder="...">
            </div>
            <div class="mb-3">
                <label for="newUserRole" class="form-label">Rôle</label>
                <select class="form-select" aria-label="newUserRole">
                    <option selected>Selectionner un rôle</option>
                    <option value="Formateur">Formateur-rice</option>
                    <option value="Campus_manager">Campus Manager</option>
                    <option value="Apprenant">Apprenant-e</option>
                    <option value="Responsable_pedagogique">Responsable pédagogique</option>
                    <option value="Delegue">Délégué-e</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="form-check-label" for="promoLink">Promotion(s)</label>
                <select class="form-select" id="promoLink" data-placeholder="Selectionner la/les promotion(s) de l’utilisateur" multiple>
                </select>
            </div>
            <div class="d-grid gap-4 d-md-flex justify-content-md-end">
                <button type="button" id="saveUserButton" class="btn btn-primary saveUserButton">Sauvegarder</button>
            </div>
        </form>
    </div> -->
<!-- Fin du form création utilisateur -->
    <!-- <div class="userTitleButton">
        <div class="formHeader">
            <h3>Édition de l’utilisateur NOMDEL'APPRENANT</h3>
            <p>les changements appliqués sont définitifs</p>
        </div>
    </div>
    <div>
        <form class="userEditForm">
            <div class="mb-3">
                <label for="userLastName" class="form-label">Nom</label>
                <input type="text" class="form-control" id="userLastName" placeholder="...">
            </div>
            <div class="mb-3">
                <label for="userFirstName" class="form-label">Prénom</label>
                <input type="text" class="form-control" id="userFirstName" placeholder="...">
            </div>
            <div class="mb-3">
                <label for="userEmail" class="form-label">Adresse email</label>
                <input type="email" class="form-control" id="userEmail" placeholder="...">
            </div>
            <div class="mb-3">
                <label for="userRole" class="form-label">Rôle</label>
                <select class="form-select" aria-label="userRole">
                    <option selected>Selectionner un rôle</option>
                    <option value="Formateur">Formateur-rice</option>
                    <option value="Campus_manager">Campus Manager</option>
                    <option value="Apprenant">Apprenant-e</option>
                    <option value="Responsable_pedagogique">Responsable pédagogique</option>
                    <option value="Delegue">Délégué-e</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="form-check-label" for="promoLink">Promotion(s)</label>
                <select class="form-select" id="promoLink" data-placeholder="Selectionner la/les promotion(s) de l’utilisateur" multiple>
                </select>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="activeAccountCheck">
                <label class="form-check-label" for="activeAccountCheck">
                    Compte activé
                </label>
            </div>
            <div class="d-grid gap-4 d-md-flex justify-content-md-end">
                <button type="button" id="deleteUserButton" class="btn btn-danger deleteUserButton">Supprimer</button>
                <button type="button" id="saveUserButton" class="btn btn-primary saveUserButton">Sauvegarder</button>
            </div>
        </form>
    </div> -->
    <!-- Fin du form édition utilisateur -->