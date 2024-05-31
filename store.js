export const createStore = () => {
    const state = {tally: 0};
    const subscribers = []
}

const getState = () => state

// Defining cotents for the types of actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// Reducer function that determines how the state of the application changes in response to an action sent to the store
// switch statement has been used to handle the different types of actions
const tallyReducer = (tally = 0, action) => {
    switch (action) {
        case "INCREMENT":
            return tally += 1;
        case "DECREMENT":
            return tally -= 1;
        case "RESET":
            return tally = 0;
        default:
            return state.tally;
    }
} 

const subscribers = []

function dispatch(action) {
    state = tallyReducer(state, action);
    subscribers.forEach(subscriber => subscriber(state))
}
// Defining the action creators
const increaseAction = dispatch({type: 'INCREMENT'});
const decreaseAction = dispatch({type: 'DECREMENT'});
const resetAction = dispatch({type: 'RESET'})



store.subscribe(renderToHtml);

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