import React from 'react';
import { setText } from "../../actions";
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
    </>
  )
}

export default Input;