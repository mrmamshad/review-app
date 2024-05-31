<?php

namespace App\Http\Controllers;
use App\Http\Controllers\CombinedController;
use App\Http\Controllers\ItemsController;
use App\Http\Controllers\CatagoryController; // Corrected from CatagoryController
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SearchController; // Added this import
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

Route::get('/', function () {
    if (Auth::check()) {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    } else {
        return redirect()->route('register');
    }
});


Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource("/catagory", CatagoryController::class);


    Route::get('/topics/{topicId}/{topicName}', function ($topicId, $topicName) {
        return Inertia::render('TopicShow', [
            'topicId' => $topicId,
            'topicName' => $topicName
        ]);
    })->name('topic.show');

    Route::get('/topics/{topicId}/{topicName}', [ItemsController::class, 'index']);
    Route::get('/items/{itemid}/{topicTitle}', [ItemsController::class, 'show']);

    Route::get('/', [CombinedController::class, 'showSearch']);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
