import QAListItem from "./QAListItem";

export default function QAList(props){
    const list = props.list.map(itemData => <QAListItem key={itemData.id} {...itemData}/>);
    return(
        <ul className="list">
            {list}
        </ul>
    );
}