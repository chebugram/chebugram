import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import { configureStore } from './core/store/bootstrapper';
import initialState from './configs/storeInitialState';

import { setLocale } from './core/locale/utils';
import { isSmallScreen } from './core/utils';
import { showContersationList } from './modules/app/actions';

import 'moment/locale/ru';

import spamBot from './core/bot';

import { Provider } from 'react-redux';
import App from './modules/app/components/app';

import './index.css';


const store = configureStore({ initialState });

if ( isSmallScreen() ) {
	store.dispatch(showContersationList(false));
}

setLocale('ru');

console.dir(store.getState());

spamBot(store, 5000);

ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById('root'));
registerServiceWorker();
