<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('comment');
   // return view('product');
});


Route::controller('api', 'ApiController');

/*Route::get('/api', 'ApiController@index');

Route::post('/api', 'ApiController@aa');*/
