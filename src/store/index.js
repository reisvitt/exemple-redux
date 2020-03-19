import { createStore } from 'redux'

const INICIAL_STATE = []


function reducer(state = INICIAL_STATE, action){
    
    console.log("OK")
    if(action.type == "ADD_TASK"){
       
    }
    switch(action.type){
        case "ADD_TASK":
            return [...state, action.task]
        case "DELETE_TASK":
            return state.filter( (task) => task != action.task)
    }

    return state
}

const store = createStore(reducer)

export default store