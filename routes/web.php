<?php

use App\Http\Controllers\CatagoryController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


Route::get('/', function ()
{
    if (Auth::check())
    {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }
    else
    {
        return redirect()->route('register');
    }
});

Route::middleware(['auth', 'verified'])->group(function ()
{
    Route::resource("/catagory", CatagoryController::class);
    Route::get('/topics/{topicName}', function ($topicName)
    {
        return inertia('TopicShow', ['topicName' => $topicName]);
    })->name('topic.show');
});




Route::get('/dashboard', function ()
{
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function ()
{
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

