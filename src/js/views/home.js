import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/contactCard.jsx";
import ScrollToTopButton from "../component/ScrollToTopButton.jsx";


export const Home = () => {
	const { store, actions } = useContext(Context)

	return (

		store.contacts?.length === 0 ? <h2 className="text-center my-5 pt-5">NO HAY CONTACTOS PARA MOSTRAR<br /><br /> POR FAVOR, AÑADIR CONTACTO</h2> :
			<>
				<div className="d-flex flex-column align-items-center mt-3 mb-3 gap-3">
					{
						store.contacts?.map(contact => <ContactCard key={contact.id}
							name={contact.name}
							phone={contact.phone}
							email={contact.email}
							address={contact.address}
							contactId={contact.id}
						/>)
					}
				</div>
				<ScrollToTopButton />
			</>
	);
}