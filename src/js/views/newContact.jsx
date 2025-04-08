import React from "react";
import { NewContactForm } from "../component/newContactForm.jsx";

export const NewContact = () => {

    return (
        <div className="d-flex flex-column align-items-center mt-3 mb-3 gap-3">
            <h3>
               <strong>NEW CONTACT</strong>
            </h3>
            <NewContactForm />
        </div>
    )
}