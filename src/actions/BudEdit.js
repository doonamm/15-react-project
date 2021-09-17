export default function BudEdit(id, text){
    return{
        type: 'BUD_EDIT',
        payload: {
            id: id,
            newData: {
                data: text
            }
        }
    }
}