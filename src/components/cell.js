import React from 'react'

const Cell = ({value}) => {
  switch(value){
      case 'O':
          return <h2>O</h2>
      case 'X':
          return <h2>X</h2>
      default: 
        return '';
  }
}

export default Cell;
