// Creating a 'store' to manage the state of our counter.
import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

// Defining the shape of our store
interface CounterStore {
    counter: number;
    max: number;
    increment: () => void;
    reset: () => void;
}

// set : function for updating state of the store.
// returned object : initial state of the store.

// ({}) : we are returning an object; if just {}, appears we are inserting code.
// the set function will merge the property with itself, negating the need for the spread operator.
const useCounterStore = create<CounterStore>(set => ({
    counter: 0,
    max: 5,
    increment: () => set(store => ({counter: store.counter + 1})),
    reset: () => set(() => ({max: 10}))
}));

// Process --> known object (needing type declarations for node) : npm i -D @types/node
// npm i -D react-error-overlay@6.0.9
if (import.meta.env.NODE_DEV === 'development') {
    mountStoreDevtool("Counter store", useCounterStore);
}

export default useCounterStore;