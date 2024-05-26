<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Catagories;
use App\Http\Requests\StorecatagoriesRequest;
use App\Http\Requests\UpdatecatagoriesRequest;

class CatagoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */



    public function index()
    {
        $catagories = Catagories::all();
        // dd($catagories);
        return Inertia::render('Show', ['catagories' => $catagories]);
    }

    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorecatagoriesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Catagories $catagories)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Catagories $catagories)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatecatagoriesRequest $request, Catagories $catagories)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Catagories $catagories)
    {
        //
    }
}
