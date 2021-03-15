import React, { useState } from 'react';
import { setSort } from '../../actions';
import './SortProfiles.scss';

const SortProfiles = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  return(
    <div
      className="filterPanel"
      onMouseOver={() => setShowDropDown(true)}
      onClick={() => setShowDropDown(true)}
    >
      <p>Sort by name</p>
      {showDropDown && 
        <ul onMouseLeave={() => setShowDropDown(false)} className="filerPanel__open">
          <li onClick={() => setSort('asc')}>asc</li>
          <li onClick={() => setSort('dsc')}>dsc</li>
        </ul>
      }
    </div>
  )
}

export default SortProfiles;