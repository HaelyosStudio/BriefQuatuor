<?php
require_once __DIR__ . '/./Includes/header.php';
?>
<main id="main">

    <section class="generalContent">
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="btn btn-primary" type="button">Retour</button>
                <button class="nav-link active" id="nav-info-tab" data-bs-toggle="tab" data-bs-target="#nav-info"
                    type="button" role="tab" aria-controls="nav-info" aria-selected="true">Informations
                    générales</button>
                <button class="nav-link" id="nav-retard-tab" data-bs-toggle="tab" data-bs-target="#nav-retard"
                    type="button" role="tab" aria-controls="nav-retard" aria-selected="false">Retards</button>
                <button class="nav-link" id="nav-absence-tab" data-bs-toggle="tab" data-bs-target="#nav-absence"
                    type="button" role="tab" aria-controls="nav-absence" aria-selected="false">Absences</button>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-info" role="tabpanel" aria-labelledby="nav-info-tab"
                tabindex="0">
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
                        <!-- <tr>
                            <th scope="row"><input type="checkbox"></th>
                            <td id="lastName">Dupont</td>
                            <td id="firstName">Jean</td>
                            <td id="email">jean.dupont@example.com</td>
                            <td id="activeAccount">Oui</td>
                            <td id="role">Formateur</td>
                            <td><button type="button" class="tableButtons">Éditer</button></td>
                            <td><button type="button" class="tableButtons">Supprimer</button></td>
                        </tr> -->
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
                        <!-- <tr>
                            <th scope="row"><input type="checkbox"></th>
                            <td id="lastName">Dupont</td>
                            <td id="firstName">Jean</td>
                            <td id="email">jean.dupont@example.com</td>
                            <td id="activeAccount">Oui</td>
                            <td id="role">Formateur</td>
                            <td><button type="button" class="tableButtons">Éditer</button></td>
                            <td><button type="button" class="tableButtons">Supprimer</button></td>
                        </tr> -->
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
                        <!-- <tr>
                            <th scope="row"><input type="checkbox"></th>
                            <td id="lastName">Dupont</td>
                            <td id="firstName">Jean</td>
                            <td id="email">jean.dupont@example.com</td>
                            <td id="activeAccount">Oui</td>
                            <td id="role">Formateur</td>
                            <td><button type="button" class="tableButtons">Éditer</button></td>
                            <td><button type="button" class="tableButtons">Supprimer</button></td>
                        </tr> -->
                    </tbody>
                </table>
            </div>
        </div>
    </section>

</main>
<?php
require_once __DIR__ . '/./Includes/footer.php';