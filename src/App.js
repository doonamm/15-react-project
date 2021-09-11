import './App.css';
import './style/index.css'
import {Route, Switch} from 'react-router-dom';
import Home from './page/Home';
import Birthday from './page/Birthday';

function App() {
    return ( 
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/birthday" component={Birthday} exact/>
        </Switch>
    );
}

export default App;