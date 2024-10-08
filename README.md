# Learn React

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

1. Basics of React


2. Bg Changer
![Background Changer](./images/bgChanger.png "Background Changer")

From this project I learnt how to use useState hook in project, state management and how the function updates the state.


3. Password Generator
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


4. Currency Convertor
![Currency Convertor](./images/currencyConverter.png "Currency Convertor")

Intialized the project, learning hook to create a custom hook. <br>
Custom Hook - At the end of the day hooks are just functions returning some values. So we can also create our own custom hooks. <br> <br>
Installed "ES7+ React/Redux/React-Native snippets" extension which allows you to use shortcuts in React. <br> 
Learn more- https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets <br>
After creating the custom hook, I created a new jsx component `InputBox.jsx` <br> <br>
Took some props like label, currencyOptions, amount and then used '.map' method to get options in the select list. <br>
Learned `useId Hook` - which creates a unique ID for elements.
Here I used .map method to map the list of currenices. <br><br>
Object.keys() method to get those names of currenices from API data. 
Always add a error handling while calling a API, sometimes API call gives error and we didn't get to know.
I also added a Reset button to reset the app with initial values.

5. React Router
![React Router](./images/reactRouter.png "React Router")

React Router Official Docs : https://reactrouter.com/en/main

In this project I learnt about Routing. I used to the command `npm i react-router-dom` to install React Router DOM. We don't use anchor tag in React because that reloads the whole page that makes no sense in React. <br>
Created a Layout.jsx file which defines the structure of static and dynamic files. 
Used RouterProvider in main.jsx which takes path, element as props.
Learnt the two ways of creating the Router elements. 
Learnt a very cool thing with urls. You can pass anything(it can be text or numbers) in the url and access that in your elements. It's very intersting concept while designing user admin pages.
<br>
Used github API to get data from Github and made a API call in loader attribute of the Router tag jsut to optimize the API call time. 


<br>
Learnt about how different pages(elements) are injected in the nesting of Router.


6. React Context
Usecase- When you fill a login form the data like your name is directly passed to the dashboard.
When you need to pass data from one component to another.

7. Theme Switcher

![Theme Switcher](./images/themeSwitch.png "Theme Switcher")

Uderstanding the Context hooks in depth. It's basically two components- <br>
(a) createContext <br>
(b) useContext <br>



Let's uderstand these a bit. <br>
(a) createContext - This initally creates a global variable which is accessible in the components. You can use this in different components. <br>
Let me explain this with example. Think of a theme changer button. You're using dashboard component of your React app ,the theme is dark so now you clicked on the button and changed it to light. Even you surf through different compnents the theme will remain light. How this variable is being shared. Here we use this concept.

(b) useContext - Now you have created a global variable. To use it we refer to useContext hook. <br>

Learnt how a global variable is used in differnet components without passing it to props.

8. ToDo <br>
Here I learnt deep about context api in react which gave me more clearity about their use.

<br>
I learnt a new thing that useState hook gives you access of previous value stored in it.

<br>

<br>







---
Armaan is constantly updating this space, so make sure to check back often for new resources! <br>
CodeBetter! 🚀
