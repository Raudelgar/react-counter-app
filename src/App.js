import React, { Component } from "react";
import "./App.css";
import NavBar from "./component/navbar";
import Counters from "./component/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 7 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const ctn = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: ctn });
  };

  handleReset = () => {
    const reset = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counter: reset });
  };

  handleIncrement = counter => {
    const increment = [...this.state.counters];
    const index = increment.indexOf(counter);
    increment[index] = { ...counter };
    increment[index].value++;
    this.setState({ counters: increment });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
