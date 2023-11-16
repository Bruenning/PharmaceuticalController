<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medicine extends Model
{
    use HasFactory;

    protected $table = 'medicines';

    protected $fillable = [
        'id',
        'nameMedicine',
        'category',
        'price',
        'inventory',
        'expiration_date',
    ];

    protected $cast = [
        'expiration_date' => 'date'
    ];

    public static function create($request)
    {
        $medicine = new Medicine();
        $medicine->id = $request["id"];
        $medicine->nameMedicine = $request["nameMedicine"];
        $medicine->category = $request["category"];
        $medicine->price = $request["price"];
        $medicine->inventory = $request["inventory"];
        $medicine->expiration_date = $request["expiration_date"];
        $medicine->save();

        return $medicine;
    }

}
