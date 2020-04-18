import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    count: 0,
  };

  Degistir = (operation) =>{
    this.setState({
      count: operation === "azalt" ?this.state.count -1 : this.state.count +1
    })
  }

  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <h1>{count}</h1>
        <button onClick={()=>{this.Degistir("azalt")}}>-</button>
        <button onClick={()=>{this.Degistir("artır")}}>+</button>
      </div>
    );
  }
}

export default App;
