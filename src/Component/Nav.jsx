import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { FavoriteBorderOutlined, PersonOutlineOutlined, Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({ duration: 1500, once: false });

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        Tspring
      </Typography>
      <Divider />
      <List>
        <Stack gap={4}>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/products'>Products</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/login'>Login</Link>
        </Stack>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component='nav' position='sticky'>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            data-aos='fade-up'
            data-aos-anchor-placement='center-bottom'>
            <Link to='/'>tričko</Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <Stack direction='row' gap={4}>
              <Link data-aos='fade-down' data-aos-delay='100' to='/'>
                Home
              </Link>
              <Link data-aos='fade-down' data-aos-delay='200' to='/about'>
                About Us
              </Link>
              <Link data-aos='fade-down' data-aos-delay='300' to='/products'>
                Products
              </Link>
              <Link data-aos='fade-down' data-aos-delay='400' to='/contact'>
                Contact
              </Link>
              <Link data-aos='fade-down' data-aos-delay='500' to='/login'>
                Login
              </Link>
            </Stack>
          </Box>
          <div className='flex gap-1'>
            <Search data-aos='fade-down' data-aos-delay='100' />
            <PersonOutlineOutlined data-aos='fade-down' data-aos-delay='200' />
            <FavoriteBorderOutlined data-aos='fade-down' data-aos-delay='300' />
            <Badge
              badgeContent={2}
              color='error'
              data-aos='fade-down'
              data-aos-delay='400'>
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;