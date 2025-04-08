import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const EditUserInfo = props => {

    const {store, actions} = useContext(Context);
   
       const navigate = useNavigate();
   
   /* Estados:
   1. Crear un objeto que las propiedades sean los valores de los inputs **
   2. Crear 4 estados sepados
   (spoiler: vamos a usar la opcion número 1)
   */

   /* Seleccion del contacto a edit
   1. Creando una funcion en Flux que me almacene en el Store el contacto a editar **
   2. Hacer una busqueda del contacto a partir del id 
   */

   const [formData, setFormData] = useState({
       id: store.selected?.id || '',
       name: store.selected?.name || '',
       phone: store.selected?.phone || '',
       email: store.selected?.email || '',
       address: store.selected?.address || ''
       })
   
   const handleChange = e => {
       const {name, value} = e.target
       setFormData({...formData, [name]: value})
   }
   
   const handleCancel = () => navigate('/')
   
   const handleSubmit = e => {
       e.preventDefault();
       console.log(formData)
       actions.editContact(formData)
   }
   
       return (
   
        <form className="card form-control p-3 contact-form" onSubmit={handleSubmit} >
        <div>
            <p>NAME:</p>
            <input type="text" className="form-control input1" value={formData.name} onChange={handleChange} name="name" required />
            <p>PHONE NUMBER:</p>
            <input type="text" className="form-control input1" value={formData.phone} onChange={handleChange} name="phone" required />
            <p>EMAIL:</p>
            <input type="text" className="form-control input1" value={formData.email} onChange={handleChange} name="email" required />
            <p>ADDRESS:</p>
            <input type="text" className="form-control input1" value={formData.address} onChange={handleChange} name="address" required />
        </div>
        <div className="d-flex gap-2 mt-2 align-items-baseline justify-content-end">
            <input className="btn btn-custom" type="submit" value="Accept" />
            <button className="btn btn-custom-danger" onClick={handleCancel}>
                Cancel
            </button>
        </div>
    </form>
       )
}