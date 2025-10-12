<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        if (!Storage::disk('public')->exists('products')) {
            Storage::disk('public')->makeDirectory('products');
        }

        $examplesPath = storage_path('examples');
        $imageUrls = [];

        if (File::exists($examplesPath)) {
            $exampleImages = File::files($examplesPath);
            
            foreach ($exampleImages as $image) {
                if (in_array($image->getExtension(), ['jpg', 'jpeg', 'png', 'gif', 'webp'])) {
                    $filename = Str::uuid() . '.' . $image->getExtension();
                    
                    $destinationPath = storage_path('app/public/products/' . $filename);
                    File::copy($image->getPathname(), $destinationPath);
                    
                    $imageUrls[] = '/api/storage/products/' . $filename;
                }
            }
        }

        if (empty($imageUrls)) {
            Product::factory()->count(27)->create();
            return;
        }

        for ($i = 0; $i < 27; $i++) {
            Product::factory()->create([
                'image_url' => $imageUrls[$i % count($imageUrls)]
            ]);
        }
    }
}