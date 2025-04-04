import React from "react";
import AppRoutes from "./utilities/routers/AppRoutes.tsx";
import  axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;
const App: React.FC = () => {

    return (
        <>
            <AppRoutes/>
        </>
    );
};

export default App;
