import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-around", background: "#d4d4d4", padding: "10px 0"}}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  )
}

export default Navigation
