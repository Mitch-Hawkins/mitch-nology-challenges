# Context

Context is a solution to prop drilling (passing props down multiple levels in out component tree)

I can create context that is a piece of state and give access to it to all the children components of that context, even to my entire app without having to worry about passing down props.

Instead, each component, doesn't matter how deeply nested, can access the "global" state directly, using useContext hook.
