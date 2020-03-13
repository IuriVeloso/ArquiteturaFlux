import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from "./pages/home/index";
import Cart from "./pages/cart/index";

export default function Routes (){
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/carrinho' exact component={Cart}/>
        </Switch>
    );
}
