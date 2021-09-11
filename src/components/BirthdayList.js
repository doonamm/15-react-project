export default function BirthdayList(props){
    const list = props.list.map(data=>
        <li key={data.id}>
            <img src={data.image} width="60" height="60" alt=""/>
            <div>
                <h3>{data.name}</h3>
                <p>{data.age} years</p>
            </div>
        </li>
    );
    return(
        <ul>
            {list}
        </ul>
    )
}