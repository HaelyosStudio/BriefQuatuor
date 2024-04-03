<?php
require_once __DIR__ . '/./Includes/header.php';
?>
<main>
    <?php include_once __DIR__ . '/./Includes/registrationForms.php' ?>

    <section class="mainContent disabled">
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
                            <td>Promotion 1</td>
                            <td>01/01/2023</td>
                            <td>31/12/2023</td>
                            <td>10</td>
                            <td><button type="button" class="tableButtons">Voir</button></td>
                            <td><button type="button" class="tableButtons">Éditer</button></td>
                            <td><button type="button" class="tableButtons">Supprimer</button></td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="checkbox"></th>
                            <td>Promotion 2</td>
                            <td>01/01/2024</td>
                            <td>31/12/2024</td>
                            <td>20</td>
                            <td><button type="button" class="tableButtons">Voir</button></td>
                            <td><button type="button" class="tableButtons">Éditer</button></td>
                            <td><button type="button" class="tableButtons">Supprimer</button></td>
                        </tr>
                    </tbody>
                </table>


            </div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
            <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
        </div>
    </section>




</main>
<?php
require_once __DIR__ . '/./Includes/footer.php';
