<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Portfolio;
use Illuminate\Http\Request;
use Illuminate\Http\Response; 

class PortfolioController extends Controller
{
    public function index()
    {
        $portfolios = Portfolio::all();

        return Inertia::render('HomePage', [
            'portfolios' => $portfolios
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
            $imageUrl = asset('storage/' . $imagePath);
            $validated['image'] = $imageUrl;
        }

        Portfolio::create($validated);

        return redirect()->route('portfolio.index')->with('success', 'Portfolio item created successfully!');
    }

    public function read(Request $request){

        $portfolio = Portfolio::all();

        return Inertia::render('AdminPage',[
            'portfolio' => $portfolio
        ]);
        
    }
}
