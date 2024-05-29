<?php

namespace App\Http\Controllers;

use App\Models\Catagories;
use App\Models\items;
use Inertia\Inertia;
use Illuminate\Http\Request;

class CombinedController extends Controller
{
    public function showSearch()
    {
        $categories = Catagories::all();
        $items = items::all();
        // dd($items, $categories);
        return Inertia::render('Welcome', [
            'categories' => $categories,
            'items' => $items,
        ]);
    }
}
