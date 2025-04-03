import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/contactCard.jsx";


export const Home = () => {
	const { store, actions } = useContext(Context)

	return (
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
	);
}