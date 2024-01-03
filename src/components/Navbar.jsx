import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { reactLocalStorage } from "reactjs-localstorage";
import { Article, Assignment, Home, MenuBook, Person, Settings } from "@mui/icons-material";
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
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));


const IconBox = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const Navbar = ({id,type}) => {
  const [open,setOpen] = useState();
  
  
  const toggle = () => {
    setOpen((e)=>(e=!open))
  }
  return (
    <>
      <NavbarMenu id={id} toggle={toggle}/>
      <SideBarMenu open={open} toggle={toggle} type={type} id={id}/>
    </>
  )
}

const SideBarMenu = ({open,toggle,type,id}) => {
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
    <div
    className="sidebar-containder fixed w-full h-full overflow-hidden bg-white grid pt-[60px] left-0 z-10"
    style={{
      opacity: `${open ? "1" : "0"}`,
      top: `${open ? "0%" : "-100%"}`,
      transition: `0.3s`
    }}
    >
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
    </div>
  )
}
const NavbarMenu = ({id,toggle}) => {
    const [openMenu, setOpenMenu] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          className="md:block hidden"
        >
          E-learning
        </Typography>
        <FontAwesomeIcon onClick={()=> toggle()}  icon={faBars} className="md:hidden block scale-150 cursor-pointer"/>
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
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
          <Typography variant="span">{id}</Typography>
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
        <MenuItem><Link href="/login" onClick={()=>{reactLocalStorage.remove('user'); reactLocalStorage.remove('type');}} sx={{textDecoration: 'none', color: 'black'}}>Logout</Link></MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
