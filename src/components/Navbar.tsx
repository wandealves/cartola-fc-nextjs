import { AppBar, Box, Toolbar } from "@mui/material";
import Image from "next/image";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Image
            src="/img/logo.png"
            width={315}
            height={58}
            alt="Logo"
            priority={true}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
