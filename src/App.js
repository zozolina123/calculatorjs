import React, { Component } from 'react';
import './App.css';

class Buttons extends Component {
  render(){
    return (
      <div className="border">
        <div className="buttons">
          <button id="AC" value="AC" onClick={this.props.handleClear}>AC</button>
          <button id="divide" value="/" onClick={this.props.handleOperation}>/</button>
          <button id="multiply" value="*" onClick={this.props.handleOperation}>X</button>
          <button id="seven" value="7" onClick={this.props.handleNumber}>7</button>
          <button id="eight" value="8" onClick={this.props.handleNumber}>8</button>
          <button id="nine" value="9" onClick={this.props.handleNumber}>9</button>
          <button id="minus" value="-" onClick={this.props.handleOperation}>-</button>
          <button id="four" value="4" onClick={this.props.handleNumber}>4</button>
          <button id="five" value="5" onClick={this.props.handleNumber}>5</button>
          <button id="six" value="6" onClick={this.props.handleNumber}>6</button>
          <button id="plus" value="+" onClick={this.props.handleOperation}>+</button>
          <button id="one" value="1" onClick={this.props.handleNumber}>1</button>
          <button id="two" value="2" onClick={this.props.handleNumber}>2</button>
          <button id="three" value="3" onClick={this.props.handleNumber}>3</button>
          <button id="equal" value="=" onClick={this.props.handleEqual}>=</button>
          <button id="zero" value="0" onClick={this.props.handleNumber}>0</button>
          <button id="decimal" value="." onClick={this.props.handleDecimal}>,</button>
        </div>
      </div>
    )
  }
}



const Display = (props) => <p id="display">{props.val}</p>
class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      input: '',
      operator: '',
      expression: '',
      solved: ''
    }
    this.handleNumber = this.handleNumber.bind(this);
    this.handleOperation = this.handleOperation.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
  }

  handleNumber = (e) => {
    if(/\/|\*|\+|-/g.exec(this.state.expression.slice(-1)) && e.target.value ==="0") ;
    else
    this.setState({
      solved: '',
      input: this.state.expression+e.target.value,
      expression: this.state.expression+e.target.value
    });
  }

  handleOperation = (e) => {
    if(/\/|\*|\+|-/g.exec(this.state.expression.slice(-1))){
      this.setState({
        input: this.state.expression.slice(0,-1)+e.target.value,
        expression: this.state.expression.slice(0,-1)+e.target.value
      })
    }
    else if(this.state.solved==='')
    this.setState({
      input: this.state.expression+e.target.value,
      expression: this.state.expression+e.target.value
    });
    else{
      this.setState({
        input: this.state.solved + this.state.expression+e.target.value,
        expression:this.state.solved + this.state.expression+e.target.value
      });
    }
  }

  handleEqual = () => {
    if(/\/|\*|\+|-/g.exec(this.state.expression.slice(-1))) {
    this.setState({
      expression: this.state.expression.slice(0,-1)
    })
  }
    else
    this.setState({
      input: eval(this.state.expression),
      solved: eval(this.state.expression),
      expression: ''
    })
  }

  handleClear = () => {
    this.setState({
      input: '',
      operator: '',
      expression: '',
      solved: ''
    })
  }

  handleDecimal = () => {
    this.setState({
      expression: this.state.expression + '.',
      input: this.state.expression + '.'
    })
  }

  render() {
    return (
      <div className="calculator">
        <Display val={this.state.input}/>
        <Buttons handleNumber={this.handleNumber} handleOperation={this.handleOperation} handleEqual={this.handleEqual} handleClear={this.handleClear} handleDecimal = {this.handleDecimal} />
      </div>
    );
  }
}

export default App;
