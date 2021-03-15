import React from 'react';
import { setText } from "../../actions";
import { SortProfiles } from '../index';
import './Input.scss';

const Input = ({ text }) => {
  return(
    <>
      <div className="searchPanel">
        <input
          className="searchPanel__input"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Search profile..."
        />
      </div>
      <div className="filterPanel">
        <SortProfiles />
      </div>
    </>
  )
}

export default Input;