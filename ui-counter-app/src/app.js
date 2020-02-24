import React from "react";
import './app.scss';

const Header = () => {
    return (
      <header className="words-app">
        <h1>My-first-counter-App-using-React</h1>
      </header>
    )
  }
  
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }


  incrementCounter = e => {
    e.preventDefault();
    this.setState(previousState => ({count: previousState.count + 1}));
  };

  decrementCounter = e => {
    e.preventDefault();
    this.setState(previousState => ({count: previousState.count - 1}));
  };

  render() {
    return (
      <>
      <React.Fragment>
        <Header />
        <h4>{this.state.count}</h4>
        <div id="buttons">
          <button onClick={this.incrementCounter}>Increment Counter by 1</button>
          <button onClick={this.decrementCounter}>Decrement Counter by 1</button>
        </div>
        <Footer />
      </React.Fragment>
      </>
    );
  }
  
}

const Footer = () => {
    return (
     <h2> <footer>&copy; obada-first-cool-react-app</footer></h2>
    )
  }
export default Counter;