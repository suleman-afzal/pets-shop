<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
            'confirm_password' => ['required','same:password']
        ]);
    }

    // /**
    //  * Create a new user instance after a valid registration.
    //  *
    //  * @param  array  $data
    //  * @return \App\User
    //  */
    // protected function create(array $data)
    // {
    //     return User::create([
    //         'first_name' => $data['first_name'],
    //         'last_name' => $data['last_name'],
    //         'email' => $data['email'],
    //         'password' => Hash::make($data['password']),
    //     ]);
    // }


        /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        try {
          
            /**
             * @var User $user
             */
          
            $user =    User::create([
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

                if (!$user) 
                    return redirect('/login');

        //$user->assignRole('Administrator');// Adding roles to a Super Cient by default
        // Assign  All User permissions to a Super Client by default
    

        // send email to new user for email verification
        //event(new EmailEvent(config('db_const.emails.heads.email_verification_new_user.type'), $user->id ));

        //create notification for super admin for new user
        //event(new UserSignUpEvent($user, ''));

                     
              $url = \URL::signedRoute('activate-user', ['user' => $user]);

            //for intercom
        
            echo json_encode(['status' => true, 'user' => $user, 'user_account' => $userAccount, 'url' => $url]);

            exit();
        } catch (\Exception $exception) {
            \Log::error($exception->getMessage(), ['StackTrace'=> $exception->getTraceAsString(), 'File' => __FILE__]);
        }
    }
}
