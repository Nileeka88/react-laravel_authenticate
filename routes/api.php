<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/sign-in', function () {
    //return 'hello laravel api';
    return ['message' => 'Hello laravel Api'];
});
