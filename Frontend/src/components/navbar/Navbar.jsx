import {React, useState} from "react";
import Box from "@mui/material/Box"; // ✅ Import Box
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import Menu from "./Menu";
import logo from '../../assets/football-11621_256.gif'
import ShortMenu from "./Shortmenu";

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";
const drawerWidth = 240;
const shortDrawerWidth = 80;

export default function Navbar({ content }) { // ✅ Correctly destructure `content`
const [isBigMenu, setIsBigMenu] = useState(false)
const changeMenu = () =>{
    setIsBigMenu(!isBigMenu)
}

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
            <IconButton sx={{marginRight:'30px', color:'white'}} onClick={changeMenu}>
                {isBigMenu ? <MenuOpenIcon/> : <MenuIcon/>}
            </IconButton>
          <img src={logo} alt="footBall Logo"  width={100}/>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
            width: isBigMenu? drawerWidth : shortDrawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: isBigMenu? drawerWidth : shortDrawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        {isBigMenu ? <Menu/> : <ShortMenu/>}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {content} {/* ✅ Render `content` correctly */}
      </Box>
    </Box>
  );
} // ✅ Missing closing bracket added
