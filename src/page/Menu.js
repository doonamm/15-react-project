import '../style/Menu.css';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import DATA from '../data/Menu';
import MenuList from '../components/MenuList';
import MenuFilter from '../components/MenuFilter';
const allCategories = [
    'all',
    ...new Set(DATA.map(data=>data.category))
];
export default function Menu(){
    const [list, setList] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(allCategories[0]);
    
    function filter(category){
        setCurrentCategory(category);
    }

    useEffect(()=>{
        if(currentCategory === 'all')
            setList(DATA);
        else{
            const newList = DATA.filter(data=> data.category === currentCategory);
            setList(newList);
        }
    }, [currentCategory]);

    return(
        <div className="page menu">
            <h1>Menu Page</h1>
            <Link to="/" className="back-home">Home</Link>
            <div className="section">
                <h2>Our Menu</h2>
                <MenuFilter categories={allCategories} filter={filter} />
                <MenuList list={list}/>
            </div>
        </div>
    );
}