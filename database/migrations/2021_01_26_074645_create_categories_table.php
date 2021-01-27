<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique()->comment('For Route and SEO');;
            $table->string('image')->nullable();
            $table->string('description');
            $table->unsignedTinyInteger('type')->index()->nullable();
            $table->unsignedBigInteger('parent_id')->index();
            $table->unsignedTinyInteger('level')->default(0);
            $table->unsignedTinyInteger('piriority')->nullable();
            $table->tinyInteger('status')->default(1)->comment('active');
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
        Schema::dropIfExists('categories');
    }
}
