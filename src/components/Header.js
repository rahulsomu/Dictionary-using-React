import { createTheme, InputLabel, MenuItem, Select, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react';
import './header.css';
import categories from '../Data';
const Header = ({language,setLanguage,word,setWord}) => {
    const handleChange=(lang)=>{
        setLanguage(lang);
        setWord('')
    }

    const darkTheme = createTheme({
      palette: {
        primary:{
          main:"#fff"
        },
        type: 'dark',
      },
    });
  return (
    <div className="Header">
      <h1 className='logo' style={{color:"rgb(58, 255, 163)"}}>Dictionary</h1>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>

        <TextField  InputProps={{ disableUnderline: true }} className='search' id="filled-basic" label="Search.." variant="filled" value={word} onChange={(e)=>setWord(e.target.value)} />
        <InputLabel id="demo-simple-select-filled-label"></InputLabel>
        <Select
        disableUnderline
        className='select'
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={language}
          onChange={(e)=>handleChange(e.target.value)}
        >
          {categories.map(category => {
            return (
              <MenuItem key={category.label} value={category.label}>
                {category.value}
              </MenuItem>
            );
          })}
        </Select>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
