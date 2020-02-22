<?php

namespace App\Http\Controllers;

use App\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    
    public function login(Request $request){

         return response()->json($request->all(),200);
        // $http = new Client;

        // $response = $http->post('http://your-app.com/oauth/token', [
        //     'form_params' => [
        //         'grant_type' => 'password',
        //         'client_id' => config('services.passport.client_id'),
        //         'client_secret' => config('services.passport.client_secret'),
        //         'username' => $request->username,
        //         'password' => $request->password,
        //         'code' => '',
        //     ],
        // ]);

        // return json_decode((string) $response->getBody(), true);
        
    }

    public function register(Request $request){
        $this->validate($request,[
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'unique:users'],
            'password' => ['required', 'string', 'min:4'],
        ]);
        
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json($request->all(),200);
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens->each(function ($token, $key) {
            $token->delete();
        });

        return response()->json('Logged out successfully', 200);
    }

}
