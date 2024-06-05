const redux = require('redux');

const INITIAL_VALUE = {
    counter: 0
};

// Reducer function to handle different actions
const reducer = (store = INITIAL_VALUE, action) => {
    let newStore = store
    if(action.type === 'INCREMENT'){
        return { counter: store.counter + 1 };
        
    }else if(action.type === "DECREMENT"){
        newStore = {counter: store.counter-1}
    }else if(action.type === "ADDITION"){
        newStore = {counter: store.counter + action.payload.number}
    }
    return newStore;
};

// Create the Redux store with the reducer
const store = redux.createStore(reducer);

// Subscriber function to log the state whenever it changes
const subscriber = () => {
    const state = store.getState();
    console.log(state);
};

// Subscribe to store updates
store.subscribe(subscriber);

// Dispatch an action to increment the counter
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'ADDITION', payload:{number:7} });
