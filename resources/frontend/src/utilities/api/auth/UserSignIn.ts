import axios, { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserSignInPayload} from "../../types/signin/SignIn";


export const UserSignIn = createAsyncThunk<
    AxiosResponse<any> | undefined,
    IUserSignInPayload
>("auth/signing", async ({ signDetails }) => {
    return axios.get("/sanctum/csrf-cookie").then(async () => {
        try {
            const response = await axios.post("api/sign-in", signDetails);

            if(response.status === 200){
                return response.data
            }


        } catch (error) {
            console.log(error);
        }
    });
});
