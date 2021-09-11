import './App.css';
import './style/index.css'
import {Route, Switch, useLocation, useRouteMatch} from 'react-router-dom';
import Home from './page/Home';
import Birthday from './page/Birthday';
import { Link } from 'react-router-dom';

function App() {
    const path = useLocation();
    const path2 = useRouteMatch();
    console.log(path.pathname, path2);
    return ( 
        <>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/birthday" component={Birthday} exact/>
            </Switch>
        </>
    );
}

export default App;