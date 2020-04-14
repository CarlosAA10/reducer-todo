
export  const initialState =  {
    todos: [ 
        {
            item: 'Set up Reducers', 
            completed: false, 
            id: 36444
        }, 
        {
            item: 'Finish reducers', 
            completed: false, 
            id: 24587
        },
    ], 
    count: 0, 
}

export const Reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            const obj = {
                item:action.payload, 
                completed: false, 
                id: Date.now(),
            }
            return{ 
                todos:[ ...state.todos, 
                obj, ]
             }; 
        case 'MAKE_COMPLETED':
            console.log('the action payload', action.payload)
            return { 
                ...state,
                todos: state.todos.map(task => {
                    console.log(task)
                    if( action.payload === task.id) {
                        return{
                            ...task, 
                            completed: !task.completed
                        }
                    } else {
                        return task; 
                    }
                })
             }; 
        case 'DELETE_TODO': 
             return{
                 todos: state.todos.filter(task => {
                     return !task.completed; 
                 })
             }
        default: 
            return state; 
    }; 
 
}





//  const  Reducer = () => {
//     return(
//         [reducer, initialState]
//     )
// }

// export default Reducer; 


