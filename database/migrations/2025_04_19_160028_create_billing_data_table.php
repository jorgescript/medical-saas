<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('billing_data', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('legal_name')->nullable();
            $table->string('rfc')->nullable();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('postal_code')->nullable();
            $table->string('country_code')->nullable();
            $table->unsignedBigInteger('clinic_id');
            $table->foreign('clinic_id')->references('id')->on('clinics');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('billing_data');
    }
};
