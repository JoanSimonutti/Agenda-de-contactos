import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";


export const ContactCard = (props) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handleDelete = () => actions.deleteContact(props.contactId)

    const handleEdit = () => {
        actions.selectContact(store.contacts.filter(el => el.id === props.contactId)[0])
        navigate('/edit/' + props.contactId)
    }

    return (
        <div className="card contact-card p-3">
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <img width={'180px'} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt={props.name} />
                    <div className="d-flex flex-column align-items-start ms-3 justify-content-center">
                        <p><strong>NOMBRE:</strong> {props.name}</p>
                        <p><strong>TELEFONO:</strong> {props.phone}</p>
                        <p><strong>EMAIL:</strong> {props.email}</p>
                        <p><strong>DIRECCION:</strong> {props.address}</p>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center gap-2">
                    <button onClick={handleEdit} className="btn btn-custom-warning">EDITAR</button>
                    <button onClick={handleDelete} className="btn btn-custom-danger">BORRAR</button>
                </div>
            </div>
        </div>
    )
}