<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function () {
    //return 'hello laravel api';
    return ['message' => 'Hello rlaravel Api'];
});
