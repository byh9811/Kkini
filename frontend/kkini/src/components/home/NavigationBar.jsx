import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import RestaurantMenuTwoToneIcon from "@mui/icons-material/RestaurantMenuTwoTone";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

function NavigationBar() {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // 현재 경로에 따라 value 값을 변경하여 활성 탭을 설정합니다.
    switch (location.pathname) {
      case "/home/feed":
        setValue(0);
        break;
      case "/home/search":
        setValue(1);
        break;
      case "/home/make":
        setValue(2);
        break;
      case "/home/recipe":
        setValue(3);
        break;
      case "/home/info":
        setValue(4);
        break;
      default:
        setValue(0); // 기본값은 첫 번째 탭으로 설정합니다.
    }
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: ["100%", "100%", 500], // 반응형으로 width 설정
        margin: "0 auto",
        zIndex: 1,
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        onClick={() => {
          navigate("/home/feed");
        }}
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        onClick={() => {
          navigate("/home/search");
        }}
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        onClick={() => {
          navigate("/home/make");
        }}
        icon={<AddTwoToneIcon />}
      />
      <BottomNavigationAction
        onClick={() => {
          navigate("/home/recipe");
        }}
        icon={<RestaurantMenuTwoToneIcon />}
      />
      <BottomNavigationAction
        onClick={() => {
          navigate("/home/info");
        }}
        icon={<PermIdentityOutlinedIcon />}
      />
    </BottomNavigation>
  );
}

export default NavigationBar;
