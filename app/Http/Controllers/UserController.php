<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
     /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function ChangePassword(Request $req, $id){
        $user = User::where('id',$id)->update(['password' => Hash::make($req->newpass)]);
        return $user;
    }
    public function getAllUsers() {
        $options = [];
        foreach (User::all() as $user) {
            array_push($options,(object)['name' => $user->name]);
        }
        return $options;
    }
}
