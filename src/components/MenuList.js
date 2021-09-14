import MenuListItem from "./MenuListItem";
export default function MenuList(props){
    const data_list = props.list.map(data => <MenuListItem key={data.id} data={data}/>);
    return(
        <ul className="list">
            {data_list}
        </ul>
    );
}