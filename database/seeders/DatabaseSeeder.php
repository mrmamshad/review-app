<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Catagories;
use App\Models\Items;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.~
     */
    public function run(): void
    {
        // User::factory(10)->create();
        Catagories::factory()
            ->count(10) // Create 10 categories
            ->hasItems(10) // Each category has 10 items
            ->create();
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
    }
}
