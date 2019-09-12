import React from 'react';
import './Tile.css';
function Tile(props){
  return(
    <div className={`${props.on ? "on" : ''} tile`} data-isactive={props.on} ></div>
  )
}
export default Tile;