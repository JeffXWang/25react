import React, {Component}from 'react';

const SearchBar =(props:{searchTerm: string, setSearchTerm: Function})=>(
  <input value={props.searchTerm} onChange={props.setSearchTerm} />
)

export default SearchBar;
