import React from 'react';
import { NavLink } from "react-router-dom"
import Friends from '../Friends/Friends';
import s from "./Aside.module.css"

const Aside = () => {
  return (
    <aside className="nav">
      <ul>
        <li>
          <NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink>
        </li>
        <li>
          <NavLink to='/Dialogs' activeClassName={s.active}>Messages</NavLink>
        </li>
        <li>
          <NavLink to='/News' activeClassName={s.active}>News </NavLink>
        </li>
        <li>
          <NavLink to='/Music' activeClassName={s.active}>Music</NavLink>
        </li>
        <li>
          <NavLink to='/Settings' activeClassName={s.active}>Settings</NavLink>
        </li>
      </ul>
      <div>
        <Friends />
      </div>
    </aside>
  )
}

export default Aside;