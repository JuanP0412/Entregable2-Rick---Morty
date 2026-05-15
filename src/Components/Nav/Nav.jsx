import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

//Menu
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const ESPECIES = ['Human', 'Alien', 'Humanoid', 'unknown', 'Poopybutthole', 'Mythological Creature', 'Animal', 'Robot', 'Cronenberg', 'Disease']

const Nav = () => {
  //Menu
  const id = React.useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio/Todos los personajes</Link></li>
        <li>
          <Button
            id={buttonId}
            aria-controls={open ? menuId : undefined}
            aria-haspopup="true"
            aria-expanded={open}
            onClick={handleClick}
          >
            ESPECIES
          </Button>
          <Menu
            id={menuId}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: { 'aria-labelledby': buttonId },
              paper: {
                sx: {
                  backgroundColor: '#1a1a2e',
                  border: '1px solid #2d3748',
                  borderRadius: 2,
                }
              }
            }}
          >
            {ESPECIES.map(especie => (
              <MenuItem
                key={especie}
                onClick={handleClose}
                component={Link}
                to={`/characters/${especie}`}
                sx={{
                  color: '#a0aec0',
                  fontSize: '0.9rem',
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  backgroundColor: '#0f0f23',
                  '&:hover': {
                    backgroundColor: '#97ce4c',
                    color: '#0f0f23',
                  }
                }}
              >
                {especie}
              </MenuItem>
            ))}
          </Menu>
        </li>
      </ul>
    </nav >
  )
}

export default Nav
