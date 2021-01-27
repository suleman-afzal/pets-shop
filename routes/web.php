<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/register', function () {});
Route::get('/home', function () {
    return view('user.index');
});

/** Categories Routes */
Route::get('/categories', 'CategoryController@getCategories');
Route::post('/all-categories', 'CategoryController@getCategories');


/** Product Routes*/
Route::post('/add-product', 'ProductController@store');



Route::get('/add-product', function () {
    return view('user.index');
});
Route::get('/', function () {
//dd(route('register'));
      //  return view('auth.login');
        return view('user.index');
  //      return view('user.indphpex');
        //return view('layouts.user');
    //    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
