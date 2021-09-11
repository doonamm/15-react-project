import '../style/Birthday.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import DATA from '../data/Birthday';
import BirthdayList from '../components/BirthdayList';

export default function Birthday(){
    const [data, setData] = useState(DATA);

    function hanldeClearAll(){
        setData([]);
    }

    return (
        <div className="page birthday">
            <h1>Birthday Page</h1>
            <Link to="/" className="back-home">Home</Link>
            <div className="section">
                <h2>{data.length} birthdays today</h2>
                <BirthdayList list={data}/>
                <button onClick={hanldeClearAll}>Clear All</button>
            </div>
        </div>
    );
}