import React from "react";
import { Switch, Route, Link } from "react-router-dom";

export default function App(){
    return(
<div>
    
    <ul>
        <li>
            <a href="/about">About with anchor</a>
        </li>
        <li>
            {/* change the url bar but don't refresh */}
            <Link to = "/somewhere">Name of the link</Link>
        </li>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
            <Link to ="/about">About</Link>
        </li>
        <li>
            <Link to ="/dashboard">About</Link>
        </li>
    </ul>
<hr />

        {/* A <Switch> looks through all its child elements and renders the first one 
            which matches the current URL. Use a <Switch> you have multiple routers, but you want ...of them to render at a time. */}

<Switch>
<Route path="/about">
    <h1>Hi, B30WD </h1>
    <About />
</Route>
<Route path="/dashboard">
    <Dashboard />
</Route>
<Route path="/">
    <Home />
</Route>
</Switch>

</div>



        
    )
}