//Creates a react element
const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc" },
    "Hello World from React"
);

//Accesses root from HTML
const root = ReactDOM.createRoot(document.getElementById("root"));

//Render heading to root
root.render(heading);
