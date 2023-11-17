import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  Home,
  Article,
  Group,
  Storefront,
  Person,
  Settings,
  AccountBox,
  ModeNight,
} from "@mui/icons-material";
import React from "react";

const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
        width:'25%',
      }}
    >
     <Box position={`fixed`}>
     <List>
        <ListItem disablePadding>
          <ListItemButton LinkComponent={`a`} href="#">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Trang chủ" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent={`a`} href="#">
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="Khóa học" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent={`a`} href="#">
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Lớp học" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent={`a`} href="#">
            <ListItemIcon>
            <Settings />
            </ListItemIcon>
            <ListItemText primary="Cài đặt" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent={`a`} href="#">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Thông tin cá nhân" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent={`a`} href="#">
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch />
          </ListItemButton>
        </ListItem>
      </List>
     </Box>
    </Box>
  );
};

export default Sidebar;
