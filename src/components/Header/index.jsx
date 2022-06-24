import * as React from "react";
import PropTypes from "prop-types";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Stack,
  Button,
  Typography,
  Toolbar,
  ListItemText,
  ListItemButton,
  ListItem,
  List,
  IconButton,
  Drawer,
  Divider,
  Box,
  AppBar,
  ThemeProvider,
  createTheme,
  styled,
} from "@mui/material";
import MyLogo from "./../../assets/logo.png";
import { fontSize } from "@mui/system";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];
const customTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fff",
    },
  },
});

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "right",
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 140,
  },
}));

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "flex-start" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <ThemeProvider theme={customTheme}>
        <AppBar component="nav">
          <StyledToolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Avatar alt="Rents'O Estate" src={MyLogo}></Avatar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                ml: 1,
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                fontSize: "Comic Sans",
                color: "#c62828",
              }}
            >
              Rents'O Estate
            </Typography>

            <Box
              sx={{
                alignItems: "right",
                display: { xs: "none", sm: "block" },
              }}
            >
              <Stack direction="row" justifyContent="flex-end">
                {navItems.map((item) => (
                  <Button
                    key={item}
                    size="large"
                    alignItems="right"
                    sx={{ color: "#1565c0" }}
                  >
                    {item}
                  </Button>
                ))}
              </Stack>
            </Box>
          </StyledToolbar>
        </AppBar>
      </ThemeProvider>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
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
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
