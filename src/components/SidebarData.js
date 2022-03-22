import React from 'react'

import GridViewIcon from '@mui/icons-material/GridView';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CategoryIcon from '@mui/icons-material/Category';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import StarsIcon from '@mui/icons-material/Stars';
import LabelIcon from '@mui/icons-material/Label';
import LockClockIcon from '@mui/icons-material/LockClock';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import InfoIcon from '@mui/icons-material/Info';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <GridViewIcon />,
        link: '/dashboard'
    },

    {
        title: "View All Products",
        icon: <StorefrontIcon />,
        link: "/sellers"
    },

    {
        title: "Add Products",
        icon: <PersonOutlineIcon />,
        link: "/users"
    },

    {
        title: "Edit Products",
        icon: <CategoryIcon />,
        link: "/categories"
    },

    {
        title: "Products",
        icon: <Inventory2Icon />,
        link: "/products"
    },

    {
        title: "Orders",
        icon: <LocalAtmIcon />,
        link: "/orders"
    },

    {
        title: "Reviews",
        icon: <StarsIcon />,
        link: "/reviews"
    },

    {
        title: "Brands",
        icon: <LabelIcon />,
        link: "/brands"
    },

    {
        title: "Authentication",
        icon: <LockClockIcon />,
        link: "/authentication"
    },

    {
        title: "Icons",
        icon: <InsertEmoticonIcon />,
        link: "/icons"
    },

    {
        title: "Preferences",
        icon: <SettingsApplicationsIcon />,
        link: "/preferences"
    },

    {
        title: "Info",
        icon: <InfoIcon />,
        link: "/info"
    }
]