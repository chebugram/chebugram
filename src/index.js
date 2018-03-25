import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import { configureStore } from './core/store/bootstrapper';

import initialState from './configs/storeInitialState';

import { Provider } from 'react-redux';
import AppEntry from './modules/app/components/entry';

import './index.css';


ReactDOM.render((
	<Provider store={configureStore({ initialState })}>
		<AppEntry />
	</Provider>
), document.getElementById('root'));
registerServiceWorker();
