<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Catagories; // Replace 'YourModel' with the actual model you want to search

class SearchController extends Controller
{
    public function index(Request $request)
    {
        $query = $request->input('query');
        $results = Catagories::where('column_name', 'LIKE', "%{$query}%")->get(); // Replace 'column_name' with the actual column you want to search

        return inertia('SearchResults', [
            'query' => $query,
            'results' => $results,
        ]);
    }
}
