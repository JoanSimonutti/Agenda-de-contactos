const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://playground.4geeks.com/contact'
		},
		actions: {
			// Use getActions to call a function within a fuction
			selectContact: (contact) => setStore({selected: contact}),
			createAgenda: async ()=> {
				try {
					const resp = await fetch(getStore().url+'/agendas/Gex', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						}
					});
					if (!resp.ok) throw new Error('Error while creating agenda');
					getActions().getAgenda();	
				} catch (error) {
					console.error(error);
				}
			},
			getAgenda: async ()=> {
				try {
					const resp = await fetch(getStore().url+'/agendas/Gex')
					if (resp.status===404) return getActions().createAgenda()
					if (!resp.ok) throw new Error('Error while fetching agenda')
					const data = await resp.json();
					setStore({contacts: data.contacts})
				} catch (error) {
					console.error(error);
				}
			},
			createContact: async (contact) => {
				try {
					const resp = await fetch(getStore().url+'/agendas/Gex/contacts', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(contact)
					})
					if (!resp.ok) throw new Error('Error while creating contact')
					return getActions().getAgenda()
				} catch (error) {
					console.error(error);
				}
			},
			editContact: async (contact) => {
				try {
					const resp = await fetch(getStore().url+'/agendas/Gex/contacts/'+contact.id, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(contact)
					})
					if (!resp.ok) throw new Error('Error while ')
						return getActions().getAgenda();
				} catch (error) {
					console.error(error);
				}
			},
			deleteContact: async (id) => {
				try {
					const resp = await fetch(getStore().url+'/agendas/Gex/contacts/'+id, {
						method: 'DELETE'
					})
					if (!resp.ok) throw new Error('Error while deleting');
					return getActions().getAgenda();
				} catch (error) {
					console.error(error);
				}
			},
		}
	};
};

export default getState;
