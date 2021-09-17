export default function BudRemove(id){
    return{
        type: 'BUD_REMOVE',
        payload:{
            id: id
        }
    }
}