import React from 'react';
import logo from '../../ui/log.jpg';
import { AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography } from '@material-ui/core';
import {  ShoppingCartOutlined } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';
import useStyles from './styles';
import {Link, useLocation} from 'react-router-dom';
const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location=useLocation();

    
  return (
      <>
    <AppBar position="fixed" className={mergeClasses.appBar} color="inherit">
        <Toolbar>
            <Typography component={Link} to="/" variant="h5" className={classes.title} color="inherit">
                <img src={logo}  height="25px" className={classes.image}/>
                Athena's Box
            </Typography>
            <div className={classes.grow}/>
            {(location.pathname==='/' || location.pathname==='/products' )&& (
            <div className={classes.button}>
                
                <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                    <Badge badgeContent={totalItems} color="secondary"><ShoppingCartOutlined/></Badge>
                </IconButton>
                </div>)}
        </Toolbar>
    </AppBar>
      </>
  );
};

export default Navbar;