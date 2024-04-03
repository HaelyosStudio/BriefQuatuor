<?php
require_once __DIR__ . '/./Includes/header.php';
?>
<main>

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
