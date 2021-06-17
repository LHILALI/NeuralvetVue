<?php

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', 'AuthController@login');
Route::post('logout', 'AuthController@logout')->middleware('auth:sanctum');

//User Methods and Get Messages
Route::get('getusers','UserController@getAllUsers');
Route::put('changepassword/{id}','UserController@ChangePassword');
Route::get('getmessages/{id}','MessagesController@getReceivedMessages');
Route::get('getsentmessages/{id}','MessagesController@getSentMessages');
Route::get('getmessage/{id}','MessagesController@getMessage');
Route::get('countmessages/{id}','MessagesController@countMessages');
Route::post('sendmessage','MessagesController@sendMessage');