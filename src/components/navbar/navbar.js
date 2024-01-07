import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./navbar.module.css";
import LoginIcon from "@mui/icons-material/Login";
export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const Links = ["Banking", "Processing", "About", "Carrier", "Contact"];
  const iconbutton = [
    "Card access",
    "Banking",
    "Processing",
    "About",
    "Carrier",
    "Contact",
  ];
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar
      position="static"
      sx={{
        border: "1px solid #E6E7E9",
        boxShadow: "none",
        background: "none",
        color: "#363C46",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="/Vectorlogo.jpg"
            alt="Vercel Logo"
            width={84}
            height={16}
          />

          <div className={styles.navlink}>
            <button
              className={styles.navbutton}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              Card access <KeyboardArrowDownIcon />
            </button>
            {Links.map((item, index) => (
              <div key={index}>
                <button
                  className={styles.navbutton}
                  sx={{ display: { xs: "none", md: "flex" } }}
                >
                  {item}
                </button>
              </div>
            ))}
          </div>
        </Typography>

        <div>
          <Button
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            sx={{
              textTransform: "none",
              fontWeight: 500,
              fontSize: "16px",
              gap: "5px",
            }}
          >
            Login
            <LoginIcon />
          </Button>
        </div>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {iconbutton.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
