# Forms

-   Most of your job if you become a frontend dev, it's a way for users to interact with our applications
-   Seem easy, but can get compliacted very quickly

## Two different ways to create forms in React

### using State, Controlled components

-   The value of each input is stored in state
-   we keep track of all form values at all time

### Pros

-   we have control over our form at all times
-   we can add conditional rendering, for example, some fields/buttons are disabled until I tick a checkbox
-   good for complex problems and interactions

### Cons

-   because we are using state, it re-renders on every key stroke (affect performance)
-   complex state management
-   might need to use useEffect

### useRef

-   useRef allows us to store values, but when we update that value, it doesn't cause a re-render
-   useRefs allows us to create references to DOM elements without going through the virtual dom
-   just because we can access elements directly with useRefs,

### Pros

-   Less re-renders
-   We don't have to manage complex pieces of state

### Cons

-   Error management can become complex
-   A lot harder to do conditional rendering

## Creating forms using libraries

-   We don't need to re-wrote boilerplate code over and over, for every form that we create

-   React Hook Form
    -   user refs
    -   great documentation
    -   very regularly updated
    -   created by an Australia
    -   zod for validation
