import BudRemove from '../actions/BudRemove';
import { connect } from 'react-redux';
function BudListItem(props){
    function handleRemove(){
        props.remove(props.id);
        props.alert('success', 'item removed');
    }

    function handleEdit(){
        props.edit(props.id, props.data);
        props.alert('success', 'enter new value');
    }
    return(
        <li>
            <p>{props.data}</p>
            <button className="edit-btn" onClick={handleEdit}>E</button>
            <button className="remove-btn" onClick={handleRemove}>X</button>
        </li>
    );
}

const mapDispatchToProps = {
    remove: BudRemove
}

export default connect(null, mapDispatchToProps)(BudListItem);