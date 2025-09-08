<?php

namespace App\Http\Controllers\Cart;

use App\Http\Controllers\Controller;
use App\Http\Requests\Cart\StoreCartItemRequest;
use App\Http\Requests\Cart\UpdateCartItemRequest;
use App\Http\Responses\ApiResponse;
use App\Models\CartItem;
use App\Http\Resources\Cart\CartItemResource;
use App\Services\CartItemService;
use App\Services\ProductService;
use Illuminate\Http\JsonResponse;
use App\Actions\Cart\StoreCartItemAction;

class CartItemController extends Controller
{
    public function index(): JsonResponse
    {
        $this->authorize('viewAny', CartItem::class);

        $cartItems = CartItem::all();
        $cartItems->load('cart.user');
        return ApiResponse::success(CartItemResource::collection($cartItems));
    }

    public function store(StoreCartItemRequest $request, StoreCartItemAction $storeCartItemAction): JsonResponse
    {
        $this->authorize('create', CartItem::class);
        $cartItem = $storeCartItemAction->execute($request->validated());
        $cartItem->load('cart.user');
        return ApiResponse::success(new CartItemResource($cartItem), 201);
    }

    public function show(int $id): JsonResponse
    {
        $cartItem = $this->findModelOrFail(CartItem::class, $id);
        $this->authorize('view', $cartItem);
        $cartItem->load('cart.user');
        return ApiResponse::success(new CartItemResource($cartItem));
    }

    public function update(
        UpdateCartItemRequest $request,
        int $id,
        CartItemService $cartItemService
    ): JsonResponse {
        /** @var \App\Models\CartItem $cartItem */
        $cartItem = $this->findModelOrFail(CartItem::class, $id);
        $this->authorize('update', $cartItem);

        $updated = $cartItemService->updateQuantity(
            $cartItem,
            $request->validated('quantity'),
            app(ProductService::class)
        );
        $updated->load('cart.user');
        return ApiResponse::success(new CartItemResource($updated));
    }

    public function removeOne(int $id, CartItemService $cartItemService): JsonResponse
    {
        /** @var CartItem $cartItem */
        $cartItem = $this->findModelOrFail(CartItem::class, $id);
        $this->authorize('removeOne', $cartItem);

        $cartItemService->removeOne($cartItem);
        return ApiResponse::success(null, 200);
    }

    public function forceDelete(int $id): JsonResponse
    {
        $cartItem = $this->findModelOrFailWithTrashed(CartItem::class, $id);
        $this->authorize('forceDelete', $cartItem);

        $cartItem->forceDelete();
        return ApiResponse::success(null, 200);
    }
}
