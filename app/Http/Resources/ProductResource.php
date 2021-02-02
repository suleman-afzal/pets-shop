<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
       // return parent::toArray($request);
        return [
            //'id' => $this->id,
            'thumbnail'=> $this->thumbnail,
            'title' => $this->title,
            'short_description' => $this->short_description,
            'price' => $this->price,
            'old_price' => $this->old_price

        ];
    }
}
