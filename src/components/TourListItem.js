import { useState } from "react";
export default function TourListItem(props){
    const [readMore, setReadMore] = useState(false);
    const data = props.data;
    function handleShowButton(){
        setReadMore(!readMore);
    }
    function hanldeRemoveTour(){
        props.removeTour(data.id);
    }
    return(
        <li className="tour-item">
            <img src={data.image} alt=""/>
            <div>
                <div className="title">
                    <h3>{data.name}</h3>
                    <span>${data.price}</span>
                </div>
                <div className="detail">
                    <p>{readMore === false ? `${data.info.substring(0, 200)}...` : data.info}</p>
                    <button onClick={handleShowButton}>{readMore === false ? 'Read More' : 'Show Less'}</button>
                </div>
                <button className="not-inter-btn" onClick={hanldeRemoveTour}>Not Interested</button>
            </div>
        </li>
    );
}