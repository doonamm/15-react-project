import '../style/Slider.css';
import {Link} from 'react-router-dom';
import DATA from '../data/Slider';
import { useState, useEffect } from 'react';

export default function Slider(){
    const [people] = useState(DATA);
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        const lastIndex = people.length - 1;
        if(index < 0)
            setIndex(lastIndex);
        else if (index > lastIndex)
            setIndex(0);
    }, [index, people]);

    useEffect(()=>{
        let autoSlide = setInterval(()=>setIndex(index + 1), 2000);
        return ()=>clearInterval(autoSlide);
    }, [index]);

    function peopleMap(person, personIndex){
        let pos = 'next';
        if(personIndex === index)
            pos = 'active';
        if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1))
            pos = 'last';
        
        return(
            <div key={person.id} className={`person ${pos}`}>
                <img src={person.image} alt=""/>
                <p className="name">{person.name}</p>
                <p className="title">{person.title}</p>
                <p className="quote">{person.quote}</p>
            </div>
        );
    }
    
    return(
        <div className="page slider">
            <h1>Slider Page</h1>
            <Link to="/" className="back-home">Home</Link>
            <div className="section">
                <h2><span>/</span>Reviews</h2>
                <div className="people-container">
                    {
                        people.map(peopleMap)
                    }
                    <button onClick={()=>setIndex(index - 1)} className="btn prev-btn"> {'<'} </button>
                    <button onClick={()=>setIndex(index + 1)} className="btn next-btn"> {'>'} </button>
                </div>
            </div>
        </div>
    );
}