<?php

namespace App\Policies;

use App\Models\Cart;
use App\Models\CartItem;
use App\Models\User;
use App\Policies\Concerns\AuthorizesActions;

class CartItemPolicy
{
    use AuthorizesActions;

    public function viewAny(User $authUser): true
    {
        $this->authorizeUnlessPrivileged(
            false,
            $authUser->isStaff(),
            null,
            'You are not authorized to view any cart items.'
        );
        return true;
    }

    public function view(User $authUser, CartItem $cartItem): true
    {
        $this->authorizeUnlessPrivileged(
            $cartItem->cart && $cartItem->cart->user_id === $authUser->id,
            $authUser->isStaff(),
            'view',
        );
        return true;
    }

    public function create(User $authUser): bool
    {
        $requestedCartId = request()->input('cart_id');
        $cart = Cart::find($requestedCartId);

        $isOwner = $cart instanceof Cart && $cart->user_id === $authUser->id;

        $this->authorizeUnlessPrivileged(
            $isOwner,
            $authUser->isAdmin(),
            'create',
        );
        return true;
    }

    public function update(User $authUser, CartItem $cartItem): true
    {
        $this->authorizeUnlessPrivileged(
            $cartItem->cart && $cartItem->cart->user_id === $authUser->id,
            $authUser->isAdmin(),
            'update',
        );
        return true;
    }

    public function removeOne(User $authUser, CartItem $cartItem): true
    {
        $this->authorizeUnlessPrivileged(
            $cartItem->cart && $cartItem->cart->user_id === $authUser->id,
            $authUser->isAdmin(),
            'delete',
        );
        return true;
    }

    public function forceDelete(User $authUser, CartItem $cartItem): true
    {
        $this->authorizeUnlessPrivileged(
            $cartItem->cart && $cartItem->cart->user_id === $authUser->id,
            $authUser->isAdmin(),
            'force delete',
        );
        return true;
    }
}
