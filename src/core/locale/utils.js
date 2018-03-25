import moment from 'moment';


// TODO: only for Russian locale
export function getLocalizedName ({ firstName, lastName }) {
	return `${firstName} ${lastName}`;
}

export function setLocale (locale) {
	moment.locale(locale);
}
