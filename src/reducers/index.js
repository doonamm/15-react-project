import {combineReducers} from 'redux';
import BudReducer from './BudReducer';

const validReducers = function(){return 1;}

const Reducers = combineReducers({
   validReducers,
   BudReducer
});

export default Reducers;