import React from 'react'
import "../styles/Button1.css";

const Button = (props) => {
  const text = props.text;
  // const text2 = props.secondText;
  return (
    <div className="button">{text}</div>
    // <div className="button">{text + " " + text2}</div>
  )
}

export default Button