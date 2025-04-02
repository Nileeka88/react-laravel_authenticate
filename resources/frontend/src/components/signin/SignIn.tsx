import React, { useState } from "react";
import SignInForm from "./SignInForm.tsx";
import { ISignInState } from "../../utilities/types/signin/SignIn";
import * as axios from "axios";

const SignIn: React.FC = () => {
    const [signDetails, setSignDetails] = useState<ISignInState>({
        email: "",
        password: "",
    });

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

    const handleSubmit = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault()
        console.log(signDetails)
        return await axios.get('/sanctum/csrf-cookie').then(res => {
            const response = axios.post('http://127.0.0.1:8000/api/sign-in', signDetails)

            console.log(response)
        });
    };
    return (
        <SignInForm
            handleInputField={handleInputField}
            handleSubmit={handleSubmit}
        />
    );
};

export default SignIn;
