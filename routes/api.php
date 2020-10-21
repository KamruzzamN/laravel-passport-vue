<?php
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

Route::namespace('API')->group(function(){
    //fetch request user
    Route::get('/user','AuthController@user');
    //login logout, register route
    Route::post('/login', 'AuthController@login');
    Route::post('/register', 'AuthController@register');
    Route::post('/logout', 'AuthController@logout');
});


Route::middleware('auth:api')->get('/users', 'UserController@users');
Route::middleware('auth:api')->get('/user/delete/{id}', 'UserController@deleteUser');


