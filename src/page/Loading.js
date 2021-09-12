import '../style/Loading.css'
export default function Loading(props){
    const text = props.text || 'Loading...';//tuong duong if props.text===undefined => text = 'Loading', else text = props.text
    const delay = 0.5;
    const letters = [...text].map((letter, id) => 
        <span key={id} style={{animationDelay: id*delay + 's', animationDuration: text.length/2 + 's'}}>{letter}</span>
    );
    return(
        <div className="page loading">
            <h1>{letters}</h1>
        </div>
    )
}