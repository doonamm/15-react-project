import { Link } from "react-router-dom";
import '../style/Color.css';
import { useState } from "react";
import Values from 'values.js';
import SingleColor from "../components/SingleColor";

export default function Color(){
    const [color, setColor] = useState('#');
    const [list, setList] = useState([]);
    const [error, setError] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        try{
            const colors = new Values(color).all(10);
            setList(colors);
            setError(false);
        }
        catch(error){
            setError(true);
            console.log(error);
        }
    }

    function handleChange(e){
        if(e.target.value !== '')
            setColor(e.target.value);
    }
    return(
        <div className="page color">
            <h1>Color Page</h1>
            <Link to="/" className="back-home">Home</Link>
            <div className="section">
                <h2>Color Generator</h2>
                <form onSubmit={handleSubmit}>
                    <input className={`${error ? 'error' : null}`} type="text" onChange={handleChange} value={color} name="color"/>
                    <button type="submit">Submit</button>
                </form>
                <div className="color-container">
                    {
                        list.map((color, id) => <SingleColor key={id} {...color}/>)
                    }
                </div>
            </div>
        </div>
    );
}