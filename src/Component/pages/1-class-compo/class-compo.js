import React, { Component } from "react";
class MyClass extends Component {
  constructor() {
    super();
    this.state = { count: 1 };
    console.log(this.state.count);
  }
  incre = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };
  decre = () => {
    this.setState({ count: this.state.count - 1 });
    console.log(this.state.count);
  };
  render() {
    return (
      <div>
        <center>
          <h1>Your count no is: {this.state.count} </h1>
          <button
            style={{
              backgroundColor: "green",
              color: "white",
              fontWeight: "bold",
              border: "none",
              padding: "10px 20px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
            onClick={this.incre}
          >
            +
          </button>
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              marginLeft: "10px",
              marginRight: "10px",
              fontWeight: "bold",
              border: "none",
              padding: "10px 20px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
            onClick={this.decre}
          >
            -
          </button>
        </center>
      </div>
    );
  }
}
export default MyClass;
