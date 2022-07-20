// BARRE DE NAV




import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import { Box } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


export default function Header(props) {
  const history = useHistory()
  const [cookies, setCookies, removeCookies] = useCookies(["token"])
  const tokens = cookies.token
  const [connected, setConnected] = useState(false)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isOpen, setOpen] = React.useState(false)
  const handleIsOpen = () => {
    setOpen(!isOpen)
  }
  const closeSidebar = () => {
    setOpen(false)
  }
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const theme = useTheme()

  const isMatch = useMediaQuery(theme.breakpoints.down('md'))

  // pour modifier la nave barre pour affficher profil et deconnexion
  useEffect(async () => {
    try {

      if (tokens) {
        setConnected(true)
        props.under("go")

      }
    } catch (error) {
      console.log(error)


    }
  }, [])
  const logout = async () => {
    removeCookies("token", { path: "/" })

  }
  if (connected === true) {
    return (
      <div>

        {isMatch ? (
          <><div style={{ backgroundColor: "#FFF56E", display: "flex", justifyContent: "space-between", marginBottom: "-25px" }}>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              <img
                src={"/Logo_plants.png"}
                alt="Logo Myflowerlife"
                style={{ width: "200px", height: "55px", marginLeft: "20px" }}
                href="/home"
              />
            </Link>


            <Box sx={{ display: { xs: 'display', md: 'none' }, color: "#4C9A62" }}>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleIsOpen}



              >
                <MenuIcon style={{ color: "#4C9A62", marginTop: "5px" }} />
              </IconButton>

              <Menu
                id="menu-appbar"
                // anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                // open={Boolean(anchorElNav)}
                // onClose={handleCloseNavMenu}
                // is={isOpen}
                open={isOpen}
                onClose={closeSidebar}
                sx={{
                  display: { xs: 'block', md: 'none', },
                }}
              >


                <MenuItem onClick={closeSidebar} style={{ display: "grid", textAlign: "center" }} >
                  <Typography textAlign="center" color="#4C9A62">
                    <Button style={{ color: "#4C9A62" }} href="/home">ACCUEIL</Button>
                  </Typography>

                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu} style={{ display: "grid", textAlign: "center" }}>
                  <Typography color="#4C9A62" > <Button style={{ color: "#4C9A62" }} href="/story">NOTRE HISTOIRE</Button></Typography>

                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu} style={{ display: "grid" }}>
                  <Typography textAlign="center" color="#4C9A62"> <Button style={{ color: "#4C9A62" }} href="/contact">CONTACT</Button></Typography>

                </MenuItem>
                <MenuItem style={{ display: "grid", textAlign: "center" }} >
                  <Typography textAlign="center" color="#4C9A62" > <Button style={{ color: "#4C9A62" }} href="/faq">FAQ</Button></Typography>

                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu} style={{ display: "grid" }}>
                  <Typography textAlign="center" color="#4C9A62"> <Button style={{ color: "#4C9A62" }} href="/inscription">INSCRIPTION</Button></Typography>

                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu} style={{ display: "grid" }}>
                  <Typography textAlign="center" color="#4C9A62"> <Button style={{ color: "#4C9A62" }} href="/" onClick={logout}>Deconnexion</Button></Typography>

                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu} style={{ display: "grid" }}>
                  <Typography textAlign="center" color="#4C9A62"> <Button style={{ color: "#4C9A62" }} href="/profil">Profil</Button></Typography>

                </MenuItem>
              </Menu>
            </Box>

          </div></>
        ) : (<><div style={{ backgroundColor: "#FFF56E", display: "flex", justifyContent: "space-between", marginBottom: "-25px" }}>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <img
              src={"/Logo_plants.png"}
              alt="Logo Myflowerlife"
              style={{ width: "200px", height: "55px", marginLeft: "20px" }}
              href="/home"
            />
          </Link>

          <Button sx={{ display: { xs: 'none', md: 'flex' } }} startIcon={<HomeIcon />} style={{ fontSize: "large", color: "#4C9A62", fontFamily: "Lust Regular", }} href="/home" >ACCUEIL</Button>
          <Button sx={{ display: { xs: 'none', md: 'flex' } }} startIcon={<SentimentSatisfiedAltIcon />} style={{ fontSize: "large", color: "#4C9A62", fontFamily: "Lust Regular" }} href="/story">NOTRE HISTOIRE</Button>
          <Button sx={{ display: { xs: 'none', md: 'flex' } }} style={{ fontSize: "large", color: "#4C9A62", fontFamily: "Lust Regular" }} href="/contact">CONTACT</Button>
          <Button sx={{ display: { xs: 'none', md: 'flex' } }} style={{ fontSize: "large", color: "#4C9A62", fontFamily: "Lust Regular" }} href="/faq">FAQ</Button>
          <Button sx={{ display: { xs: 'none', md: 'flex' } }} startIcon={<PersonIcon />} style={{ boxShadow: "1px 1px 1px black", fontSize: "large", color: "#4C9A62", borderRadius: "45px", backgroundColor: "#FFF752", border: "none", marginTop: "10px", height: "35px", width: "12%", fontFamily: "Lust Regular" }} href="/inscription">INSCRIPTION</Button>
          <Button sx={{ display: { xs: 'none', md: 'flex' } }} style={{ fontSize: "large", color: "#4C9A62", fontFamily: "Lust Regular" }} onClick={logout} href="/">Deconnexion</Button>
          <Button sx={{ display: { xs: 'none', md: 'flex' } }} style={{ fontSize: "large", color: "#4C9A62", fontFamily: "Lust Regular", paddingRight: "10px" }} href="/profil">Profil</Button>


        </div> </>)}


      </div>
    );
  } else {
    return (
      <div>
        {isMatch ? (<><div style={{ backgroundColor: "#FFF56E", display: "flex", justifyContent: "space-between", marginBottom: "-25px" }}>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <img
              src={"/logo_plants.png"}
              alt="Logo Myflowerlife"
              style={{ width: "200px", height: "55px", marginLeft: "20px" }}
              href="/home"
            />
          </Link>




          <Box sx={{ display: { xs: 'flex', md: 'none' }, color: "#4C9A62" }}>


            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleIsOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              // anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              // open={Boolean(anchorElNav)}
              // onClose={handleCloseNavMenu}
              // is={isOpen}
              open={isOpen}
              onClose={closeSidebar}
              sx={{
                display: { xs: 'block', md: 'none', },
              }}
            >

              <MenuItem onClick={handleCloseNavMenu} style={{ display: "grid" }}>
                <Typography textAlign="center" color="#4C9A62">
                  <Button style={{ color: "#4C9A62" }} href="/home">ACCUEIL</Button>
                </Typography>

              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} style={{ display: "grid" }}>
                <Typography textAlign="center"  > <Button style={{ color: "#4C9A62" }} href="/story">NOTRE HISTOIRE</Button></Typography>

              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} style={{ display: "grid" }}>
                <Typography textAlign="center" color="#4C9A62"> <Button style={{ color: "#4C9A62" }} href="/contact">CONTACT</Button></Typography>

              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} style={{ display: "grid" }}>
                <Typography textAlign="center" color="#4C9A62"> <Button style={{ color: "#4C9A62" }} href="/faq">FAQ</Button></Typography>

              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} style={{ display: "grid" }}>
                <Typography textAlign="center" color="#4C9A62"> <Button style={{ color: "#4C9A62" }} href="/inscription">INSCRIPTION</Button></Typography>

              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} style={{ display: "grid" }}>
                <Typography textAlign="center" color="#4C9A62"> <Button style={{ color: "#4C9A62" }} href="/connexion">CONNEXION</Button></Typography>

              </MenuItem>
            </Menu>
          </Box>



        </div></>) : (
          <><div style={{ backgroundColor: "#FFF56E", display: "flex", justifyContent: "space-between", marginBottom: "-25px" }}>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              <img
                src={"/logo_plants.png"}
                alt="Logo Myflowerlife"
                style={{ width: "200px", height: "55px", marginLeft: "20px" }}
                href="/home"
              />
            </Link>


            <Button startIcon={<HomeIcon />} style={{ fontSize: "large", color: "#4C9A62", fontFamily: "Lust Regular" }} href="/home" sx={{ display: { xs: 'none', sm: "none", md: 'flex' } }}>ACCUEIL</Button>
            <Button startIcon={<SentimentSatisfiedAltIcon />} sx={{ display: { xs: 'none', md: 'flex' } }} style={{ fontSize: "large", color: "#4C9A62", fontFamily: "Lust Regular" }} href="/story">NOTRE HISTOIRE</Button>
            <Button sx={{ display: { xs: 'none', md: 'flex' } }} style={{ fontSize: "large", color: "#4C9A62", fontFamily: "Lust Regular" }} href="/contact">CONTACT</Button>
            <Button sx={{ display: { xs: 'none', md: 'flex' } }} style={{ fontSize: "large", color: "#4C9A62", fontFamily: "Lust Regular" }} href="/faq">FAQ</Button>
            <Button sx={{ display: { xs: 'none', md: 'flex' } }} startIcon={<PersonIcon />} style={{ boxShadow: "1px 1px 1px black", fontSize: "large", color: "#4C9A62", borderRadius: "45px", backgroundColor: "#FFF752", border: "none", marginTop: "10px", height: "35px", width: "12%", fontFamily: "Lust Regalar" }} href="/inscription">INSCRIPTION</Button>
            <Button sx={{ display: { xs: 'none', md: 'flex' } }} style={{ fontSize: "large", color: "#4C9A62", fontFamily: "Lust Regular", paddingRight: "15px" }} href="/connexion">CONNEXION</Button>



          </div> </>)}

      </div>
    );
  }

}
