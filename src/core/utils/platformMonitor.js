import {
	APP_PLATFORM__MOBILE,
	APP_PLATFORM__DESKTOP,
} from '../constants';

import { setPlatform } from '../../modules/app/actions';
import { selectApp } from '../../modules/app/selectors';

import { isSmallScreen } from '../utils';


export function checkPlatform ({ store }) {
	const platform = selectApp(store.getState()).platform;

	if ( isSmallScreen() && platform === APP_PLATFORM__DESKTOP ) {
		store.dispatch(setPlatform(APP_PLATFORM__MOBILE));
	}
	else if ( !isSmallScreen() && platform === APP_PLATFORM__MOBILE ) {
		store.dispatch(setPlatform(APP_PLATFORM__DESKTOP));
	}
}

export function monitor ({ store }) {
	const callback = () => checkPlatform({ store });

	window.addEventListener('resize', callback, false);

	return () => {
		window.removeEventListener('resize', callback, false);
	};
}

