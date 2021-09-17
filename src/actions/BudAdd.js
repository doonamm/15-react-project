
export default function BudAdd(text){
    return{
        type: 'BUD_ADD',
        payload: {
            data: text,
            id: Math.random()
        }
    }
}