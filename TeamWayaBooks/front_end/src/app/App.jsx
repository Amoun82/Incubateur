import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import RoutesWithNavigation from './routes/RoutesWithNavigation';
import { store } from './shared/redux-store/store';

/**
 * Component APP
 * with:
 * 	- creation of redux store
 * @author Peter Mollet
 */
const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <RoutesWithNavigation />
            </BrowserRouter>
        </Provider>
    );
};

export default App;
