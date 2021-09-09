import React from "react";
import ReactDOM from "react-dom";

export class App extends React.Component {
  render(): JSX.Element {
    return <div> teste </div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
