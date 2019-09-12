import React from 'react';
import './GameGrid.css';
import Tile from './Tile';
class GameGrid extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      boardArray : [...Array(100).keys()], // should be an array of tile components
    };
  }
  componentDidMount(){
    const boardArray = this.state.boardArray.map((div, i) => {
      return <Tile key={i} i={i} on={ (i % 7 === 0 || i % 4 === 0)? true : false} />
      // return <Tile key={i} on={true} />
    });
    console.log(boardArray);
    this.setState({ boardArray });
  }
  render(){
    return(
    <div className="game-grid" onClick={this.handleClick}>
      {this.state.boardArray}
    </div>
    )
  }
  handleClick = ({target: {dataset : { isactive }}}, shape) => { // need to handle second arg, to dictate shape of obj
    if (isactive === "true") {
      console.log("HIT")
    }
  }
}
export default GameGrid;