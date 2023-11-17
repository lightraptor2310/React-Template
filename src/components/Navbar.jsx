import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { Mail, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: {
              sm: "block",
              xs: "none",
            },
          }}
        >
          E-learning
        </Typography>
        <LocalFireDepartmentIcon
          sx={{
            display: {
              sm: "none",
              xs: "block",
            },
          }}
        ></LocalFireDepartmentIcon>
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail></Mail>
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications></Notifications>
          </Badge>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/397965008_3709908259254274_3900916591313818123_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZQt8JBW205cAX80i25Q&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfCuUEz_LPFkNbaN05nZW7WScoKbZwmkMJmrTSI2hSjATg&oe=6554313B"
            onClick={()=> {setOpenMenu(true)}}
          />
        </Icons>
        <IconBox onClick={()=> {setOpenMenu(true)}} >
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/397965008_3709908259254274_3900916591313818123_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZQt8JBW205cAX80i25Q&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfCuUEz_LPFkNbaN05nZW7WScoKbZwmkMJmrTSI2hSjATg&oe=6554313B"
          />
          <Typography variant="span">Kinh khủng</Typography>
        </IconBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={openMenu}
        onClose={(e)=>setOpenMenu(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
