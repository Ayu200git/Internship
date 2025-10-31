const redux = require("redux");
const produce = require("immer").produce;
const initialState  = {
    name: "ayush",
    address: {
          street: "56/76",
          city: "jalesar",
          state: "Up"   
    }

}

const STREET_UPDATE = "STREET_UPDAE"
const updateStreet = (street) => {
    return {
        type: STREET_UPDATE,
        payload: street, 
    };
} 
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case STREET_UPDATE:
            // return {
            //     ...state,
            //     address:{
            //          ...state.address,
            //          street: action.payload,
            //     }
            // };
            //using library immer and produce method rather then defining nested-states
            return produce(state, (draft) => {
                draft.address.street = action.payload
            })
        default: {
                return state
        }
            
    }
}

const store = redux.createStore(reducer)
console.log("initial State: ", store.getState())
const unsuscribe = store.subscribe(() => {
    console.log("updated state: ", store.getState())
})
store.dispatch(updateStreet("23/76"))
unsuscribe()