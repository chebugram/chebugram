import moment from 'moment';


/**
 * @param {StoreMessage.time} unixTime
 *
 * @returns {string}
 */
export function getMessageTime (unixTime) {
	const date = moment(unixTime);

	if ( moment().isSame(date, 'd') ) {
		return date.format('HH:mm');
	}

	return date.format('L HH:mm');
}

