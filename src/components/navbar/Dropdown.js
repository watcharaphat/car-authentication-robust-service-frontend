import React from 'react';

const Dropdown = ({ dropDownShow, onClickDropdown, setUserId }) => {
  let dropDownState = "dropdown";
  dropDownState = `${dropDownState} ${dropDownShow ? ' is-active' : ''}`;

  return (
    <div className={dropDownState}>
      <div className="dropdown-trigger">
      </div>
      <div className="dropdown-menu" id="dropdown-menu2" role="menu">
        <div className="dropdown-content">
          <a href="#" className="dropdown-item" onClick={() => setUserId('1')}>Mom</a>
          <hr className="dropdown-divider" />
          <a href="#" className="dropdown-item" onClick={() => setUserId('2')}>Son</a>
        </div>
      </div>
    </div>
  )
}

export default Dropdown;