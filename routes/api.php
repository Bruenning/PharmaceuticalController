<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\MedicineController;


Route::name('api.')->group(function () {
    Route::apiResource('medicine', MedicineController::class);
});
