import React from 'react'

const NavLink = ({item, index}) => {

  return (
    <div className={`button ${index == 3 && 'mr-32'}`}>
    <div className="button-wrapper">
    <div className="text">{item}</div>
        <span className="icon">
            {item}
        </span>
    </div>
    </div> 
  )
}

export default NavLink