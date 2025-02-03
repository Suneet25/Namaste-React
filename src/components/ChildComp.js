import React from "react";

class ChildComp extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "Inside Constructor");
    this.state = {
      count: 1,
    };
  }

  componentDidMount() {
    console.log(this.props.name + "Component Did Mount");
  }

  render() {
    const { count } = this.state;
    const { name, place } = this.props;
    console.log(this.props.name + "Component Render");

    return (
      <div>
        This is the child component , and my name is {name} , i am from {place}.
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          {count}
        </button>
      </div>
    );
  }
}

export default ChildComp;
