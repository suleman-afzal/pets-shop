<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class AccountController extends Controller
{
    public function index(){

        return view('user.account');


    }

    public function profileData(){
        //$user = auth()->user();
//        $user = User::first();
        $user_id = 1;
        return User::where('id',$user_id)->get();
    }

    public function store(Request $request){
        // TODO::Get Auth ID
        $this->validate($request,[
            'first_name' => 'required',
            'last_name' => 'required',
            'email'=> 'required',
            'telephone' => 'required'
        ]);
        //$user_id = auth()->user()->id;
        $user_id = 1;
        $user = User::find($user_id);

        $user->first_name = $request->input('first_name');
        $user->last_name = $request->input('last_name');
        $user->email = $request->input('email');
        $user->phone = $request->input('telephone');

        $user->save();
    }
    public function address(Request $request){
        $this->validate($request,[
            'street' => 'required',
            'city' => 'required',
            'state' => 'required',
            'country' => 'required',

        ]);
//        TODO::Get auth id
        //$user_id = auth()->user()->id;
        $user_id = 1;
        $user = User::find($user_id);
        $user->street = $request->input('street');
        $user->city = $request->input('city');
        $user->state = $request->input('state');
        $user->country = $request->input('country');
        $user->save();

    }

}
