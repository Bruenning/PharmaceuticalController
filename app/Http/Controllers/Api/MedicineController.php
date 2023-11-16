<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use App\Models\Medicine;
use App\Http\Resources\MedicineResource;
use Illuminate\Support\Facades\Route;



class MedicineController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return MedicineResource::collection(Medicine::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        unset($items);

        $medicine = \collect();

        $items = \collect();

        $request->collect()->map(function($item) use ($medicine) {

            $medicineExist = Medicine::find([$item["id"]])->first();

            if(!$medicineExist)
                $medicineExist =  Medicine::where("nameMedicine", $item["nameMedicine"])->first();

            if($medicineExist)
                $item["id"] = $medicineExist->id;

            if(!$item["id"]){
                    return;
            }

            if(!$item["nameMedicine"])
                return;

            if(!$item["category"])
                return;

            if(!$item["price"])
                return;

            if(!$item["inventory"])
                return;

            if(!$item["expiration_date"])
                return;


            $item['expiration_date'] = date('Y-m-d', strtotime($item['expiration_date']));

            $dadosValidados = validator($item, [
                'id' => 'required|integer',
                'nameMedicine'=> 'required|string',
                'category'=> 'required|string',
                'price'=> 'required|numeric',
                'inventory'=> 'required|integer',
                'expiration_date'=> 'required|date',
            ])->validate();

            if($medicineExist){
                $medicineExist->update($dadosValidados);
                return $medicine->add(response()->json(['message' => "há medicamentos já foi criado anteriormente, valores diferentes do já salvo foram atualizados"]));
            }

            $medicine->add(Medicine::create($dadosValidados));

        });

        return new MedicineResource($medicine);
    }

    /**
     * Display the specified resource.
     */
    public function show(Medicine $medicine)
    {
        return MedicineResource($medicine);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Medicine $medicine)
    {
        if(!$request["id"])
                return;

        if(!$request["nameMedicine"])
            return;

        if(!$request["category"])
            return;

        if(!$request["price"])
            return;

        if(!$request["inventory"])
            return;

        if(!$request["expiration_date"])
            return;


        $request['expiration_date'] = date('Y-m-d', strtotime($request['expiration_date']));


        $dadosValidados = $request->validate([
            'id' => 'required|integer',
            'nameMedicine'=> 'required|string',
            'category'=> 'required|string',
            'price'=> 'required|numeric',
            'inventory'=> 'required|integer',
            'expiration_date'=> 'required|date',
        ]);

        $medicine->update($dadosValidados);

        return new MedicineResource($medicine);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Medicine $medicine)
    {
        $medicine->delete();

        return response()->noContent();
    }
}
