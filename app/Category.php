<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

    public function parent() {
        return $this->belongsTo(self::class, 'parent_id');
    }

    public function subCategories(){
        return $this->hasMany(Category::class,  'parent_id', 'id');
    }
}
