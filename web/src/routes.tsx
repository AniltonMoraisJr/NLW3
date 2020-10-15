import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/landing';
import OrphanageMap from './pages/orphanageMap';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}></Route>
                <Route path="/app" component={OrphanageMap}></Route>            
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;