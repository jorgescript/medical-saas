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
      'role:admin'
    ],
  ], function () {

    Route::get('/primer-clinica', function () {
      return Inertia::render('clinic/firstClinic');
    })->name('first');

    Route::get('/', [ClinicController::class, 'index'])->name('list');
    Route::post('/', [ClinicController::class, 'store'])->name('store');
    Route::put('/{clinic}', [ClinicController::class, 'update'])->name('update');
    Route::put('/{clinic}/status', [ClinicController::class, 'updateStatus'])->name('update-status');

    /* Route::get('/', [ReferredController::class, 'index'])->name('home');
    Route::get('/crear', [ReferredController::class, 'createReferredView'])->name('create');
    Route::post('/crear', [ReferredController::class, 'store'])->name('store');
    Route::get('/codigos', [ReferredController::class, 'getAllReferred'])->name('codes');
    Route::post('/reenviar-email', [ReferredController::class, 'resendWelcomeEmail'])->name('send-welcome');
    Route::post('/activar-desactivar', [ReferredController::class, 'activeInactiveReferred'])->name('activar-desactivar');
    Route::post('/panel-referido', [ReferredController::class, 'activeInactiveReferred'])->name('panel-referido');
    Route::get('/referido/{code}', [ReferredController::class, 'getReferredInfo'])->name('getReferredInfo');
    Route::get('/grid/{code}', [ReferredController::class, 'getSubscriptionByReferred'])->name('catchCodeFromJsRequestGrid');
    Route::get('/grid/pyme/{code}', [ReferredController::class, 'getSubscriptionByReferredPyme'])->name('catchCodeFromJsRequestGridPyme');
    Route::get('/chart/{code}', [ReferredController::class, 'getNumberSubscriptionsByMonth'])->name('catchCodeFromJsRequestChart');
    Route::get('/chart/pyme/{code}', [ReferredController::class, 'catchCodeFromJsRequestChartPyme'])->name('catchCodeFromJsRequestChartPyme'); */
  });
});
