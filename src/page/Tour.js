import '../style/Tour.css';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import TourList from '../components/TourList';
const url = 'https://course-api.com/react-tours-project';

export default function Tour(){
    const [loading, setLoading] = useState(false);
    const [tourList, setTourList] = useState([]);

    async function fetchApi(){
        setLoading(true);
        try{
            const response = await fetch(url);
            const dataJson = await response.json();
            setLoading(false);
            setTourList(dataJson);
        }
        catch(error){
            setLoading(false);
            console.log(error);
        }
    }

    function removeTour(id){
        const newData = tourList.filter(data => data.id !== id);
        setTourList(newData);
    }

    function handleRefresh(){
        fetchApi();
    }

    useEffect(()=>fetchApi(), []);

    if(loading)
        return(
            <Loading/>
        )
    return(
        <div className="page tour">
            <h1>Tour Page</h1>
            <Link to="/" className="back-home">Home</Link>
            <div className="section">
                <h2 className="title">{tourList.length > 0 ? 'Our Tours' : 'No Tours Left'}</h2>
                {
                tourList.length > 0 
                    ? <TourList data={tourList} removeTour={removeTour}/>
                    : <button className="refresh-btn" onClick={handleRefresh}>Refresh</button>
                }
            </div>
        </div>
    );
}