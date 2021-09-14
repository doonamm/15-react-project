import { Link } from "react-router-dom";
import '../style/Home.css';

export default function Home(){
    return(
        <div className="page home">
            <h1>Home - Landing Page</h1>
            <div className="home-link">
                <Link to="/birthday">Birthday</Link>
                <Link to="/tour">Tour</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/qa">Q {'&'} A</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/experience">Experience</Link>
            </div>
        </div>
    );
}