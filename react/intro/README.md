# What is React?

REACT IS A LIBRARY, NOT A FRAMEWORK

1. Components - Small building blocks of our application, resuable, we can customise the data they render, we can dynamically render multiple of the same component
   - Presentational component (dumb component), their role is to display things, they will containe little to no logic.
   - Container component (smart component), their role is to render presentational components, fetch data, they contain the logic of our application.
   - Page component, the entire layout of a page, they render multiple container and presentational components.
   - JSX - JS + HTML (JavaScript XML)
   - Every component is just a function that returns JSX
   - JSX get translated into plain JS
2. State/Effect - If we want to see a change in the DOM, we need to create a state variable, react doesn't keep track of regular variables

3. Virtual DOM

   - In memory copy of the actual DOM
   - Before updating the actual DOM, react updates the virtual DOM first.
   - It compares two version of virtual DOM to determine what needs updating
   - It using diffing algorithm to update the actual DOM in the most efficient way
   - Batch updates

   - Be careful with saying that Virtual DOM is faster than the actual DOM

4. Single page application

## Is it still worth learning React in 2024?

- YES, there's still a lot of jobs for react devs

- Next js - we use it for the client project.
- React with extra stuff
- Built in routing
- Better server-side rendering

If you are interested in frameworks that don't use virtual DOM:

- Solid JS
- Svelte

5. How to create a React app?

- You could build it yourself from scratch
- `npx create-react-app ${name}` (NOT SUPPORTED ANYMORE)
- vite `npm create vite@latest`

6. Props

- Short for properties
- Props is an argument for functional components
- It's a way for passing data between components
  **We can only pass props from parent to child**
