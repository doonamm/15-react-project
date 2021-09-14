export default function MenuFilter({categories, filter}){
    return(
        <div className="filter-btn">
            {categories.map((category, index) => 
                <button key={index} onClick={()=>filter(category)}>{category}</button>
            )}
        </div>
    );
}