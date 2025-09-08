<?php

namespace App\Http\Resources\Cart;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CartItemResource extends JsonResource
{
    /**
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $unitPrice = (float) ($this->resource->product->price ?? 0.0);
        $unitPriceDiscounted = optional($this->resource->product)->getDiscountedPrice();
        $quantity = $this->resource->quantity;

        $totalPrice = round($unitPrice * $quantity, 2);
        $totalPriceDiscounted = $unitPriceDiscounted !== null
            ? round($unitPriceDiscounted * $quantity, 2)
            : null;

        return [
            'id' => $this->resource->id,
            'user_id' => optional($this->resource->cart->user)->id,
            'user_name' => optional($this->resource->cart->user)->name,
            'cart_id' => $this->resource->cart_id,
            'product_id' => $this->resource->product_id,
            'product_name' => optional($this->resource->product)->name,
            'unit_price' => $unitPrice,
            'unit_price_discounted' => $unitPriceDiscounted,
            'quantity' => $quantity,
            'total_price' => $totalPrice,
            'total_price_discounted' => $totalPriceDiscounted,
            'discount_value' => (float) (optional($this->resource->product)->getTotalDiscountPercentage() ?? 0),
            'created_at' => $this->resource->created_at,
            'updated_at' => $this->resource->updated_at,
        ];
    }
}
