import { Link } from "react-router-dom";
import '../style/Home.css';

export default function Home(){
    return(
        <div className="page home">
            <h1>Home - Landing Page</h1>
            <div className="home-link">
                <Link to="/birthday">Birthday</Link>
            </div>
        </div>
    );
}