export default function ExpContent(props){
    const {title, dates, duties, company} = props;
    return(
        <div className="detail">
            <h3>{title}</h3>
            <p className="company">{company}</p>
            <p className="date">{dates}</p>
            <ul>
                {duties.map((duty, id) => <li key={id}><span className="symbol">»</span><p>{duty}</p></li>)}
            </ul>
        </div>
    ); 
}