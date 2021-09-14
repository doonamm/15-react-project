import '../style/Experience.css';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Loading from './Loading';
import ExpContent from '../components/ExpContent';
const dataUrl = 'https://course-api.com/react-tabs-project';

export default function Experience(){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [currentIndex, setIndex] = useState(0);

    useEffect(()=>{
        fetchData();
    }, []);

    async function fetchData(){
        try{
            const response = await fetch(dataUrl);
            const dataJson = await response.json();
            setData(dataJson);
        }
        catch(e){
            console.log(e);
        }
        finally{
            setLoading(false);
        }
    }
    if(loading)
        return(
            <Loading/>
        );
    return(
        <div className="page exp">
            <h1>Experience Page</h1>
            <Link to="/" className="back-home">Home</Link>
            <div className="section">
                <h2>Experience</h2>
                <div className="content">
                    <ul className="switch-btn">
                        {data.map((data, id)=> 
                            <button key={data.id} className={id === currentIndex ? 'active' : null} onClick={()=>setIndex(id)}>{data.company}</button> 
                        )}
                    </ul>
                    <ExpContent {...data[currentIndex]}/>
                </div>
                <button className="more-btn">MORE INFO</button>
            </div>
        </div>
    );
}