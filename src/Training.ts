import { createStore } from 'redux';

function playlist(state: Array<string> = []) {
    return state;
}

export const store = createStore(playlist);

console.log(store.getState());

store.subscribe( () => {
    console.log("sunscribe", store.getState());
});