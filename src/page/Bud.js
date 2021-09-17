import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../style/Bud.css';
import {connect} from 'react-redux';
import BudAdd from '../actions/BudAdd';
import BudList from '../components/BudList';
import BudClear from '../actions/BudClear';
import BudEdit from '../actions/BudEdit';

function Bud(props){
    const [text, setText] = useState('');
    const [triggerEdit, setTriggerEdit] = useState({state: false, id: null});
    const [alert, setAlert] = useState({active: false, type: null, message: null});

    function handleSubmit(e){
        e.preventDefault();
        if(triggerEdit.state === true){
            if(props.budList.find((item)=>item.id === triggerEdit.id)){
                triggerAlert('success', 'value changed');
            }
            else{
                triggerAlert('warning', 'item not exist');
            }
            setTriggerEdit({
                state: false,
                id: null
            });
        }
        else if(text !== ''){
            props.add(text);
            triggerAlert('success', 'item added');
        }
        else{
            if(!alert.active)
                triggerAlert('warning', 'please enter value');
        }
        setText('');
    }

    function triggerAlert(type, msg){
        setAlert({
            active: true,
            type: type,
            message: msg
        });
    }

    useEffect(()=>{
        let trigger;
        if(alert.active)
            trigger = setTimeout(()=>{
                setAlert({
                    active: false,
                    type: null,
                    message: null
                });
            }, 2500);
        return ()=>clearTimeout(trigger);
    }, [alert])

    function handleClear(e){
        props.clear();
        triggerAlert('success', 'empty list');
    }

    function handleTriggerEdit(id, text){
        setText(text);
        setTriggerEdit({
            state: true,
            id: id
        });
    }

    return(
        <div className="page bud">
            <h1>Bud Page</h1>
            <Link to="/" className="back-home">Home</Link>
            <div className="section">
                <p className={`alert ${alert.active ? alert.type : null}`}>{alert.message}</p>
                <h2>Grocery Bud</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="text" value={text} onChange={(e)=>setText(e.target.value)}/>
                    <button type="submit">Submit</button>
                </form>
                <BudList data={props.budList} edit={handleTriggerEdit} alert={triggerAlert}/>
                {props.budList.length !==0 && <button className="clear-btn" onClick={handleClear}>Clear Items</button>}
            </div>
        </div>
    );
}

const mapStateToProps = (state)=>{
    return {
        budList:  state.BudReducer
    }
}

const mapDispatchToProps = {
    add: BudAdd,
    clear: BudClear,
    edit: BudEdit
}

export default connect(mapStateToProps, mapDispatchToProps)(Bud);