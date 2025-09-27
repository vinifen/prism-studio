<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $id
 * @property int $order_id
 * @property int|null $product_id
 * @property int $quantity
 * @property float $unit_price
 */
class OrderItem extends Model
{
    /** @use HasFactory<\Database\Factories\OrderItemFactory> */
    use HasFactory;
    use SoftDeletes;

    /**
     * @var list<string>
     */
    protected $fillable = [
        'order_id',
        'product_id',
        'quantity',
        'unit_price',
    ];

    /**
     * @var array<string, string>
     */
    protected $casts = [
        'id' => 'integer',
        'order_id' => 'integer',
        'product_id' => 'integer',
        'quantity' => 'integer',
        'unit_price' => 'decimal:2',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<Order, OrderItem>
     */
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<Product, OrderItem>
     */
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
