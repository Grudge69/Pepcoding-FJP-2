import ReactDOM from "react-dom";
import React from "react";
import "./index.css";

function getGameStatus(squares) {
  //these are the winning combinations which signify that if all Xs or all Os are on these square no. then that side wins
  let winCombs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //checking if our current square situation matches any of the winning combinations
  for (let i = 0; i < winCombs.length; i++) {
    let winComb = winCombs[i];
    let s1 = winComb[0];
    let s2 = winComb[1];
    let s3 = winComb[2];

    if (
      squares[s1] != null &&
      squares[s1] == squares[s2] &&
      squares[s2] == squares[s3]
    ) {
      return squares[s1];
    }
  }

  return null;
}

class Board extends React.Component {
  handleBoxClick(i) {
    //this called the handlerForBoxClick() defined in the TTT component(parent)
    this.props.handlerForBoxClick(i);
  }

  renderSquare(i) {
    return (
      /* On clicking a box "handleBoxClick" is called and i is passed which is the idx of box clicked*/
      <button onClick={() => this.handleBoxClick(i)}>
        {/* boxes are stored in props are it was sent from TTT component(parent) */}
        {this.props.boxes[i] == null ? "" : this.props.boxes[i]}
      </button>
    );
  }

  render() {
    return (
      <>
        <div className="board">
          <div className="title">Tic Tac Toe</div>
          <div className="content">
            <div className="ttt">
              <div className="row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
              </div>
              <div className="row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
              </div>
              <div className="row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

class Display extends React.Component {
  //on click of a step move the history to that particular step by calling handlerForHistory() inside TTT(parent) component
  moveHistory(i) {
    this.props.handlerForHistory(i);
  }

  render() {
    let gameTitle;

    //setting gametitle according to gamestatus recieved from TTT Component(parent)
    if (this.props.gameStatus == null) {
      //when there is no winner and no draw then show "Next Move for : X or Y" depending on whose move it is
      gameTitle =
        "Next move for " + (this.props.stepNumber % 2 == 0 ? "X" : "O");
    } else {
      //if the gameStatus is "draw" then show "It's a draw"
      if (this.props.gameStatus == "draw") {
        gameTitle = "It's a draw";
      } else {
        //show a Winner according to the gameStatus(X or O) recieved from TTT component(parent)
        gameTitle = this.props.gameStatus + " wins";
      }
    }

    //setting the buttons for navigation to move no. or step no.
    let buttons = [];
    for (let i = 0; i <= this.props.stepNumber; i++) {
      let button = null;

      //for i=0 => go to start
      //for i=1 => go to step number 1, and so on..
      if (i == 0) {
        button = (
          <button key={i} onClick={() => this.moveHistory(i)}>
            Go to Start
          </button>
        );
      } else {
        button = (
          <button key={i} onClick={() => this.moveHistory(i)}>
            Go to step number {i}
          </button>
        );
      }

      buttons.push(button);
    }

    return (
      <>
        <div className="display">
          <div className="title">{gameTitle}</div>
          <div className="content">
            <div className="history">{buttons}</div>
          </div>
        </div>
      </>
    );
  }
}

class TTT extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [[null, null, null, null, null, null, null, null, null]],
      stepNumber: 0,
      gameStatus: null,
    };
  }

  handleSquareClick(i) {
    //make copy of previous history
    let oldHistory = this.state.history.slice();
    //make copy of last arr of history which contains latest changes before clicking
    let currentSquares = oldHistory[oldHistory.length - 1].slice();

    //if the clicked box is already filled with 'X' or 'O' then we don't need to do anything
    if (currentSquares[i] != null || this.state.gameStatus != null) {
      //game stops when there is a winner or the match is drawn where gameStatus != null
      return;
    }

    //put "X" at even no. of step and vice versa
    currentSquares[i] = this.state.stepNumber % 2 == 0 ? "X" : "O";
    oldHistory.push(currentSquares); //push these new changes in oldHistory and set it in setState

    //get new game status after every move
    let newGameStatus = getGameStatus(currentSquares);
    //if 8 squares are clicked and this is 9th square to be clicked and still the is no decisive winner i.e. newGameStatus = null, then its a DRAW
    if (this.state.stepNumber == 8 && newGameStatus == null) {
      newGameStatus = "draw";
    }

    //set history to edited history, stepNo. to "prev StepNo. + 1" as new move is made, gameStatus to newGameStatus recieved
    this.setState({
      history: oldHistory,
      stepNumber: this.state.stepNumber + 1,
      gameStatus: newGameStatus,
    });
  }

  moveToStep(i) {
    //for go to step 2 we slice(0,3) which is we get 0th, 1st, 2nd steps as second argument is note included
    let oldHistory = this.state.history.slice(0, i + 1);
    let currentSquares = oldHistory[oldHistory.length - 1];
    //get game status based on current values filled in squares
    let newGameStatus = getGameStatus(currentSquares);

    //set history to edited history, stepNo. to "i" value which was clicked , gameStatus to newGameStatus recieved
    this.setState({
      history: oldHistory,
      stepNumber: i,
      gameStatus: newGameStatus,
    });
  }

  render() {
    //last value is the latest state
    let squares = this.state.history[this.state.history.length - 1];

    return (
      <>
        {/* "handleSquareClick" is sent to Board component with the name of "handlerForBoxClick" */}
        {/* "squares" are taken from history[] in state and sent to Board component as "boxes" */}
        <Board
          handlerForBoxClick={(i) => this.handleSquareClick(i)}
          boxes={squares}
        />
        <Display
          stepNumber={this.state.stepNumber}
          gameStatus={this.state.gameStatus}
          handlerForHistory={(i) => this.moveToStep(i)}
        />
      </>
    );
  }
}

ReactDOM.render(<TTT />, document.getElementById("root"));
