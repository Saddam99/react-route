import React from 'react';
import Home from "./Home";
import Features from "./Features";
import Contact from "./Contact";
import {Route, Switch} from "react-router-dom"
import NotFound from "./NotFound";
import LearnMore from "./LearnMore";

function Main() {
    return (
        <div className="main">
            <Switch>
                <Route exact path={'/'}>
                    <Home />
                </Route>
                <Route path={'/features'}>
                    <Features />
                </Route>
                <Route path={'/contact'}>
                    <Contact />
                </Route>
                <Route path='/learn-more'>
                    <LearnMore />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>

        </div>
    );
}

export default Main;