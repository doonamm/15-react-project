import '../style/Lorem.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import DATA from '../data/Lorem';


export default function Lorem(){
    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);
    function handleChange(e){
        const value = e.target.value;
        if(value >= 0 && value <= 8){
            setCount(value);
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        const amount = parseInt(count);
        setText(DATA.slice(0, amount));
    }

    return(
        <div className="page lorem">
            <h1>Lorem Page</h1>
            <Link to="/" className="back-home">Home</Link>
            <div className="section">
                <h2>tired of boring lorem ipsum?</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Paragraphs:<input value={count} name="count" onChange={handleChange} type="number"/>
                    </label>
                    <button type="submit">GENERATE</button>
                </form>
                <div className="text">
                    {
                        text.map((item, id) => <p key={id}>{item}</p>)
                    }
                </div>
            </div>
        </div>
    );
}