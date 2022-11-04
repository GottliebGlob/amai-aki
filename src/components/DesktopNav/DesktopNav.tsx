import React, { useState } from 'react';
import logo from "../../img/logo.png";
import {Typography, useTheme} from "@mui/material";
import discord from "../../img/discord.png"
import twitter from "../../img/twitter.png"
import {Link, NavLink, useLocation} from "react-router-dom";
import isMobile from '../isMobile';
import {MdTableRows} from "react-icons/md";
import MobileNav from "../MobileNav";
import {FaTwitter, FaDiscord} from "react-icons/fa";

interface TextUnitProps {
    text: string,
    navLink: string
}

const TextUnit = ({text, navLink}: TextUnitProps) => {
    const location = useLocation();
    const theme = useTheme();

    return (
        <Link to={navLink} style={{
            textDecoration: 'none'}}>
                    <Typography variant="h5" style={{
                    fontFamily: 'Main',
                    fontWeight: 'bold',
                    padding: 10,
                    cursor: 'pointer',
                    color: location.pathname === navLink ? theme.palette.primary.contrastText : 'black',
                    borderRadius: 5,
                }}
                            sx={{
                                "&:hover": {boxShadow: "rgba(0, 0, 0, 0.4) 0px 5px 15px"},
                                transition: "all 0.3s ease-in-out",
                            }}
                           >
                            {text}
                            </Typography> 
            </Link>

    )}


export const DesktopNav = () => {
    const theme = useTheme()
    const mobile = isMobile();
   

    const [navShow, setNavShow] = useState(false);

    const handleCloseNav = () => {
        setNavShow(false)
    }


    return (
        <div style={{
            position: 'fixed',
            top: 0,
            justifyContent: 'space-between',
            display: 'flex',
            width: window.innerWidth,
            backgroundColor: '#fff',
            height: 65,
            boxShadow: 'rgb(0 0 0 / 30%) 5px 5px 10px',
            zIndex: 999
        }}>
            <div style={{
                display: 'flex',
                marginLeft: '2%'
            }}>
                 <Link to="/">

                    <img src={logo} alt="logo" style={{height: mobile ? 35 : 40, padding: 10,}} />
                    </Link>
            </div>

            <div style={{
                display: 'flex',
                marginRight: '3%',
                marginTop: 5
            }}>

{
    !mobile && <>
        <TextUnit text="DOJO" navLink="/dojo" />
        <TextUnit text="LORE" navLink="/lore" />
        <TextUnit text="AMAI MAP" navLink="/roadmap" />
        <TextUnit text="GALLERY" navLink="/gallery" />
        <TextUnit text="STORE" navLink="/store" />

        <FaDiscord style={{fontSize: 35, cursor: 'pointer', color: 'black', padding: 10,}}
                           onClick={() => window.open("https://discord.gg/jqYHrPZH", "_blank")}/>

                <FaTwitter style={{fontSize: 35, cursor: 'pointer', color: 'black', padding: 10,}}
                           onClick={() => window.open("https://twitter.com/CozyTown_", "_blank")}
                />
    </>
}

{
    mobile && <>

<MdTableRows
                    onClick={() => setNavShow(!navShow)}
                    style={{
                    color: 'black',
                        fontSize: 50
                }} />
    </>
}

<MobileNav isOpen={navShow} handleClose={handleCloseNav}/>
           
          


            </div>

        </div>
    );
};



