<?php

namespace App\Http\Controllers\API;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->only(['user','logout']);
    }

    public function user(Request $request){
        $user = Auth::user();
        return response()->json(['user' => $user],200);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function login(Request $request){
        $this->validate($request,[
            'email' => 'required',
            'password' => 'required|min:4',
        ]);

        if (Auth::attempt($this->credentials($request))) {
            $getToken = Auth::user()->createToken('authToken');
            return response()->json([
                "token_type" => "Bearer",
                "expires_at" => Carbon::parse($getToken->token->expires_at)->toDateTimeString(),
                "access_token" => $getToken->accessToken,
            ],200);
        }
        else{
            return response()->json(['error' => 'Invalid Login Credential'],401);
        }

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

        if (Auth::attempt($this->credentials($request))) {
            $getToken = Auth::user()->createToken('authToken');
            return response()->json([
                "token_type" => "Bearer",
                "expires_at" => Carbon::parse($getToken->token->expires_at)->toDateTimeString(),
                "access_token" => $getToken->accessToken,
            ],200);
        }
        else{
            return response()->json(['error' => 'Invalid Login Credential'],401);
        }
    }

    protected function credentials($request)
    {
        return $request->only('email', 'password');
    }

    public function logout(Request $request)
    {
        Auth::user()->token()->revoke();
        return response()->json(['message' =>'Logged out successfully'], 200);
    }

}
