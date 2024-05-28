// Defining contatns for the types of actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Reducer function that determines how the state of the application changes in response to an action sent to the store
// switch statement has been used to handle the different types of actions
const tallyReducer = (count = 0, action) => {
    switch (action.todo) {
        case INCREMENT:
            return count + 1;
        case DECREMENT:
            return count - 1;
        default:
            return count;
    }
} 

// Creating the redux store, we pass in the reducer
const store = Redux.createStore(tallyReducer)

// Defining the action creators
const increaseAction = () => ({todo : INCREMENT});
const decreaseAction = () => ({todo : DECREMENT});

const renderToHtml = () => {
    document.getElementById('tally').innerText = store.getState();
};

renderToHtml()

store.subscribe(renderToHtml);

// adding functionality to buttons
document.getElementById('increment').addEventListener('click', () => {
    store.dispatch(increaseAction())
});

document.getElementById('decrement').addEventListener('click', () => {
    store.dispatch(decreaseAction());
});
    