<?php

namespace App\Http\Controllers;

use App\Models\items;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\StoreitemsRequest;
use App\Http\Requests\UpdateitemsRequest;

class ItemsController extends Controller
{

   public function search(Request $request)
    {
        $query = $request->input('query');

        // Simple search logic
        $posts = items::where('title', 'LIKE', "%$query%")
                      ->orWhere('content', 'LIKE', "%$query%")
                      ->get();

        return Inertia::render('search', ['posts' => $posts]);
    }
    public function index()
    {
        return Inertia::render('search');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreitemsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(items $items)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(items $items)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateitemsRequest $request, items $items)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(items $items)
    {
        //
    }
}
