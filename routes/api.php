<?php
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

Route::middleware('auth:api')->get('/user','AuthController@currentUser');

Route::post('/login', 'AuthController@login');
Route::middleware('auth:api')->post('/register', 'AuthController@register');
Route::middleware('auth:api')->post('/logout', 'AuthController@logout');

Route::middleware('auth:api')->get('/users', 'UserController@users');
Route::middleware('auth:api')->get('/user/delete/{id}', 'UserController@deleteUser');


