import React from "react";
import { EditUserInfo } from "../component/editUserInfo.jsx";

export const Edit = () => {



    return (

        <div className="d-flex flex-column align-items-center mt-3 mb-3 gap-3">
            <h3>
               <strong>EDIT CONTACT</strong>
            </h3>
            <EditUserInfo />
        </div>
    )
}