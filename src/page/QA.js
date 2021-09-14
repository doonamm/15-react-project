import '../style/QA.css';
import {Link} from 'react-router-dom';
import QAList from '../components/QAList';
import DATA from '../data/QA';

export default function QA(){
    return (
        <div className="page qa">
            <h1>QA Page</h1>
            <Link to="/" className="back-home">Home</Link>
            <div className="section">
                <h2>Questions And Answers About Login</h2>
                <QAList list={DATA}/>
            </div>
        </div>
    );
}