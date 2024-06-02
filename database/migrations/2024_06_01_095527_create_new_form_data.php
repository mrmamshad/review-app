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
        Schema::dropIfExists('new_form_data');

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::create('new_form_data', function (Blueprint $table) {
            $table->id();
            $table->string('username');
            $table->string('comment');
            $table->decimal('rating', 2, 1); // Rating with precision 0.5
            $table->timestamps();
        });
    }
};
