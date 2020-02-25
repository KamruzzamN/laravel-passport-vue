<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function users(){
        if(request()->ajax()){
            $users = User::all();
            return response()->json(['users' => $users],200);
        }
        else{
            return redirect('/');
        }
    }

    public function deleteUser($id){
        if(request()->ajax()){
            User::find($id)->delete();
            return response()->json(['message' => 'User Successfully Deleted'],200);
        }
        else{
            return redirect('/');
        }
        
    }
}
