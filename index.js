import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";

// const htmlElem = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1", key: "child1" }, [
//     React.createElement(
//       "h1",
//       { id: "heading1", key: "child1heading1" },
//       "I am an H1 tag."
//     ),
//     React.createElement(
//       "h2",
//       { id: "heading2", key: "child1heading2" },
//       "I am an H2 tag."
//     ),
//   ]),
//   React.createElement("div", { id: "child2", key: "child2" }, [
//     React.createElement(
//       "h1",
//       { id: "heading1", key: "child2heading1" },
//       "I am an H1 tag."
//     ),
//     React.createElement(
//       "h2",
//       { id: "heading2", key: "child2heading2" },
//       "I am an H2 tag."
//     ),
//   ]),
// ]);
const ReactComp = () => <div>This is a React Component!</div>;

const title = (
  <>
    <div>Hello Suneet!</div>
    {ReactComp()}
    <Header />
    <ReactComp />
    <ReactComp></ReactComp>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);
