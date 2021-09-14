import '../style/Reviews.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DATA from '../data/Reviews';

export default function Reviews(){
    const [index, setIndex] = useState(0);
    const {name, job, image: img, text} = DATA[index];

    function checkIndex(index){
        if(index > DATA.length - 1)
            return 0;
        if(index < 0)
            return DATA.length - 1;
        return index;
    }
    function prevPerson(){
        setIndex((id)=>checkIndex(id - 1));
    }

    function nextPerson(){
        setIndex((id)=>{
            const nextIndex = id + 1;
            return checkIndex(nextIndex);
        });
    }

    function randomPerson(){
        const randomIndex = Math.floor(Math.random()*4);
        setIndex(checkIndex(randomIndex));
    }

    return(
        <div className="page reviews">
            <h1>Reviews Page</h1>
            <Link to="/" className="back-home">Home</Link>
            <div className="section">
                <h2>Our Reviews</h2>
                <div className="container">
                    <div className="img-container">
                        <img src={img} alt=""/>
                        <span className="quotes">”</span>
                    </div>
                    <h3>{name}</h3>
                    <p className="job">{job}</p>
                    <p className="text">{text}</p>
                    <div className="switch-btn">
                        <button onClick={prevPerson}> {"‹"} </button>
                        <button onClick={nextPerson}> {"›"} </button>
                    </div>
                    <button className="random-btn" onClick={randomPerson}>Surprise Me</button>
                </div>
            </div>
        </div>
    );
}