// Creating a 'store' to manage the state of our counter.
import { create } from "zustand";

// Defining the shape of our store
interface CounterStore {
    counter: number;
    increment: () => void;
    reset: () => void;
}

// set : function for updating state of the store.
// returned object : initial state of the store.

// ({}) : we are returning an object; if just {}, appears we are inserting code.
// the set function will merge the property with itself, negating the need for the spread operator.
const useCounterStore = create<CounterStore>(set => ({
    counter: 0,
    increment: () => set(store => ({counter: store.counter + 1})),
    reset: () => set(() => ({counter: 0}))
}));

export default useCounterStore;