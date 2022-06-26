import * as React from "react";
import PropTypes from "prop-types";
import {
  Toolbar,
  Button,
  IconButton,
  Typography,
  Link,
  Avatar,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import MyLogo from "./../../assets/logo.png";

const menu = ["Үндсэн цэс", "Асуулт байна уу?", "broker@rentsoestate.mn"];

const Header = (props) => {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Avatar
          src={MyLogo}
          alt="Rents'O Estate"
          sx={{ width: 40, height: 40 }}
        ></Avatar>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        {menu.map((el) => (
          <Button size="large">{el}</Button>
        ))}
        <IconButton>
          <LanguageIcon />
        </IconButton>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
};

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
