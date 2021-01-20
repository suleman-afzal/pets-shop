<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('phone', 18)->nullable();
            $table->string('cnic', 20)->nullable();
            $table->string('latitude')->default(0);
            $table->string('longitude')->default(0);
            $table->string('city')->nullable();
            $table->string('street')->nullable();
            $table->string('state')->nullable();
            $table->string('country')->nullable();
            $table->tinyInteger('account_type')->default(1)->comment('user account');
            $table->unsignedTinyInteger('status')->default(1)->comment('active');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
