import './core/utils/polyfills';

import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import { configureStore } from './core/store/bootstrapper';
import initialState from './configs/storeInitialState';

import { setLocale } from './core/locale/utils';
import { checkPlatform, monitor } from './core/utils/platformMonitor';

import 'moment/locale/ru';

import spamBot from './core/bot';

import { Provider } from 'react-redux';
import App from './modules/app/components/app';

import './index.css';


const store = configureStore({ initialState });

checkPlatform({ store });
monitor({ store });

setLocale('ru');

// console.dir(store.getState());

const botTerminateCallback = spamBot(store, 5000);
// we don't want to take all memory
setTimeout(botTerminateCallback, 1000 * 60 * 10);

ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById('root'));
registerServiceWorker();
