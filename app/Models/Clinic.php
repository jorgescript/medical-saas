<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Clinic extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'logo_url',
        'owner_user_id',
        'status',
    ];

    public function billingData(): HasOne
    {
        return $this->hasOne(BillingData::class);
    }
}
