<?php

namespace App\Http\Resources;

use App\Product;
use Illuminate\Http\Resources\Json\JsonResource;

class HomePageMainCategories extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {

        $category_ids = array_merge(
            $this->subCategories->pluck('id')->toArray(),
            $this->subCategories->pluck('id')->toArray()
        );
        array_push($category_ids, $this->id);
//        dd($this->id);

        $products = Product::whereIn('category_id', $category_ids)
            ->orderBy('created_at', 'DESC')->limit(10)->get();

        return [
                'id' => $this->id,
                'title' => $this->title,
                'image' => $this->image,
                'slug' => $this->slug,
                'description' => $this->description,
                'products' => ProductResource::collection($products),


        ];
    }
}
