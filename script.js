import {store, increaseAction, decreaseAction, resetAction} from './store.js';


const counterDisplay = document.getElementById('counterDisplay')

const render = () => {
    counterDisplay.textContent = store.getState().tally;
}

store.subscribe(render);

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

// initial render
render();