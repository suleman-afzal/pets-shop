<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class EditPasswordController extends Controller
{
    public function index(Request $request){
        $this->validate($request,[
           'password' => 'required',
           'confirm_password' => 'required'
        ]);
        if($request->input('password') === $request->input('confirm_password')){
            //$user_id = auth()->user()->id;
            $user_id = 1;
            $user = User::find($user_id);
            $password = $request->input('password');
            $bcrypt_password = password_hash($password, PASSWORD_BCRYPT);
            $user->password = $bcrypt_password;
            $user->save();
        }
        else{
            dd('Not match');
        }

    }
}
