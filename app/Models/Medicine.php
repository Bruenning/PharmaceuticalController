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
        'stock',
        'expiration',
    ];

    protected $cast = [
        'expiration' => 'datetime'
    ];

    public static function create($request) {
        $medicine = new Medicine();
        $medicine->id = $request["ID"];
        $medicine->nameMedicine = $request["Nome_do_Medicamento"];
        $medicine->category = $request["Categoria"];
        $medicine->price = $request["Preço"];
        $medicine->stock = $request["Estoque_Atual"];
        $medicine->expiration = $request["Data_de_Validade"];
        $medicine->save();

        return $medicine;
    }
}
