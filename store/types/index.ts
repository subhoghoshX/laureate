export * from "./gradientState";
export * from "./cardState";
export * from "./arrowState";
export * from "./panState";
export * from "./tweetState";
export * from "./templateState";

/*

This project uses Zustand. Zustand is an unopinionated state management library.
And it is pretty flexible when it comes to how we organize our states & actions.
This flexibility sometimes lead to inconsistent code.

After experimenting with different patterns, I have came up with a few rules for
actions/states that I think works best in this project.

Here we go:

1. There should be a corresponding action for each state

2. Every action must only change the corresponding state

3. We must always pass a callback in action when calling
   it and return the final state from that callback.

4. Each callback will only have access to only the state
   that it can use to calculate the new state associated
   with the action, and not the whole state.

5. Action name should start with "set" like react states

*/