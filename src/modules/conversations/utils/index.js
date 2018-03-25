import { selectContact } from '../../contacts/selectors';
import { selectChannel } from '../../channels/selectors';

import {
	CONVERSATION_TYPE__CONTACT,
	CONVERSATION_TYPE__CHANNEL,
} from '../constants';

import { getLocalizedName } from '../../../core/locale/utils';


/**
 * @param {Object} options
 * @param {StoreConversation.type} options.type
 * @param {StoreConversation.entityId} options.entityId
 * @param {StoreState} options.state
 *
 * @returns {{ title: string, image: string }}
 */
export function getEntityProps (options) {
	switch (options.type) {
		case CONVERSATION_TYPE__CONTACT:
			const contact = selectContact(options.state, { id: options.entityId });
			return {
				title: getLocalizedName(contact),
				image: contact.avatarUrl,
			};
		case CONVERSATION_TYPE__CHANNEL:
			const channel = selectChannel(options.state, { id: options.entityId });
			return {
				title: channel.name,
				image: '',
			};
		default:
			throw new Error(`unsupported entity type: ${options.type}`);
	}
}
