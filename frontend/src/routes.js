import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
//BrowserRouter precisa estar por  volta de tudo
//Switch gerencia para que somente uma rota seja executada por vez
//propriedade exact para que outras rotas além da raiz possam ser acessadas

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/"  exact component={Login}/> 
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/incidents/new" component={NewIncident}/>
            </Switch>
        </BrowserRouter>
    );
}
        