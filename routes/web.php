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
Route::get('/home-data', 'ProductController@homePageProducts');



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

//add new product
Route::post('/add-new-product','ProductController@store');

//account page
Route::get('/my-account', 'AccountController@index');

//store account
Route::post('/my-account','AccountController@store');

Route::get('/my-account-information','AccountController@profileData');
//Change Password
Route::post('/my-account-password' , 'EditPasswordController@index');
//Edit Address
Route::post('/my-account-address','AccountController@address');

