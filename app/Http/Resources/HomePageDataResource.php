<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class HomePageDataResource extends ResourceCollection
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {

        return [
            'main_categories' => HomePageMainCategories::collection($this->collection['main_categories']),
            'feature_products' => ProductResource::collection($this->collection['featured_products'])

        ];
    }
}
