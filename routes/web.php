<?php

use App\Models\Portfolio;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PortfolioController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get("/homepage", function(){

    $portfolios = Portfolio::all();

    return Inertia::render("HomePage" ,[
        'portfolios' => $portfolios,
    ]);
});

Route::get("/admin", function(){
    return Inertia::render("AdminPage");
})->middleware(['auth', 'verified']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/admin/portfolio/read', [PortfolioController::class, 'read']);
Route::post('/admin/portfolio/store', [PortfolioController::class, 'store'])->name('portfolio.store');

Route::resource('portfolio', PortfolioController::class);

require __DIR__.'/auth.php';
