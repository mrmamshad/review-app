<?php


use App\Http\Controllers\CatagoryController;
use App\Http\Controllers\SearchController;
use Illuminate\Support\Facades\Route;



Route::get('/categories', [CatagoryController::class, 'index']);
