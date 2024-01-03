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
  Assignment,
  MenuBook
} from "@mui/icons-material";
import React from "react";



const Sidebar = ({type,id}) => {
  console.log("id = " +id);
  const navStudent = [
    {
      text: "Trang chủ",
      link: "",
      icon: <Home />
    },
    {
      text: "Môn học",
      link: `subject/${id}`,
      icon: <Article />
    },
    {
      text: "Cài đặt",
      link: "setting",
      icon: <Settings />
    },
    {
      text: "Thông tin cá nhân",
      link: `${id}`,
      icon: <Person />
    },
  ]
  const navTeacher = [
    {
      text: "Trang Chủ",
      link: "",
      icon: <Home />
    },
    {
      text: "Quản Lí Môn Học",
      link: `subject/${id}`,
      icon: <Article />
    },
    {
      text: "Cài Đặt",
      link: "setting",
      icon: <Settings />
    },
    {
      text: "Thông Tin Cá Nhân",
      link: `${id}`,
      icon: <Person />
    },
  ]
  const navParent = [
    {
      text: "Trang Chủ",
      link: "",
      icon: <Home />
    },
    {
      text: "Quản Lí Học Sinh",
      link: `student/${id}`,
      icon: <Assignment />
    },
    {
      text: "Môn học hôm nay",
      link: `subject/${id}`,
      icon: <MenuBook />
    }
    ,
    {
      text: "Cài Đặt",
      link: "setting",
      icon: <Settings />
    },
    {
      text: "Thông Tin Cá Nhân",
      link: `${id}`,
      icon: <Person />
    },
  ]
  return (
    <div className="lg:w-1/4 md:w-2/5 md:flex hidden p-2">
      <Box position={`fixed`}>
     {
      type === "sv" && 
      <List>
      {navStudent.map((item, index) => (
        <ListItem disablePadding key={index}>
          <ListItemButton LinkComponent={`a`} href={`/student/${item.link}`}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}

    </List>
     }
     {
      type === "gv" && 
      <List>
      {navTeacher.map((item, index) => (
        <ListItem disablePadding key={index}>
          <ListItemButton LinkComponent={`a`} href={`/teacher/${item.link}`}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
     }
     {
      type === "ph" && 
      <List>
      {navParent.map((item,index) => (
        <ListItem disablePadding key={index}>
          <ListItemButton LinkComponent={`a`} href={`/parent/${item.link}`}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
     }
     </Box>
    </div>

  );
};

export default Sidebar;
