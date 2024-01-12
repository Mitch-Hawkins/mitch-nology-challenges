# UseEffect

-   Hook that allows us to perform side effects based on state change

-   We choose what piece of state we want to watch
-   When that state changes, we run the code specified inside useEffect

## What could be a side effect?

-   Any action or behaviour not necessarily related to rendering
-   Update the title of my document
-   Make an API call
-   Subscribe to webhooks
-   setting counters, timeouts, intervals

## Component lifecycle

1. Load - before the component is rendered to the page
2. Mount - when it first gets rendered to the page
3. Update - when a component re-renders based on state change or change in props
4. Unmount - when the component is removed from the dom'

## useEffect returns cleanup function

UseEffect lets us run code for one of those fazes

Disclaimer
There is an experimental feature on React that causes every component to render twice (mount, unmount, then mount again)
You can switch it off by turning off strict mode
