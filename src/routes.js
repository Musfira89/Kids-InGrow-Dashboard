import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdOutlineSettings,
  MdHome,
  MdOutlineHelpOutline,
  MdOutlineTrendingUp,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/user/Home";
import Activities from "views/user/Activities";
import Tracking from "views/user/Progress";
import Setting from "views/user/SettingPage";
import Help from "views/user/Help";




const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Activity Suggestion",
    layout: "/admin",
    path: "/activities",
    icon: (
      <Icon
        as={MdOutlineTrendingUp}
        width='20px'
        height='25px'
        color='inherit'
      />
    ),
    component: Activities,
    secondary: true,
  },
  {
    name: "Progress Tracking",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/tracking",
    component: Tracking,
  },
  {
    name: "Settings",
    layout: "/admin",
    path: "/settings",
    icon: <Icon as={MdOutlineSettings} width='20px' height='20px' color='inherit' />,
    component: Setting,
  },
  {
    name: "Help",
    layout: "/admin",
    path: "/help",
    icon: <Icon as={MdOutlineHelpOutline} width='20px' height='20px' color='inherit' />,
    component: Help,
  },
  
];

export default routes;
