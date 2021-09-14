import { useState } from "react";
export default function QAListItem(props){
    const {title, info} = props;
    const [answer, setAnswer] = useState(false);

    function handleToggle(){
        setAnswer((prevState)=>!prevState);
    }

    return(
        <li className="item">
            <div className="top">
                <h3>{title}</h3>
                <button onClick={handleToggle}>{answer === false ? '+' : '-'}</button>
            </div>
            {answer === false ? null : <p className="info">{info}</p>}
        </li>
    );
}