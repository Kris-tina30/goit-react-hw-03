import React from 'react';

function SearchBox({ value, onFilter }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={e => onFilter(e.target.value)} />
    </div>
  );
}

export default SearchBox;
