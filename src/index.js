import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import storeInstance from './redux/store.js';
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
