{
  /* <div id="parent">
<div id="child1">
<h1 id="heading1">
I am an H1 tag.
</h1>
<h1 id="heading2">
I am an H2 tag.
</h1>
</div>
<div id="child2">
<h1 id="heading1">
I am an H1 tag.
</h1>
<h1 id="heading2">
I am an H2 tag.
</h1>
</div>
</div> */
}

const htmlElem = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement(
      "h1",
      { id: "heading1", key: "child1heading1" },
      "I am an H1 tag."
    ),
    React.createElement(
      "h2",
      { id: "heading2", key: "child1heading2" },
      "I am an H2 tag."
    ),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement(
      "h1",
      { id: "heading1", key: "child2heading1" },
      "I am an H1 tag."
    ),
    React.createElement(
      "h2",
      { id: "heading2", key: "child2heading2" },
      "I am an H2 tag."
    ),
  ]),
]);
console.log(htmlElem);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(htmlElem);
