import React, { Component } from "react";
import "../App.css";

class Count extends Component {
  state = {
    count: 0,
  };

  increment = (e) => this.setState({ count: this.state.count + 1 });
  decrement = (e) => this.setState({ count: this.state.count - 1 });

  render() {
    return <div className='count'>
        <button onClick={this.increment}>increment</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>decrement</button>
    </div>;
  }
}

export default Count;
