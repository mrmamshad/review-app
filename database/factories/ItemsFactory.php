<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Catagories;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Items>
 */
class ItemsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'catagories_id' => Catagories::factory(),
            "title" => fake()->title(),
            "imagepath" => fake()->imageUrl(),
            'description' => fake()->realText(50, 2), // Generate a random text(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
