<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Catagories>
 */
class CatagoriesFactory extends Factory
{

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->words(mt_rand(1, 3), true), // Generate a title with 1 to 3 words
            'imagepath' => $this->faker->imageUrl(),
            'description' => $this->faker->realText(50, 2), // Generate a random text
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
