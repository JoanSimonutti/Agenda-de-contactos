import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";



export const NewContactForm = () => {
    const { store, actions } = useContext(Context);

    const navigate = useNavigate();

    /* Estados:
    1. Crear un objeto que las propiedades sean los valores de los inputs
    2. Crear 4 estados sepados
    (spoiler: vamos a usar la opcion número 1)
    */

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: ''
    })

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleCancel = () => navigate('/')

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData)
        actions.createContact(formData)
        navigate('/');
    }

    return (

        <form className="card form-control p-3 contact-form" onSubmit={handleSubmit} >
            <div>
                <p>NOMBRE:</p>
                <input type="text" className="form-control input1" value={formData.name} onChange={handleChange} name="name" placeholder="" required />
                <p>TELEFONO:</p>
                <input type="text" className="form-control input1" value={formData.phone} onChange={handleChange} name="phone" placeholder="" required />
                <p>EMAIL:</p>
                <input type="text" className="form-control input1" value={formData.email} onChange={handleChange} name="email" placeholder="" required />
                <p>DIRECCION:</p>
                <input type="text" className="form-control input1" value={formData.address} onChange={handleChange} name="address" placeholder="" required />
            </div>
            <div className="d-flex gap-2 mt-2 align-items-baseline justify-content-end">
                <input className="btn btn-custom" type="submit" value="ACEPTAR" />
                <button className="btn btn-custom-danger" onClick={handleCancel}>
                    CANCELAR
                </button>
            </div>
        </form>
    )
}