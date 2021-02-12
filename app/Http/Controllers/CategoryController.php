<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class CategoryController extends Controller
{
    /**
     * 3 Levels nested Categories
     * @return mixed
     */
    public function getCategories(){
        return Category::where('parent_id', 0)->with('subCategories.subCategories')->get();
//        return Category::with('subCategories.subCategories')->get();

    }
}
