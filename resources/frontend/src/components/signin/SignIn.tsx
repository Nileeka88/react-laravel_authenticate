import React, { useState } from "react";
import SignInForm from "./SignInForm.tsx";
import { ISignInState } from "../../utilities/types/signin/SignIn";
import {UserSignIn} from "../../utilities/api/auth/UserSignIn.ts";
import {useDispatch} from "react-redux";


const SignIn: React.FC = () => {
    const [signDetails, setSignDetails] = useState<ISignInState>({
        email: "",
        password: "",
    });

    // need to define type definition for dispathing method
    const dispatch = useDispatch()

    const handleInputField = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        const { name, value } = event.target;
        //console.log(name, value)
        setSignDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    //console.log(signDetails)

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        //console.log(signDetails)
        await dispatch(UserSignIn({signDetails}));

    };
    return (
        <SignInForm
            handleInputField={handleInputField}
            handleSubmit={handleSubmit}
        />
    );
};

export default SignIn;
