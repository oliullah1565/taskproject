<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group(['middleware' => 'auth:sanctum'], function(){
    //All secure URL's
    Route::get("user",function(Request $request){ return $request->user(); });
    Route::get("logout",[UserController::class,'logout']);

    
});
Route::get("product",[ProductController::class,'index']);
Route::post("product",[ProductController::class,'store']);
Route::post("productdetails/{id}",[ProductController::class,'show']);

Route::post("login",[UserController::class,'login']);
Route::post("register",[UserController::class,'register']);

Route::get("check",function(){ return 'Dipankar'; });