# Learning React

This repository contains the code and notes from my React learning process.

## Approach

- **Introduction to React**: Basics of React and its core concepts.
- **Components**: Examples of functional and class components.
- **JSX**: Writing React components using JSX.
- **Props and State**: How to use props and manage state in React.
- **Hooks**: Learning React hooks like `useState` and `useEffect`.
- **Projects**: Small projects and exercises to apply React knowledge.

## Resources

YouTube playlist - <https://www.youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige> <br>
Official React Docs - https://react.dev/learn

## Projects made

1. Bg Changer
![Background Changer](./images/bgChanger.png "Background Changer")
From this project I learnt how to use useState hook in project, state management and how the function updates the state.


2. Password Generator
![Password Generator](./images/passwordGenerator.png "Password Generator")
In this project I learnt how to use useCallback Hook, useState, useRef and useEffect hook. <br>
useCallback - here I used for optimization, to cache function in the memory. ,<br>
useEffect - to run the function if any dependency changes. <br>
useState - all the state management is done using useState hook.  <br>
useRef - to take reference of password while copying it to clipboard.  <br>
Method used to copy value to clipboard - window.navigator.clipboard.writeText() <br>
Here **Length** = password size <br>
**Numbers** = to include numbers <br>
**Symbols** = to include symbols <br>


3. Currency Convertor
Intialized the project, learning hook to create a custom hook. <br>
Custom Hook - At the end of the day hooks are just functions returning some values. So we can also create our own custom hooks. <br>
Installed "ES7+ React/Redux/React-Native snippets" extension which allows you to use shortcuts in React. <br> 
Learn more- https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets <br>
After creating the custom hook, I created a new jsx component `InputBox.jsx` <br>
Took some props like label, currencyOptions, amount and then used 'for' loop to get options in the select list. <br>
Learned `useId Hook` - which creates a unique ID for elements. 



**I haven't uploaded these projects on Netlify but if you want to run them on your local machine.** <br>
It's simple. <br>

1. Download the project file.
2. Choose the project you want to run. <br>
`cd projectName`
3. Run this command in terminal: <br>
`npm i` <br>
4. And then <br>
`npm run dev`

Here you go:)

<br>

---

_Written with ❤️ by Armaan Singh_
