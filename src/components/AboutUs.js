import React from "react";
import ChildComp from "./ChildComp";

// const AboutUs = () => {
//   return <div></div>;
// };

// export default AboutUs;

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      count1: 0,
    };
  }
  componentDidMount() {
    console.log("PARENT_COMPONENT_DID_MOUNT");
  }

  render() {
    const { count } = this.state;
    return (
      <>
        <div
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          AboutUs {count}
        </div>
        <div>
          <ChildComp name={"Suneet"} place={"Banglore"} />
          <ChildComp name={"Swagat"} place={"Cuttak"} />
        </div>
      </>
    );
  }
}

export default AboutUs;
