export function Todos(state=[], action){
    switch (action.type) {
        case 'ADD_TODOS': return state.concat([action.type])
        default: state
    }
}
