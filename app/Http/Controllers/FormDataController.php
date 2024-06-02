<?php

namespace App\Http\Controllers;

use App\Models\formData;
use Illuminate\Http\Request;
use Inertia\Inertia;
class FormDataController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $fromData = formData::all();
        return Inertia::render('ItemShow', ['fromData' => $fromData]);
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
    public function store(Request $request)
    {
        // Validate the request data
        $validated = $request->validate([
            'username' => 'required|string|max:100',
            'comment' => 'required|string|max:255',
            'rating' => 'required|numeric|min:0|max:5',
        ]);

        // Create a new comment
        $formData = formData::create([
            'username' => $validated['username'],
            'comment' => $validated['comment'],
            'rating' => $validated['rating'],
        ]);

        // Redirect back with a success message
        return redirect()->back()->with('success', 'Comment created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(formData $formData)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(formData $formData)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, formData $formData)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(formData $formData)
    {
        //
    }
}
