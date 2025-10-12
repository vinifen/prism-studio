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
        // Garantir que o diretório products existe
        if (!Storage::disk('public')->exists('products')) {
            Storage::disk('public')->makeDirectory('products');
        }

        // Copiar imagens de exemplo para storage/app/public/products
        $examplesPath = storage_path('examples');
        $imageUrls = [];

        if (File::exists($examplesPath)) {
            $exampleImages = File::files($examplesPath);
            
            foreach ($exampleImages as $image) {
                if (in_array($image->getExtension(), ['jpg', 'jpeg', 'png', 'gif', 'webp'])) {
                    // Gerar nome único para a imagem
                    $filename = Str::uuid() . '.' . $image->getExtension();
                    
                    // Copiar imagem para storage/app/public/products
                    $destinationPath = storage_path('app/public/products/' . $filename);
                    File::copy($image->getPathname(), $destinationPath);
                    
                    // Adicionar URL da imagem ao array
                    $imageUrls[] = '/api/storage/products/' . $filename;
                }
            }
        }

        // Se não encontrou imagens, criar produtos sem imagem
        if (empty($imageUrls)) {
            Product::factory()->count(27)->create();
            return;
        }

        // Criar produtos distribuindo as imagens disponíveis
        for ($i = 0; $i < 27; $i++) {
            Product::factory()->create([
                'image_url' => $imageUrls[$i % count($imageUrls)]
            ]);
        }
    }
}