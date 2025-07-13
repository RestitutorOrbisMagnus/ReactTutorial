const reactHeading = React.createElement(
  "h1",
  {id: "heading"},
  "Hello World! This is my First React Program "
);

console.log(reactHeading);
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(reactHeading);
