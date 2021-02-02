<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\ProductDetail;
use App\ProductImage;
//use App\Image;

class ProductController extends Controller
{
    public function store(Request $request){
       //dd($request->all());
        $newProduct = new Product;
        $newProduct->title = $request->input('title');
        $newProduct->slug = $newProduct->title.'-'.time();
        //$newProduct->slug = str_slug($newProduct->title,'-').'-'.time();
        $newProduct->category_id = $request->input('level2_category_id');
        $newProduct->user_id = 1;
        $newProduct->short_description = $request->input('description');
        $newProduct->price = $request->input('price');
        $newProduct->currency_id = 1;
        $newProduct->state = $request->input('state');
        $newProduct->city = $request->input('city');
        $newProduct->save();
        $id = $newProduct->id;

        //Insert in Product Details
        $productDetails = new ProductDetail;
        $productDetails->product_id = $id;
        $productDetails->user_id = 1;
        $productDetails->long_description = $request->input('description');
        $productDetails->phone = $request->input('phone');
        $productDetails->show_phone = $request->input('show_phone', '0');
        $productDetails->location = $request->input('city');
        $productDetails->save();

        //Insert Into ProductImages
        $productImages = new ProductImage;
        $productImages->product_id = $id;
        $productImages->user_id = 1;
        //$productImages->image = $request->input('images');


        //images
//        if($request->hasFile('images')){
//            $destination_path = '/public/images/product';
//            $image = $request->file('images');
//            $image_name = $image->getClientOriginalName();
//            $path = $request->file('images')->storeAs($destination_path,$image_name);
//
//            $productImages->image = $image_name;
//        }
//        else{
//            $productImages->image = 'nothing';
//        };

        //Another method to upload images
//        $request->validate([
//            'images' => 'required',
//            'images.*' => 'mimes:jpeg,jpg,png,gif,csv,txt,pdf|max:2048'
//        ]);
        if($request->hasFile('images')){
            foreach($request->file('images') as $file)
            {
                $name = $file->getClientOriginalName();
                $file->move(public_path().'/uploads/',$name);
                $imgData[] = $name;
            }

            $productImages->image = json_encode($imgData);
        }else{
            $productImages->image = 'nothing';
        };
        $productImages->save();

    }
}
