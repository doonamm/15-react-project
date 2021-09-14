import './App.css';
import './style/index.css'
import {Route, Switch} from 'react-router-dom';
import Home from './page/Home';
import Birthday from './page/Birthday';
import Tour from './page/Tour';
import Reviews from './page/Reviews';
import QA from './page/QA';
import Menu from './page/Menu';

function App() {
    return ( 
        <>
            <Switch>
                <Route path="/menu" component={Menu} />
                <Route path="/qa" component={QA} />
                <Route path="/reviews" component={Reviews} />
                <Route path="/tour" component={Tour} />
                <Route path="/birthday" component={Birthday} exact/>
                <Route path="/" component={Home} exact/>
            </Switch>
        </>
    );
}

export default App;