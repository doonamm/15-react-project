const defaultBudList = [
    {
        id: Math.random(),
        data: 'eggs'
    },
    {
        id: Math.random(),
        data: 'meat'
    },
    {
        id: Math.random(),
        data: 'fish'
    },
    {
        id: Math.random(),
        data: 'ThuLe'
    }
]
export default function BudReducer(state = defaultBudList, action){
    switch(action.type){
        case 'BUD_ADD':
            return [...state, action.payload];
        case 'BUD_CLEAR':
            return [];
        case 'BUD_REMOVE':
            return [...state.filter((item)=> item.id !== action.payload.id)];
        case 'BUD_EDIT':
            state.forEach((item, index)=>{
                if(item.id === action.payload.id){
                    state[index].data = action.payload.newData.data;
                }
            });
            return state;
        default:
            return state;
    }
}