const redux = require("redux");
const reduxLogger = require("redux-logger");
const createStore = redux.createStore;
const bindActioncreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const logger = reduxLogger.createLogger();

const CAKE_ORDERED = "CAKE_ORDERED"
const CAKE_RESTOCKED = "CAKE_RESTOCKED"
const ICECREAM_ORDER = "ICECREAM_ORDER"
const iCECREAM_RESTOCKED = "ICECREAM_RESTOCKED"

//Three rules of Redux: Action, Reducer, Store
//Action - Order create
function ordercake(){
    return {
    type: CAKE_ORDERED,
    payload: 1,
    };
}

function orderIcecream(){
    return {
        type: ICECREAM_ORDER,
    payload: 1,
    };
}
     
function restockedCake(qty = 1){
    return {
        type: CAKE_RESTOCKED,
         payload: qty,
    };
}

function  restockedIcecream(qty = 1){
    return {
        type: iCECREAM_RESTOCKED,
        payload: qty,
    };
}

// Reducer - (previousState, action) => newState;     
// const initialState = {
//     numberofCakes: 10,  
//     numberOfIceream: 20,
// }

const initialCakestate = {
    numberofCakes: 10,
}
const initialIcecreamState = {
    numberOfIceream: 20,
}

const reducerCake = (state = initialCakestate, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberofCakes: state.numberofCakes - 1,
            };
        case CAKE_RESTOCKED:
            return {
                    ...state,
                    numberofCakes: state.numberofCakes + action.payload,
            };  

        default:
            return state;
    }
};

const reducerIcecream = (state = initialIcecreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDER:
            return{
                ...state,
                numberOfIceream: state.numberOfIceream - 1,
            };
        case iCECREAM_RESTOCKED:
            return {
                ...state,
                numberOfIceream:state.numberOfIceream + action.payload,
            }    
        default:
            return state;
    }
};

// Store - 
// combine reducers because store takes only one reducer funtion so for handling multiple reducer function we use combineReducers methos.
const rootReducer = combineReducers({
    cake: reducerCake,
    ice: reducerIcecream,
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log("initialState", store.getState())

const unsuscribe = store.subscribe(()=> {})
// store.dispatch(ordercake());
// store.dispatch(ordercake());
// store.dispatch(ordercake());
// store.dispatch(restockedCake(3));

const actions = bindActioncreators({ordercake, restockedCake, orderIcecream, restockedIcecream}, store.dispatch) 
 actions.ordercake();
 actions.ordercake();
 actions.ordercake();
 actions.restockedCake(3);
 actions.orderIcecream();
 actions.orderIcecream();
 actions.restockedIcecream(2);

 


unsuscribe();