<?php
require_once __DIR__ . '/./Includes/header.php';

?>
<main>
    <?php include_once __DIR__ . '/./Includes/registrationForms.php' ?>

    <section class="mainContent">
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                    type="button" role="tab" aria-controls="nav-home" aria-selected="true">Accueil</button>
                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                    type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Promotions</button>
                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
                    type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Utilisateurs</button>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active mainContainer" id="nav-home" role="tabpanel"
                aria-labelledby="nav-home-tab" tabindex="0">
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
                ...</div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                ...</div>
            <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab"
                tabindex="0">...</div>
        </div>
    </section>


    <section class="container">

        <div class="d-flex flex-column row justify-content-center col-md-6">
            <h1>Bienvenue</h1>
            <form action="">
                <div class="form-group">
                    <label for="mail">Email</label>
                    <input type="email" id="mail" name="mail" class="form-control" required />
                </div>
                <button type="button" class="btn btn-primary">Connexion</button>
            </form>

        </div>
    </section>

</main>
<?php
require_once __DIR__ . '/./Includes/footer.php';