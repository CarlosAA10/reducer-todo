

export const Reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return{ }; 
        case 'CLEAR_TODO':
            return { }; 
        default: 
            return state; 
    }; 
 
}

export  const initialState = [ 
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
];



//  const  Reducer = () => {
//     return(
//         [reducer, initialState]
//     )
// }

// export default Reducer; 


