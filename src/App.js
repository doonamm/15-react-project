import './App.css';
import './style/index.css'
import {Route, Switch} from 'react-router-dom';
import Home from './page/Home';
import Birthday from './page/Birthday';
import Tour from './page/Tour';
import Reviews from './page/Reviews';
import QA from './page/QA';
import Menu from './page/Menu';
import Experience from './page/Experience';
import Slider from './page/Slider';
import Lorem from './page/Lorem';
import Color from './page/Color';
import Bud from './page/Bud';
import NavBar from './page/NavBar';
import SideBar from './page/SideBar';

function App() {
    return ( 
        <>
            <Switch>
                <Route path="/sidebar" component={SideBar} />
                <Route path="/navbar" component={NavBar} />
                <Route path="/bud" component={Bud} />
                <Route path="/color" component={Color} />
                <Route path="/lorem" component={Lorem} />
                <Route path="/slider" component={Slider} />
                <Route path="/experience" component={Experience} />
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