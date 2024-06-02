<?php

namespace App\Http\Controllers;

use App\Models\items;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\StoreitemsRequest;
use App\Http\Requests\UpdateitemsRequest;
use App\Models\formData;

class ItemsController extends Controller
{


    public function index($topicId, $topicName)
    {

        $items = Items::where('catagories_id', $topicId)->get();
        // dd($items);
        // $filteredData = items::where('catagories_id', 1)->get();
        return Inertia::render('TopicShow', ['items' => $items, 'topicName' => $topicName]);
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
    public function show($itemid  , $topicTitle )
    {
        $fromData = formData::all();
        $item = Items::all();
        $itemid = $itemid;
        $topicTitle = $topicTitle;

        return Inertia::render('ItemShow',
        [
            'itemid' => $itemid,
             'topicTitle' => $topicTitle,
              'item' => $item,
              ' ' => $fromData
        ]);
    }

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
