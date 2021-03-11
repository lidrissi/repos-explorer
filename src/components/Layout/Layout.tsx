import React from 'react';
import { Switch, Route } from "react-router-dom";
import Repositories from '../Repository/Repositories';
import Topics from '../Topic/Topics';
import Users from '../User/Users';

const Layout = () => (
    <div className="sm:container mx-auto">
        <Switch>
            <Route path="/projects">
                <Repositories />
            </Route>
            <Route path="/users">
                <Users />
            </Route>
            <Route path="/topics">
                <Topics />
            </Route>
        </Switch>
    </div>
)

export default Layout;