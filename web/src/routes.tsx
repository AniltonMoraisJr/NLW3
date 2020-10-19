import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateOrphanage from './pages/createOrphanage';
import Landing from './pages/landing';
import Orphanage from './pages/orphanage';
import OrphanageMap from './pages/orphanageMap';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}></Route>
                <Route path="/app" component={OrphanageMap}></Route>            
                <Route path="/orphanages/create" component={CreateOrphanage}></Route>            
                <Route path="/orphanages/:id" component={Orphanage}></Route>            
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;