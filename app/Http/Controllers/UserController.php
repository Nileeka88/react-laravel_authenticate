<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function userSignIn(Request $request):JsonResponse{
        Log::info('i am working');
        //Log::info($request->email);
        $user  = User::where('email',$request->email)->first();

        if(!$user){
            return response()->json(['message' => 'User not found']);
        }


        if($this->isValidateUserCredentials($request->all(), $user)){

            return response()->json([
                        'user_id' => $user->id,
                        'user_token' => $user->createToken('testToken', ['server:admin'])->plainTextToken,

                ]);
        }
        return response()->json(['message' => 'User credentials not valid']);
       // Log::info($user );
        // return ['message'=>'controller working'];
    }

    public function isValidateUserCredentials(array $request, User $user):bool{

        return $user->email === $request['email'] &&  Hash::check($request['password'],$user->password);
    }
}
