import React from 'react';
import logo from "../../img/logo.png";
import {Typography, useTheme} from "@mui/material";
import discord from "../../img/discord.png"
import twitter from "../../img/twitter.png"
import {Link, NavLink} from "react-router-dom";

interface TextUnitProps {
    text: string,
    navLink: string
}

const TextUnit = ({text, navLink}: TextUnitProps) => {

    return (
        <Link to={navLink} style={{
            textDecoration: 'none'}}>
                    <Typography variant="h5" style={{
                    fontFamily: 'Main',
                    fontWeight: 'bold',
                    padding: 10,
                    cursor: 'pointer',
                    color: 'black',
                    borderRadius: 5
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


    return (
        <div style={{
            position: 'fixed',
            top: 0,
            justifyContent: 'space-between',
            display: 'flex',
            width: '100%',
            backgroundColor: '#fff',
            height: 65,
            boxShadow: 'rgb(0 0 0 / 30%) 5px 5px 10px',
            zIndex: 999
        }}>
            <div style={{
                display: 'flex',
                marginLeft: '2%'
            }}>
                    <img src={logo} alt="logo" style={{height: 40,   padding: 10,}} />
    
            </div>

            <div style={{
                display: 'flex',
                marginRight: '3%',
                marginTop: 5
            }}>

            <TextUnit text="DOJO" navLink="/dojo" />
            <TextUnit text="LORE" navLink="/lore" />
            <TextUnit text="AMAI MAP" navLink="/roadmap" />
            <TextUnit text="GALLERY" navLink="/gallery" />
            <TextUnit text="STORE" navLink="/store" />


            </div>

        </div>
    );
};



