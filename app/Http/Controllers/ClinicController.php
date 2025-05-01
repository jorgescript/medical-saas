<?php

namespace App\Http\Controllers;

use App\Models\Clinic;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClinicController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $clinics = Clinic::where('owner_user_id', auth()->id())
            ->orderBy('name')
            ->get()
            ->toArray();

        return Inertia::render('clinic/clinicList', [
            'clinics' => $clinics,
        ]);
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
        ]);

        Clinic::create([
            'name' => $validated['name'],
            'owner_user_id' => auth()->id(),
        ]);

        return to_route('clinics.list');
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
        ]);

        $clinic->update($validated);
        return redirect()->route('clinics.list');
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
