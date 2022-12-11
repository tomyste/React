const initialState = [{
    id:1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false
}


const todoReducer = ( state = initialState, action = {} ) => {
    
    if ( action.type === '[TODO] add todo' ){
        return [...state, action.payload]
    }

    return state;
}

let todos = todoReducer();



const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer( todos, addTodoAction )

console.log( { state: todos })
