// ........Simple code........

// import React, { Component } from 'react';

// class LifeCycleDemo extends Component {
//   constructor() {
//     super();
//     this.state = { count: 0 };
//     console.log("🍼 constructor: Component is being created");
//   }

//   componentDidMount() {
//     console.log("✅ componentDidMount: Component has been added to the screen");
//   }

//   componentDidUpdate() {
//     console.log("🔁 componentDidUpdate: Component was updated (state/props changed)");
//   }

//   componentWillUnmount() {
//     console.log("💀 componentWillUnmount: Component is about to be removed");
//   }

//   increaseCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     console.log("🎨 render: UI is being returned");
//     return (
//       <div>
//         <h2>React Life Cycle Demo 🧬</h2>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.increaseCount}>Increase Count 🔼</button>
//       </div>
//     );
//   }
// }

// export default LifeCycleDemo;




// ........Pet cat........

import React from "react";

class PetCat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hungry: false };
  }

  componentDidMount() {
    // Runs after the cat appears (mounts)
    console.log("Cat has entered the house! 🐱");
    this.bowl = setInterval(() => this.setState({ hungry: true }), 5000);
  }

  componentDidUpdate(prevProps, prevState) {
    // Runs after state or props change
    if (!prevState.hungry && this.state.hungry) {
      console.log("Cat is hungry! Refill the bowl! 🥛");
    }
  }

  componentWillUnmount() {
    // Runs before the cat leaves (unmounts)
    clearInterval(this.bowl);
    console.log("Cat has left. Clean up the bowl! 🧹");
  }

  feedCat = () => this.setState({ hungry: false });

  render() {
    return (
      <center>
        <div>
          <h2>The 🐱 cat is {this.state.hungry ? "hungry🤤" : "happy😁"}!</h2>
          <button
            style={{
              padding: "10px",
              margin: "10px",
              fontSize: "20px",
              backgroundColor: "green",
              color: "#fff",
            }}
            onClick={this.feedCat}
          >
            Feed 🐱
          </button>
        </div>
      </center>
    );
  }
}

export default PetCat;

