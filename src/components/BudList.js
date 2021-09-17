import BudListItem from "./BudListItem";

export default function BudList(props){
    const dataList = props.data.map((dataItem) => <BudListItem edit={props.edit} alert={props.alert} key={dataItem.id} {...dataItem}/>);
    return(
        <ul>
            {dataList}
        </ul>
    );
}