<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique()->comment('For Route and SEO');
            $table->unsignedBigInteger('category_id')->index();
            $table->unsignedBigInteger('user_id')->index();
            $table->string('short_description');
            $table->string('thumbnail')->nullable();
            $table->string('thumbnail_hover')->nullable();
            $table->float('price');
            $table->float('old_price')->nullable();
            $table->unsignedInteger('currency_id');
            $table->boolean('in_stock')->default(true);
            $table->boolean('on_sale')->default(false);
            $table->boolean('is_featured')->default(false);
            $table->float('longitude')->default(0)->index();
            $table->float('latitude')->default(0)->index();
            $table->string('location')->nullable();
            $table->unsignedTinyInteger('status')->default(false)->comment('Publish status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
