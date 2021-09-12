import './App.css';
import './style/index.css'
import {Route, Switch} from 'react-router-dom';
import Home from './page/Home';
import Birthday from './page/Birthday';
import Tour from './page/Tour';

function App() {
    return ( 
        <>
            <Switch>
                <Route path="/tour" component={Tour} />
                <Route path="/birthday" component={Birthday} exact/>
                <Route path="/" component={Home} exact/>
            </Switch>
        </>
    );
}

export default App;