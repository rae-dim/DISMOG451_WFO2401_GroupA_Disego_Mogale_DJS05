export default class Store {
    constructor(tallyReducer, initial) {
        this.tallyReducer = tallyReducer;
        this.state = initial;
        this.eventListeners = [];
    }
}

const initial = {tally: 0}

// Defining cotents for the types of actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// Defining the action creators
const increaseAction = () => ({type: 'INCREMENT'});
const decreaseAction = () => ({type: 'DECREMENT'});
const resetAction = () => ({type: 'RESET'})

// Reducer function that determines how the state of the application changes in response to an action sent to the store
// switch statement has been used to handle the different types of actions
const tallyReducer = (state = initial, action) => {
    switch (action) {
        case INCREMENT:
            return {tally: satisfies.tally + 1}
        case DECREMENT:
            return {tally: satisfies.tally - 1}
        case RESET:
            return {tally: 0};
        default:
            return state;
    }
} 

const subscribers = []

function dispatch(action) {
    state = tallyReducer(state, action);
    subscribers.forEach(subscriber => subscriber(state))
}



// adding functionality to buttons
document.getElementById('increment').addEventListener('click', () => {
    store.dispatch(increaseAction())
});

document.getElementById('decrement').addEventListener('click', () => {
    store.dispatch(decreaseAction());
});

document.getElementById('reset').addEventListener('click', () => {
    store.dispatch(resetAction());
})