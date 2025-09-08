<?php

namespace App\Policies;

use App\Models\Category;
use App\Models\User;
use App\Policies\Concerns\AuthorizesActions;

class CategoryPolicy
{
    use AuthorizesActions;

    public function viewAny(User $authUser = null): true
    {
        return true;
    }

    public function view(User $authUser = null, Category $category): true
    {
        return true;
    }

    public function create(User $authUser): true
    {
        $this->authorizeUnlessPrivileged(
            false,
            $authUser->isAdmin(),
            'create',
            'You do not have permission to create a category.'
        );
        return true;
    }

    public function update(User $authUser, Category $category): true
    {
        $this->authorizeUnlessPrivileged(
            false,
            $authUser->isAdmin(),
            'update'
        );
        return true;
    }

    public function forceDelete(User $authUser, Category $category): true
    {
        $this->authorizeUnlessPrivileged(
            false,
            $authUser->isAdmin(),
            'delete'
        );
        return true;
    }
}
