<?php
// This trait is only functional with the same structure of the app
namespace App\Services;

trait Response
{
    /**
     * @param  string     $view
     * @param  array<string,mixed> | null $viewData
     * @return void
     */
    public function render(string $view, ?array $viewData = null): void
    {
        if (!empty($viewData)) {
            extract($viewData);
        }
        $viewFile = __DIR__ . "/../Views/$view.php";
        require_once $viewFile;
    }
}
