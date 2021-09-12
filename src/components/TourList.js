
import TourListItem from "./TourListItem";
export default function TourList(props){
    const dataList = props.data.map(data=><TourListItem key={data.id} data={data} removeTour={props.removeTour}/>);
    return(
        <ul>
            {dataList}
        </ul>
    )
}