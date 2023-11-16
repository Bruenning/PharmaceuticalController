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
    public function index():string
    {

        if(!\Cache::has('db')){
            \Cache::add("db", \DB::table("medicine")->get() , now()->addHours(24));
        }

        $medicine = \Cache::get('db');

        return "";
        // return $medicine;
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

            if(!$item["ID"])
                return;

            if(!$item["Nome_do_Medicamento"])
                return;

            if(!$item["Categoria"])
                return;

            if(!$item["Preço"])
                return;

            if(!$item["Estoque_Atual"])
                return;

            if(!$item["Data_de_Validade"])
                return;


            $item['Data_de_Validade'] = date('Y-m-d', strtotime($item['Data_de_Validade']));

            try{
                $medicineExist = Medicine::where('id', $item["ID"])?->get()[0];

            //     ray($medicineExist);
            //     // $this->update($item, $medicineExist);
            //     \Route::put("api/medicine/".$medicineExist, $item);
                return;
            }catch(e) {

            }

            // $medicine->add(Medicine::create($item));

        });

        return new MedicineResource($medicine);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Medicine $medicine)
    {
        rd($request, $medicine);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
