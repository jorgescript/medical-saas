<?php

use App\Http\Controllers\ClinicController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::name('clinics.')->group(function () {
  Route::group([
    'prefix' => 'clinicas',
    'middleware' => [
      'auth',
      'verified',
    ],
  ], function () {

    Route::get('/primer-clinica', function () {
      return Inertia::render('clinic/firstClinic');
    })->name('first');
  });
});
