import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer = (props) => {
  const [state, setState] = useState(false);

  return state ? (
    <></>
  ) : (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://iuu.edu.mn/">
        Javkhlantugs.G
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
export default Footer;
