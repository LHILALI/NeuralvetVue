<?php

namespace App\Http\Controllers;

use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;
use App\User;
use Hash;
use Illuminate\Support\Facades\Hash as FacadesHash;

class AuthController extends Controller
{


    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'device_name' => 'required',
        ]);
    
        $user = User::where('email', $request->email)->first();
    
        if (! $user || ! FacadesHash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }
    
        return $user->createToken($request->device_name)->plainTextToken;
    }
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['msg' => 'Logout Successfull']);
    }

}
