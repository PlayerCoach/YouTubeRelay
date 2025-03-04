import React from 'react'

const Toggle = () => {
    const [toggle, setToggle] = React.useState(false);
  return (
    <button
    className={'toggle-btn ${toggle ? "toggle-btn-active" : ""}'}
    onClick={() => setToggle(!toggle)}/>
  )
}

export default Toggle
