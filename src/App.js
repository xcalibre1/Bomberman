import React from "react"
import './App.css';
import DivBlock from "./Components/DivBlock.js"


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      isEncounteredBomb: false,
      gridLayout: [[0, 0, 0, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]],
      isRed: false,
      gameState:"",
    }
   this.base=this.state;

  }

  componentDidMount() {
    var limit = 10;
    let lower_bound = 1;
    let upper_bound = 81;
    let unique_random_numbers = [];
    while (unique_random_numbers.length < limit) {
      var random_number = Math.floor(Math.random() * (upper_bound - lower_bound) + lower_bound);
      if (unique_random_numbers.indexOf(random_number) === -1) {
        unique_random_numbers.push(random_number);
      }
    }

    const copygridLayout = this.state.gridLayout
    for (let i = 0; i < unique_random_numbers.length; i++) {
      copygridLayout[parseInt(unique_random_numbers[i] / 9)][unique_random_numbers[i] % 9] = 1
    }
    this.setState({
      // isBomb: unique_random_numbers,
      gridLayout: copygridLayout,
    })
    console.log(this.state.gridLayout)
  }
 
  handleBombClick = (event, isBomb, row, col) => {
    let copy = this.state.gridLayout;
    console.log(copy);
    if (isBomb && copy[row][col] !== 2) {
      this.setState({ isRed: true })
      event.target.style.backgroundColor = "red"
      for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
          if(copy[i][j]!==1)
            copy[i][j]=2
        }
      }
      this.setState({gameState:"Game-Over"})
     
    }
    else if (copy[row][col] !== 2 && copy[row][col]==0) {
      event.target.style.backgroundColor = "green"
      this.setState(()=>(this.state.count>=71?{gameState:"Win"}:{count: this.state.count + 1}))
      copy[row][col]=2;
    }
    this.setState({ gridLayout: copy });
  }
  playAgain=()=>{
    this.setState(this.base)
  }
  render() {
    return (
      <>
        <h3 className="h3g">score : {this.state.count}</h3>
        <div>{this.state.gridLayout.map((value, index) => (
          <DivBlock key={index} row={value} rowidx={index} matrix={this.state.gridLayout} handleBomb={this.handleBombClick} isRed={this.state.isRed} />
        ))}</div>
        <span className="sp"><button className="btn" onClick={this.playAgain}>Reset</button></span>
        <h3 className="h3g">{this.state.gameState}</h3>
      </>
    );
  }
}

export default App;
