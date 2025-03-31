import React from 'react';
import {Route, Routes} from "react-router";
import SignIn from "../../components/signin/SignIn.tsx";

const AppRoutes:React.FC = () => {
    return (
       <Routes>
           <Route path="/" element={<SignIn/>}/>
       </Routes>
    );
};

export default AppRoutes;
