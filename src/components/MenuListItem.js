export default function MenuListItem(props){
    const {title, price, img, desc} = props.data;
    return(
        <li className="item">
            <img src={img} alt=""/>
            <div className="info">
                <div className="top">
                    <h3 className="title">{title}</h3>
                    <span className="price">${price}</span>
                </div>
                <p>{desc}</p>
            </div>
        </li>
    );
}