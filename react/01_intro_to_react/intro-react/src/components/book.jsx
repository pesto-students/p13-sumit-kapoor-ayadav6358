
import React from 'react'

function Book(props) {
  debugger;
    const {title, author, year} = props.item;
  return (
    <div>
    <h3>{title}</h3>
    <p>Author: {author}</p>
    <p>Year: {year}</p>
    </div>
  )
}

export default Book