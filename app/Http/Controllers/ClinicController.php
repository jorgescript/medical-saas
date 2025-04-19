<?php

namespace App\Http\Controllers;

use App\Models\Clinic;
use Illuminate\Http\Request;

class ClinicController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('clinics.index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('clinics.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'logo_url' => 'nullable|url',
        ]);

        Clinic::create($validated);

        return redirect()->route('clinics.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Clinic $clinic)
    {
        return view('clinics.show', compact('clinic'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Clinic $clinic)
    {
        return view('clinics.edit', compact('clinic'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Clinic $clinic)
    {
        $validated = $request->validate([
            'name' => 'required',
            'logo_url' => 'nullable|url',
        ]);

        $clinic->update($validated);

        return redirect()->route('clinics.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Clinic $clinic)
    {
        $clinic->delete();

        return redirect()->route('clinics.index');
    }
}
