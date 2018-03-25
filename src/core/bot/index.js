import {
	makeAction,
} from '../store/utils';

import {
	ACTION__CONTACTS__ADD_CONTACT,
} from '../../modules/contacts/actions/types';

import {
	ACTION__MESSAGES__ADD_MESSAGE,
} from '../../modules/messages/actions/types';


function createContact (store) {
	const id = `${parseInt(Math.random() * 10000, 10)}`.substr(0, 5);

	store.dispatch(makeAction(ACTION__CONTACTS__ADD_CONTACT, {
		id,
		firstName: 'Иван',
		lastName: `Иванов ${id}`,
		avatarUrl: '',
	}));

	return id;
}

function spam (store) {
	const contactId = createContact(store);

	store.dispatch(makeAction(ACTION__MESSAGES__ADD_MESSAGE, {
		conversationId: '3',
		message: '', // WORKAROUND: censor middleware will change the message
		contactId,
	}));
}

export default function (store, timer) {
	const interval = setInterval(() => spam(store), timer);

	return () => clearInterval(interval);
}
