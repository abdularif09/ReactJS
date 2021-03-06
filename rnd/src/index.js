import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Square extends React.Component {
  constructor(props){
    super(props);
    this.state={value:'X'}
  }
  render() {
    return (
      <button className="square"  onClick={() => this.setState({value: this.props.value+1})}>
        {this.state.value}
      </button>
    );
  }
}


class Game extends React.Component{
 
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  handleClick(i) {
    debugger;
    const squares = this.state.squares.slice();
    squares[i] = i;
    console.log(squares[i]);
    this.setState({squares: squares});
  }

  renderSquare(i) {
    //console.log(this.state.squares[i]);
    this.state.squares[i] = i;
  
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  render() {
    return (
      <div>
       
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
ReactDOM.render(
  <Game name="examples"/>,document.getElementById("root")
);

export default Square;