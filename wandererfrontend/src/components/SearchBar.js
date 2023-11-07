import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import '../style/SearchBar.css';

export default function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState(""); 

  const handleSearch = () => {
    console.log(searchText);
    onSearch(searchText); 
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      // Trigger a search when the Enter key is pressed
      handleSearch();
    }
  };

  return (
    <Paper
    
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, pointerEvents: 'auto' }}
        placeholder="Ex. John Doe"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyUp={handleKeyUp} // Add the key up event handler
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: '10px',  pointerEvents: 'auto'}} aria-label="search" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
