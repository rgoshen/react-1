### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

  - Front end framework that allows us to build front end applications. React has reusable components that know how to render themselves and can be reused. React also has re-rendering when state changes which can make it easy to make single page applications.

- What is Babel?

  - A transpiler that can covert JSX which cannot be read by the browser into JS which can.

- What is JSX?

  - It is very much like writing HTML in JS although it isn't valid HTML or JS. It allows us to write React components very easily and then it is converted with Babel for the browser.

- How is a Component created in React?

  - By writing a function that returns some JSX. The function is called whenever you write that component inside of JSX tags.

- What are some difference between state and props?

  - Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. Props are immutable where is state is muttable. Props can be uses with state and functional components. State can be used only with the state components/class component (before 16.0). Props are read-only where state is both read and write.

- What does "downward data flow" refer to in React?

  - Downward data flow is the idea that parent components pass data down to their children via props. In order to make data go the other way, we have to pass a function down from the parent that the child can then call with some information.

- What is a controlled component?

  - One that is controlled by react and that state is always controlled by react. For example, in an input field in a form when the input is text react should control the state of the input so that it can use it. There could be issues if react is not aware of the changes being made in the DOM when compared to it's virtual DOM.

- What is an uncontrolled component?

  - An uncontrolled component is one where react it not aware of the state change. It is very uncommon to need to use an uncontrolled component, but it can happen in the event of 3rd party libraries and inputs for uploading files.

- What is the purpose of the `key` prop when rendering a list of components?

  - It allows react to very quickly identify which components are changed so that it knows which ones to re-render very quickly. Without this performance could take a hit since react would not be able to identify quickly which component is changed.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

  - The 2 things that a key should be is stable and unique. An index would be unique but it would not be stable since the array can mutate and indices can shift around.

- Describe useEffect. What use cases is it used for in React components?

      - `useEffect` is used to run code after a rendering happens. Most commonly this is used to do something after a render, or after the initial render. Examples could include communicating with an API, syncing information to local storage, or working with timers.

- What does useRef do? Does a change to a ref value cause a rerender of a component?

  - useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component. Mutating the .current property doesn’t cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.

- When would you use a ref? When wouldn't you use one?

  - to store the number of clicks on a button or to store data side effects like timer ids or socket ids.

- What is a custom hook in React? When would you want to write one?

  - Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.
