const argv = require('yargs').argv;
const {
	listContacts,
	getContactById,
	removeContact,
	addContact,
} = require('./contacts');

async function invokeAction({ action, id, name, email, phone }) {
	switch (action) {
		case 'list':
			const allContacts = await listContacts();
			return console.log(allContacts);

		case 'get':
			const contactById = await getContactById(id);
			return console.log(contactById);

		case 'add':
			const addNewContact = await addContact(name, email, phone);
			return console.log(addNewContact);

		case 'remove':
			const deleteContact = await removeContact(id);
			return console.log(deleteContact);

		default:
			console.warn('\x1B[31m Unknown action type!');
	}
}

invokeAction(argv);
