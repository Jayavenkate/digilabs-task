import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./navbar.module.css";
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
            <Button
              className={styles.navbutton}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              Card access <KeyboardArrowDownIcon />
            </Button>
            {Links.map((item, index) => (
              <div key={index}>
                <Button
                  className={styles.navbutton}
                  sx={{ display: { xs: "none", md: "flex" } }}
                >
                  {item}
                </Button>
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
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 1.5H14.8333C15.2754 1.5 15.6993 1.67559 16.0118 1.98816C16.3244 2.30072 16.5 2.72464 16.5 3.16667V14.8333C16.5 15.2754 16.3244 15.6993 16.0118 16.0118C15.6993 16.3244 15.2754 16.5 14.8333 16.5H11.5M7.33333 13.1667L11.5 9M11.5 9L7.33333 4.83333M11.5 9H1.5"
                stroke="#5A6475"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
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
