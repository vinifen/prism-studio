<?php

namespace App\Policies;

use App\Models\Discount;
use App\Models\User;
use App\Policies\Concerns\AuthorizesActions;

class DiscountPolicy
{
    use AuthorizesActions;

    public function viewAny(User $authUser = null): true
    {
        return true;
    }

    public function view(User $authUser = null, Discount $discount): true
    {
        return true;
    }

    public function create(User $authUser): true
    {
        $this->authorizeUnlessPrivileged(
            false,
            $authUser->isAdmin(),
            'create',
            'You do not have permission to create a discount.'
        );
        return true;
    }

    public function update(User $authUser, Discount $discount): true
    {
        $this->authorizeUnlessPrivileged(
            false,
            $authUser->isAdmin(),
            'update'
        );
        return true;
    }

    public function restore(User $authUser, Discount $discount): true
    {
        $this->authorizeUnlessPrivileged(
            false,
            $authUser->isAdmin(),
            'restore'
        );
        return true;
    }

    public function delete(User $authUser, Discount $discount): true
    {
        $this->authorizeUnlessPrivileged(
            false,
            $authUser->isAdmin(),
            'delete'
        );
        return true;
    }

    public function forceDelete(User $authUser, Discount $discount): true
    {
        $this->authorizeUnlessPrivileged(
            false,
            $authUser->isAdmin(),
            'force delete'
        );
        return true;
    }
}
